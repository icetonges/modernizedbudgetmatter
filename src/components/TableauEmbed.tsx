import { createElement, useEffect } from 'react'
import { ExternalLink } from 'lucide-react'
import type { TableauProject } from '../data/tableauProjects'

const tableauApi = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'

export function TableauEmbed({ project }: { project: TableauProject }) {
  useEffect(() => {
    if (document.getElementById('tableau-embedding-api')) return
    const script = document.createElement('script')
    script.id = 'tableau-embedding-api'
    script.type = 'module'
    script.src = tableauApi
    document.head.appendChild(script)
  }, [])

  const src = `https://public.tableau.com/views/${project.view}`
  const height = window.innerWidth <= 600 ? project.mobileHeight : project.desktopHeight
  const viz = createElement('tableau-viz', {
    src,
    width: '100%',
    height: String(height),
    toolbar: 'bottom',
    'hide-tabs': '',
    device: window.innerWidth <= 600 ? 'phone' : 'desktop',
    'aria-label': project.label,
  })

  return <section className="tableau-embed" aria-label={`${project.label} interactive visualization`}>
    <div className="tableau-embed-frame" style={{ minHeight: `${height}px`, backgroundImage: `linear-gradient(rgba(7,28,42,.1),rgba(7,28,42,.1)),url("${project.preview}")` }}>
      <div className="tableau-loading" aria-hidden="true"><span />Loading interactive dashboard…</div>
      {viz}
    </div>
    <div className="tableau-embed-footer">
      <span>Interactive visualization hosted by Tableau Public</span>
      <a href={src} target="_blank" rel="noreferrer" aria-label={`Open ${project.label} on Tableau Public`}>Open in Tableau Public <ExternalLink size={16} /></a>
    </div>
  </section>
}
