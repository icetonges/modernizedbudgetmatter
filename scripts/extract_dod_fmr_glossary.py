"""Extract the DoD FMR glossary into a typed, browser-ready data module."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import pdfplumber


def extract(source: Path) -> tuple[str, str, list[dict[str, object]]]:
    overview: list[str] = []
    changes: list[str] = []
    entries: list[dict[str, object]] = []
    current: dict[str, object] | None = None

    with pdfplumber.open(source) as pdf:
        for page_index, page in enumerate(pdf.pages):
            words = [
                word
                for word in page.extract_words(extra_attrs=["fontname", "size"], use_text_flow=True)
                if 65 < word["top"] < 735 and word["text"] != f"G-{page_index + 1}"
            ]
            lines: list[list[dict[str, object]]] = []
            for word in words:
                if not lines or abs(float(lines[-1][0]["top"]) - float(word["top"])) > 2:
                    lines.append([word])
                else:
                    lines[-1].append(word)

            for line in lines:
                text = " ".join(str(word["text"]) for word in line).strip()
                if text.startswith("DoD 7000.14-R Financial Management Regulation Glossary"):
                    continue
                if text in {"GLOSSARY", "A. Overview", "B. List of Definitions"}:
                    continue
                if page_index == 0:
                    changes.append(text)
                    continue

                is_heading = all(
                    "BoldMT" in str(word["fontname"])
                    for word in line
                    if word["text"] != "*"
                ) and any("BoldMT" in str(word["fontname"]) for word in line)
                if is_heading:
                    if current:
                        entries.append(current)
                    current = {
                        "term": text.lstrip("* ").strip(),
                        "definition": [],
                        "page": page_index + 1,
                        "revised": text.startswith("*"),
                    }
                elif current:
                    current["definition"].append(text)  # type: ignore[union-attr]
                else:
                    overview.append(text)

    if current:
        entries.append(current)
    for entry in entries:
        entry["definition"] = " ".join(entry["definition"])  # type: ignore[arg-type]
    return " ".join(overview), " ".join(changes), entries


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    overview, changes, entries = extract(args.source)
    module = (
        "// Generated from the January 2024 DoD 7000.14-R glossary.\n"
        "// Run scripts/extract_dod_fmr_glossary.py to regenerate from the source PDF.\n\n"
        "export type DodFmrGlossaryEntry = { term: string; definition: string; page: number; revised: boolean }\n\n"
        f"export const dodFmrOverview = {json.dumps(overview, ensure_ascii=False)}\n\n"
        f"export const dodFmrMajorChanges = {json.dumps(changes, ensure_ascii=False)}\n\n"
        "export const dodFmrGlossary: DodFmrGlossaryEntry[] = "
        + json.dumps(entries, ensure_ascii=False, indent=2)
        + "\n"
    )
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(module, encoding="utf-8")
    print(f"Wrote {len(entries)} entries to {args.output}")


if __name__ == "__main__":
    main()
