import { AlertTriangle, ArrowRight, BookOpenCheck, CheckCircle2, CircleDollarSign, ExternalLink, FileInput, FileOutput, Gauge, Lightbulb, Scale, Target, UsersRound } from 'lucide-react'
import { phaseRoutes, processSources, processStepByRoute, processSteps, type BudgetPhase } from '../data/processJourney'

const phaseBlueprints: Record<BudgetPhase, { purpose: string; reality: string; questions: string[]; roles: string[] }> = {
  Formulation: {
    purpose: 'Convert policy, mission need, performance evidence, and cost drivers into one coherent presidential budget proposal.',
    reality: 'Agencies work on several fiscal years at once. Planning, current-year execution, audit, and the next request overlap continuously.',
    questions: ['What result are we buying?', 'What changes from current law or service?', 'Can the organization execute the request?'],
    roles: ['Agency components', 'Agency budget office', 'Leadership', 'OMB resource management offices'],
  },
  Enactment: {
    purpose: 'Translate proposals into congressional fiscal frameworks, program authority, appropriations, conditions, and oversight commitments.',
    reality: 'Congressional budgeting is not a single assembly line. Resolution, authorization, appropriations, oversight, and reconciliation can overlap or proceed differently each year.',
    questions: ['What is law versus an internal congressional control?', 'What funding and conditions were enacted?', 'What commitments enter the public record?'],
    roles: ['Budget committees', 'Authorizing committees', 'Appropriations committees', 'CBO, GAO, and agency witnesses'],
  },
  Execution: {
    purpose: 'Turn enacted authority into controlled obligations, payments, public results, reliable reporting, and evidence for the next cycle.',
    reality: 'Execution is a feedback system. Apportionment, financial plans, accounting, acquisition, performance, and congressional communication must stay reconciled.',
    questions: ['Is the resource legally available?', 'Are obligations and outlays on a credible path?', 'What variance requires management action?'],
    roles: ['OMB', 'Agency budget and program offices', 'CFO/accounting and acquisition teams', 'Treasury and congressional committees'],
  },
}

function JourneyMap({ route, onNavigate }: { route: string; onNavigate: (route: string) => void }) {
  const active = processStepByRoute[route]
  return <section className="journey-map" aria-label="Federal budget process map">
    <div className="journey-map-heading"><div><p className="section-kicker">Interactive process map</p><h2>One cycle. Twenty-two connected decisions.</h2></div><p>Select any step. The active route is highlighted; arrows show the primary learning sequence, while feedback loops continue across fiscal years.</p></div>
    <div className="journey-phase-rail">
      {(['Formulation', 'Enactment', 'Execution'] as BudgetPhase[]).map((phase, phaseIndex) => <div className={`journey-phase phase-${phase.toLowerCase()}`} key={phase}>
        <button className={route === phaseRoutes[phase] ? 'phase-label active' : 'phase-label'} onClick={() => onNavigate(phaseRoutes[phase])}><span>0{phaseIndex + 1}</span><strong>{phase}</strong><small>{phaseBlueprints[phase].purpose}</small></button>
        <div className="journey-step-row">{processSteps.filter((item) => item.phase === phase).map((item) => <button aria-current={active?.number === item.number ? 'step' : undefined} className={active?.number === item.number ? 'journey-step active' : 'journey-step'} key={item.route} onClick={() => onNavigate(item.route)}><span>{String(item.number).padStart(2, '0')}</span><strong>{item.shortTitle}</strong></button>)}</div>
      </div>)}
    </div>
    <div className="journey-loop"><span>Evidence &amp; oversight</span><ArrowRight /><span>Next formulation cycle</span><ArrowRight /><span>Revised policy and execution</span></div>
  </section>
}

function ProcessOverview({ route, onNavigate }: { route: string; onNavigate: (route: string) => void }) {
  const selectedPhase = (Object.entries(phaseRoutes).find(([, value]) => value === route)?.[0] || null) as BudgetPhase | null
  const phases = selectedPhase ? [selectedPhase] : (['Formulation', 'Enactment', 'Execution'] as BudgetPhase[])
  return <>
    <JourneyMap route={route} onNavigate={onNavigate} />
    <section className="process-reality-callout"><Lightbulb /><div><p className="section-kicker">Current operating reality</p><h2>The process is structured, but rarely linear.</h2><p>Statutory milestones provide a shared frame. In practice, multiple fiscal years overlap, congressional actions vary, continuing resolutions are common, and execution evidence feeds the next request. Use the 22 steps as control points—not as a promise that every year follows one calendar.</p></div></section>
    <section className="phase-blueprint-grid">{phases.map((phase) => {
      const blueprint = phaseBlueprints[phase]
      const phaseSteps = processSteps.filter((item) => item.phase === phase)
      return <article key={phase}>
        <div className="phase-blueprint-header"><span>{phase === 'Formulation' ? '01' : phase === 'Enactment' ? '02' : '03'}</span><div><p className="section-kicker">Phase blueprint</p><h2>{phase}</h2></div></div>
        <p className="phase-purpose">{blueprint.purpose}</p>
        <div className="phase-blueprint-body"><div><h3>Reality check</h3><p>{blueprint.reality}</p><h3>Questions to manage</h3><ul>{blueprint.questions.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul></div><div><h3>Primary participants</h3><ul>{blueprint.roles.map((item) => <li key={item}><UsersRound />{item}</li>)}</ul><h3>Steps</h3><div className="phase-mini-steps">{phaseSteps.map((item) => <button key={item.route} onClick={() => onNavigate(item.route)}><span>{item.number}</span>{item.shortTitle}</button>)}</div></div></div>
      </article>
    })}</section>
    <SourcePanel />
  </>
}

function SourcePanel() {
  return <section className="process-source-panel"><div><p className="section-kicker">Verified reference layer</p><h2>Authoritative sources</h2><p>Content enhancements are grounded in current executive, congressional, legal, reporting, and public-data guidance. Always verify the current-year circular, enacted law, and agency-specific controls before acting.</p></div><div>{processSources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span><strong>{source.label}</strong><small>{source.detail}</small></span><ExternalLink /></a>)}</div></section>
}

