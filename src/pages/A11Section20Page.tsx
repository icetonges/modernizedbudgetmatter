import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, BookMarked, ExternalLink, FileCheck2, Landmark, LibraryBig, Search, WalletCards } from 'lucide-react'
import { glossaryLetters, section20 } from '../data/a11Section20'

const authorityIcons = ['APP', 'CON', 'BOR', 'OFF']

export function A11Section20Page({ onNavigate }: { onNavigate: (route: string) => void }) {
  const [query, setQuery] = useState('')
  const [letter, setLetter] = useState('All')
  useEffect(() => { document.title = 'Section 20 — Terms and Concepts | Budget Matter' }, [])

  const visibleTerms = useMemo(() => section20.terms.filter((item) => {
    const matchesLetter = letter === 'All' || item.letter === letter
    const text = `${item.term} ${item.definition}`.toLowerCase()
    return matchesLetter && text.includes(query.trim().toLowerCase())
  }), [letter, query])

  return <main className="a11-page">
    <header className="a11-hero">
      <div className="a11-hero-grid" aria-hidden="true" />
      <div className="a11-hero-copy">
        <p className="eyebrow">OMB Circular A–11 · Knowledge Library</p>
        <h1>Section 20<br /><span>Terms &amp; Concepts</span></h1>
        <p>A working reference for the language that connects legal authority, obligations, collections, and outlays across the Federal budget.</p>
        <div className="a11-hero-actions">
          <a href="#glossary">Explore the glossary <ArrowRight /></a>
          <a className="secondary" href="https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/a11_current_year/s20.pdf" target="_blank" rel="noreferrer">Official Section 20 PDF <ExternalLink /></a>
        </div>
      </div>
      <aside className="a11-hero-dashboard" aria-label="Section 20 at a glance">
        <div><LibraryBig /><span><strong>{section20.terms.length}</strong><small>defined terms</small></span></div>
        <div><WalletCards /><span><strong>{section20.authority.length}</strong><small>authority concepts</small></span></div>
        <div><FileCheck2 /><span><strong>{section20.contents.length}</strong><small>outline entries</small></span></div>
        <p>Source edition<br /><strong>{section20.edition}</strong></p>
      </aside>
    </header>

    <div className="native-shell a11-body">
      <section className="a11-orientation">
        <div>
          <p className="section-kicker">Why this vocabulary matters</p>
          <h2>One dollar. Four distinct budget events.</h2>
          <p>Federal budget language describes where spending power comes from, when the Government makes a legal commitment, and when cash finally leaves Treasury. These are connected—but they are not interchangeable.</p>
        </div>
        <div className="budget-event-flow" aria-label="Budget authority to outlay flow">
          {[
            ['01', 'Budget authority', 'Law permits obligations'],
            ['02', 'Obligation', 'Government makes a commitment'],
            ['03', 'Outlay', 'Payment is made'],
            ['04', 'Program result', 'Public purpose is delivered'],
          ].map(([number, title, detail], index) => <div key={title}>
            <span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < 3 && <ArrowRight aria-hidden="true" />}
          </div>)}
        </div>
      </section>

      <section className="a11-outline">
        <div className="section-heading"><div><p className="section-kicker">Section map</p><h2>What Section 20 covers</h2></div><p>The complete outline from the supplied overview, organized as a quick reading path.</p></div>
        <div className="a11-outline-grid">{section20.contents.map((entry) => {
          const match = /^(20\.\d+|Ex–20)\s*(.*)$/.exec(entry)
          return <article key={entry}><span>{match?.[1] || '•'}</span><p>{match?.[2] || entry}</p></article>
        })}</div>
      </section>

      <section className="authority-explainer">
        <div className="section-heading"><div><p className="section-kicker">20.4 · Budget authority</p><h2>The legal power behind every obligation</h2></div><p>Budget authority is provided by law and takes several forms. The supplied material is reproduced below in full.</p></div>
        <blockquote>“Budget authority means the authority provided by law to incur financial obligations that will result in outlays.”</blockquote>
        <div className="authority-forms">
          {section20.authority.map((section, index) => <article key={section.id}>
            <span>{authorityIcons[index] || section.id.toUpperCase()}</span>
            <div><small>20.4({section.id})</small><h3>{section.title}</h3>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </article>)}
        </div>
      </section>

      <section className="a11-glossary" id="glossary">
        <div className="section-heading"><div><p className="section-kicker">20.3 · Complete reference</p><h2>Federal budget glossary</h2></div><p>Search definitions or filter by first letter. Every term and definition in the supplied Section 20.3 file is included.</p></div>
        <div className="glossary-toolbar">
          <label><Search aria-hidden="true" /><span className="sr-only">Search glossary</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search budget authority, rescission, outlay…" /></label>
          <div className="letter-filter" aria-label="Filter glossary by letter">
            {['All', ...glossaryLetters].map((item) => <button className={letter === item ? 'active' : ''} key={item} onClick={() => setLetter(item)}>{item}</button>)}
          </div>
        </div>
        <p className="glossary-count"><strong>{visibleTerms.length}</strong> of {section20.terms.length} terms</p>
        <div className="glossary-grid">{visibleTerms.map((item) => <article id={`term-${item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={item.term}>
          <span>{item.letter}</span><h3>{item.term}</h3>{item.definition.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>)}</div>
        {!visibleTerms.length && <div className="glossary-empty"><Search /><h3>No matching terms</h3><p>Try a broader phrase or select “All”.</p></div>}
      </section>

      <section className="a11-changes">
        <div><p className="section-kicker">Source notes</p><h2>Summary of changes</h2></div>
        <ol>{section20.changes.map((change, index) => <li key={change}><span>{String(index + 1).padStart(2, '0')}</span><p>{change}</p></li>)}</ol>
      </section>

      <section className="a11-source-record">
        <div className="section-heading"><div><p className="section-kicker">Completeness record</p><h2>Attached source files</h2></div><p>Open any record to review the exact source text embedded in this page.</p></div>
        {section20.sources.map((source) => <details key={source.file}><summary><BookMarked /><span><strong>{source.title}</strong><small>{source.file}</small></span><span>View full text</span></summary><pre>{source.text}</pre></details>)}
      </section>

      <aside className="a11-footer-cta"><Landmark /><div><p className="section-kicker">Continue learning</p><h2>Put the terms in legal context.</h2><p>See how constitutional authority, appropriations statutes, and execution controls fit together.</p></div><button onClick={() => onNavigate('/knowledge/federal-budget-laws')}>Open the appropriations law guide <ArrowRight /></button></aside>
    </div>
  </main>
}
