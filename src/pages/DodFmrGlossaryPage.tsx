import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, BookOpen, CheckCircle2, ExternalLink, FileSearch, FileText, Search, ShieldCheck } from 'lucide-react'
import { dodFmrGlossary, dodFmrMajorChanges, dodFmrOverview } from '../data/dodFmrGlossary'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const sourcePdf = '/assets/publications/dod-fmr-glossary-january-2024.pdf'

export function DodFmrGlossaryPage({ onNavigate }: { onNavigate: (route: string) => void }) {
  const [query, setQuery] = useState('')
  const [letter, setLetter] = useState('All')

  useEffect(() => { document.title = 'DoD FMR Glossary | Budget Matter' }, [])

  const availableLetters = useMemo(() => new Set(dodFmrGlossary.map((entry) => entry.term[0].toUpperCase())), [])
  const visibleEntries = useMemo(() => {
    const search = query.trim().toLowerCase()
    return dodFmrGlossary.filter((entry) => {
      const matchesLetter = letter === 'All' || entry.term.toUpperCase().startsWith(letter)
      const matchesSearch = !search || `${entry.term} ${entry.definition}`.toLowerCase().includes(search)
      return matchesLetter && matchesSearch
    })
  }, [letter, query])

  const chooseLetter = (nextLetter: string) => {
    setLetter(nextLetter)
    document.getElementById('dod-fmr-terms')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <main className="dod-fmr-page">
    <section className="dod-fmr-hero">
      <div className="dod-fmr-hero-copy">
        <p className="eyebrow">DoD 7000.14-R · January 2024</p>
        <h1>Financial Management Regulation Glossary</h1>
        <p>A complete, searchable reading experience for the Department of Defense financial-management terms in the official 36-page glossary.</p>
        <div className="dod-fmr-hero-actions">
          <a href="#dod-fmr-terms">Search all terms <ArrowRight /></a>
          <a className="secondary" href={sourcePdf} target="_blank" rel="noreferrer">Open source PDF <ExternalLink /></a>
        </div>
      </div>
      <div className="dod-fmr-cover" aria-label="Publication summary">
        <span><ShieldCheck /></span>
        <p>Department of Defense</p>
        <strong>DoD FMR</strong>
        <small>Financial Management Regulation</small>
        <div><b>{dodFmrGlossary.length}</b><span>defined terms</span></div>
      </div>
    </section>

    <div className="dod-fmr-body">
      <section className="dod-fmr-orientation" aria-labelledby="glossary-purpose">
        <div>
          <p className="section-kicker">How to use this reference</p>
          <h2 id="glossary-purpose">Translate policy language into precise action</h2>
          <p>{dodFmrOverview}</p>
        </div>
        <div className="dod-fmr-use-grid">
          <article><FileSearch /><h3>Find the governing concept</h3><p>Search both titles and full definitions when reviewing policy, transactions, reports, or audit support.</p></article>
          <article><CheckCircle2 /><h3>Confirm the context</h3><p>Use the cited glossary page, then consult the applicable FMR volume and chapter for authoritative requirements.</p></article>
          <article><BookOpen /><h3>Align the team</h3><p>Use shared definitions in procedures, training, reconciliations, and issue papers to reduce ambiguity.</p></article>
        </div>
      </section>

      <section className="dod-fmr-change-note">
        <span><FileText /></span>
        <div><p className="section-kicker">Source record</p><h2>January 2024 administrative update</h2><p>{dodFmrMajorChanges}</p></div>
      </section>

      <section className="dod-fmr-explorer" id="dod-fmr-terms" aria-labelledby="glossary-heading">
        <div className="dod-fmr-explorer-heading">
          <div><p className="section-kicker">Complete A–Z reference</p><h2 id="glossary-heading">Explore all {dodFmrGlossary.length} definitions</h2></div>
          <p>Nothing is summarized or omitted: every definition is transcribed from pages G-2 through G-36 of the attached publication.</p>
        </div>
        <div className="dod-fmr-toolbar">
          <label><Search aria-hidden="true" /><span className="sr-only">Search glossary</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search terms and definitions…" /></label>
          <div className="dod-fmr-letters" aria-label="Filter glossary by first letter">
            <button className={letter === 'All' ? 'active' : ''} onClick={() => chooseLetter('All')}>All</button>
            {alphabet.map((item) => <button key={item} disabled={!availableLetters.has(item)} className={letter === item ? 'active' : ''} onClick={() => chooseLetter(item)}>{item}</button>)}
          </div>
          <p aria-live="polite"><strong>{visibleEntries.length}</strong> {visibleEntries.length === 1 ? 'definition' : 'definitions'} shown</p>
        </div>

        {visibleEntries.length ? <div className="dod-fmr-term-list">
          {visibleEntries.map((entry, index) => <article key={entry.term} id={`term-${entry.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
            <div className="dod-fmr-term-index"><span>{String(index + 1).padStart(3, '0')}</span><b>{entry.term[0]}</b></div>
            <div><div className="dod-fmr-term-title"><h3>{entry.term}</h3>{entry.revised && <span>Revised in source</span>}</div><p>{entry.definition}</p><small>Source page G-{entry.page}</small></div>
          </article>)}
        </div> : <div className="dod-fmr-empty"><Search /><h3>No definitions match</h3><p>Try a broader phrase or reset the letter filter.</p><button onClick={() => { setQuery(''); setLetter('All') }}>Show all definitions</button></div>}
      </section>

      <section className="dod-fmr-source">
        <div><p className="section-kicker">Verification and authority</p><h2>Read the original alongside the web reference</h2><p>This page preserves the attached January 2024 glossary text. The FMR’s specific volumes and chapters remain the source for detailed, authoritative requirements.</p></div>
        <div><a href={sourcePdf} target="_blank" rel="noreferrer"><FileText />Open the complete 36-page PDF <ExternalLink /></a><button onClick={() => onNavigate('/knowledge')}>Return to Knowledge <ArrowRight /></button></div>
      </section>
    </div>
  </main>
}
