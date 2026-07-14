import overviewRaw from './a11/20.0-section20-overview.md?raw'
import termsRaw from './a11/20.3-terms.md?raw'
import budgetAuthorityRaw from './a11/20.4-budget-authority.md?raw'

export type GlossaryTerm = {
  term: string
  definition: string
  letter: string
}

export type AuthoritySection = {
  id: string
  title: string
  body: string[]
}

const lines = (value: string) => value.replace(/\r/g, '').split('\n')

function parseGlossary(value: string): GlossaryTerm[] {
  const source = lines(value)
  const start = source.findIndex((line) => line.startsWith('20.3 ')) + 1
  const terms: GlossaryTerm[] = []
  let current: GlossaryTerm | undefined

  for (let index = start; index < source.length; index += 1) {
    const line = source[index].trim()
    const next = source[index + 1]?.trim() || ''
    if (!line) continue
    const isTerm = Boolean(next) && line.length < 105 && !/[.!?;:]$/.test(line)
    if (isTerm) {
      current = { term: line, definition: '', letter: line[0].toUpperCase() }
      terms.push(current)
    } else if (current) {
      current.definition += `${current.definition ? '\n\n' : ''}${line}`
    }
  }
  return terms
}

function parseAuthority(value: string): AuthoritySection[] {
  const result: AuthoritySection[] = []
  let current: AuthoritySection | undefined
  for (const rawLine of lines(value)) {
    const line = rawLine.trim()
    const match = /^\(([a-z])\)\s+(.+)$/.exec(line)
    if (match) {
      current = { id: match[1], title: match[2], body: [] }
      result.push(current)
    } else if (line && current) {
      current.body.push(line)
    }
  }
  return result
}

const overviewLines = lines(overviewRaw).map((line) => line.trim())
const summaryIndex = overviewLines.indexOf('Summary of Changes')
const contentsIndex = overviewLines.indexOf('Table of Contents')

export const section20 = {
  title: 'Section 20 — Terms and Concepts',
  edition: 'OMB Circular No. A–11 (2016)',
  route: '/knowledge/a-11/section-20',
  contents: overviewLines.slice(contentsIndex + 1, summaryIndex).filter(Boolean),
  changes: overviewLines.slice(summaryIndex + 1).filter(Boolean),
  terms: parseGlossary(termsRaw),
  authority: parseAuthority(budgetAuthorityRaw),
  sources: [
    { title: 'Section 20 overview', file: '20.0-section20-overview.md', text: overviewRaw },
    { title: '20.3 Special terms', file: '20.3-terms.md', text: termsRaw },
    { title: '20.4 Budget authority', file: '20.4-budget-authority.md', text: budgetAuthorityRaw },
  ],
}

export const glossaryLetters = [...new Set(section20.terms.map((item) => item.letter))]
