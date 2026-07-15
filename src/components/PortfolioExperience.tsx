import { useState } from 'react'
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, Layers3, Sparkles, Target } from 'lucide-react'
import { portfolioCategories, portfolioProjects, type PortfolioProject } from '../data/portfolioProjects'

export function PortfolioOverview({ onNavigate }: { onNavigate: (route: string) => void }) {
  const [category, setCategory] = useState('All projects')
  const visibleProjects = category === 'All projects' ? portfolioProjects : portfolioProjects.filter((project) => project.category === category)
  return <div className="native-shell portfolio-experience">
    <section className="portfolio-opening">
      <div><p className="section-kicker">Applied analytics portfolio</p><h2>Projects built to turn complex data into decisions.</h2><p>Explore practical work across federal budgeting, automation, business intelligence, machine learning, and interactive visualization. Each project demonstrates not only a tool, but a repeatable problem-solving capability.</p></div>
      <div className="portfolio-stat-grid"><span><strong>{portfolioProjects.length}</strong><small>Projects</small></span><span><strong>{portfolioCategories.length}</strong><small>Capability domains</small></span><span><strong>5</strong><small>Interactive dashboards</small></span></div>
    </section>
    <section className="portfolio-capability-strip" aria-label="Portfolio capabilities">
      <article><Target /><strong>Frame the decision</strong><p>Start with the operational question, not the chart type.</p></article>
      <article><Layers3 /><strong>Build the pipeline</strong><p>Prepare, reconcile, model, and organize evidence.</p></article>
      <article><BarChart3 /><strong>Communicate the signal</strong><p>Make patterns, tradeoffs, and exceptions visible.</p></article>
    </section>
    <section className="portfolio-library">
      <div className="portfolio-library-heading"><div><p className="section-kicker">Project library</p><h2>Capabilities in practice</h2></div><div className="portfolio-filters" aria-label="Filter projects by capability"><button className={category === 'All projects' ? 'active' : ''} onClick={() => setCategory('All projects')}>All projects</button>{portfolioCategories.map((value) => <button className={category === value ? 'active' : ''} onClick={() => setCategory(value)} key={value}>{value}</button>)}</div></div>
      <div className="portfolio-project-grid">{visibleProjects.map((project, index) => <article className={index === 0 && category === 'All projects' ? 'portfolio-project-card featured' : 'portfolio-project-card'} key={project.route}>
        <button className="portfolio-card-visual" onClick={() => onNavigate(project.route)} aria-label={`Open ${project.title}`}><img src={project.image} alt={`${project.title} project preview`} loading="lazy" /></button>
        <div className="portfolio-card-copy"><div className="portfolio-card-meta"><span>{project.category}</span><small>{String(portfolioProjects.indexOf(project) + 1).padStart(2, '0')}</small></div><h3>{project.title}</h3><p>{project.summary}</p><div className="portfolio-card-capabilities">{project.capabilities.map((capability) => <span key={capability}><CheckCircle2 />{capability}</span>)}</div><div className="portfolio-card-impact"><small>Why it matters</small><p>{project.whyItMatters}</p></div><div className="portfolio-card-footer"><div>{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><button onClick={() => onNavigate(project.route)}>Explore project <ArrowRight /></button></div></div>
      </article>)}</div>
    </section>
  </div>
}

export function PortfolioProjectBrief({ project, onNavigate }: { project: PortfolioProject; onNavigate: (route: string) => void }) {
  return <div className="native-shell portfolio-project-brief">
    <button className="portfolio-back" onClick={() => onNavigate('/portfolio-1-col')}><ArrowLeft /> Portfolio overview</button>
    <section className="portfolio-brief-hero">
      <div><div className="portfolio-brief-meta"><span>{project.category}</span><small>{project.tools.join(' · ')}</small></div><h2>{project.title}</h2><p>{project.summary}</p></div>
      <div className="portfolio-brief-outcome"><Sparkles /><small>Demonstrated outcome</small><p>{project.outcome}</p></div>
    </section>
    <section className="portfolio-brief-grid"><article><p className="section-kicker">Capabilities demonstrated</p>{project.capabilities.map((capability) => <span key={capability}><CheckCircle2 />{capability}</span>)}</article><article><p className="section-kicker">Why this work matters</p><p>{project.whyItMatters}</p></article></section>
  </div>
}