function StepIntelligence({ route, onNavigate }: { route: string; onNavigate: (route: string) => void }) {
  const item = processStepByRoute[route]
  if (!item) return null
  const previous = processSteps[item.number - 2]
  const next = processSteps[item.number]
  return <>
    <JourneyMap route={route} onNavigate={onNavigate} />
    <section className={`step-command-card phase-${item.phase.toLowerCase()}`}>
      <div className="step-command-number"><small>{item.phase}</small><strong>{String(item.number).padStart(2, '0')}</strong><span>of 22</span></div>
      <div className="step-command-main"><p className="section-kicker">Decision brief</p><h2>{item.shortTitle}</h2><p className="step-outcome">{item.outcome}</p><div className="decision-question"><Target /><span><small>Decision to manage</small><strong>{item.decision}</strong></span></div></div>
      <div className="step-command-nav">{previous && <button onClick={() => onNavigate(previous.route)}><small>Previous · {previous.number}</small><span>{previous.shortTitle}</span></button>}{next && <button onClick={() => onNavigate(next.route)}><small>Next · {next.number}</small><span>{next.shortTitle}</span></button>}</div>
    </section>
    <section className="step-io-section">
      <div className="section-heading"><div><p className="section-kicker">Control flow</p><h2>Inputs become accountable outputs</h2></div><p>Use this handoff map to define ownership, completeness, and the evidence needed for the next decision.</p></div>
      <div className="step-io-map"><div className="io-column"><FileInput /><small>Inputs</small>{item.inputs.map((value) => <span key={value}>{value}</span>)}</div><div className="io-transform"><span>{String(item.number).padStart(2, '0')}</span><strong>{item.shortTitle}</strong><ArrowRight /></div><div className="io-column"><FileOutput /><small>Outputs</small>{item.outputs.map((value) => <span key={value}>{value}</span>)}</div></div>
    </section>
    <section className="step-action-grid">
      <article className="action-playbook"><div><BookOpenCheck /><p className="section-kicker">Action playbook</p><h2>What good looks like</h2></div><ol>{item.actions.map((action, index) => <li key={action}><span>{index + 1}</span><p>{action}</p></li>)}</ol></article>
      <div className="step-insight-stack"><article><CircleDollarSign /><small>Practical use case</small><p>{item.useCase}</p></article><article><Lightbulb /><small>Expert insight</small><p>{item.insight}</p></article><article className="watchout"><AlertTriangle /><small>Watch for</small><p>{item.watchout}</p></article><article><Gauge /><small>Management signal</small><p>{item.metric}</p></article></div>
    </section>
    <section className="step-control-lens"><div><Scale /><p className="section-kicker">Production check</p><h2>Before this step is considered complete</h2></div><div>{['Authority and policy basis are identified', 'Amounts and narratives reconcile', 'Decision, owner, and assumptions are documented', 'Next-step handoff is accepted', 'Evidence is retained for oversight'].map((value) => <span key={value}><CheckCircle2 />{value}</span>)}</div></section>
    <SourcePanel />
  </>
}

export function ProcessEnhancement({ route, onNavigate }: { route: string; onNavigate: (route: string) => void }) {
  return <div className="native-shell process-intelligence">{processStepByRoute[route] ? <StepIntelligence route={route} onNavigate={onNavigate} /> : <ProcessOverview route={route} onNavigate={onNavigate} />}</div>
}

export function ProcessReferenceIntro({ route }: { route: string }) {
  const item = processStepByRoute[route]
  if (!item) return <section className="process-reference-intro">
    <div><p className="section-kicker">Applied reference</p><h2>Use the detailed guidance as a working map</h2><p>Connect the diagrams and narrative to an actual budget decision, identify the responsible organization, and record the evidence that moves the work into the next phase.</p></div>
    <div className="reference-lens"><span><small>Read for</small><strong>Sequence, ownership, and handoffs</strong></span><span><small>Apply to</small><strong>Current, upcoming, and future fiscal years</strong></span><span><small>Validate with</small><strong>Current law and agency controls</strong></span></div>
  </section>

  return <section className={`process-reference-intro phase-${item.phase.toLowerCase()}`}>
    <div><p className="section-kicker">Applied reference</p><h2>{item.shortTitle}: detailed guidance and visuals</h2><p>{item.outcome}</p></div>
    <div className="reference-lens"><span><small>Decision focus</small><strong>{item.decision}</strong></span><span><small>Evidence to retain</small><strong>{item.outputs[0]}</strong></span><span><small>Management signal</small><strong>{item.metric}</strong></span></div>
  </section>
}
