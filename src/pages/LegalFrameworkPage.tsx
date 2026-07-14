import { useEffect, type CSSProperties } from 'react'
import { ArrowDown, ArrowRight, BookOpen, CheckCircle2, CircleDollarSign, Clock3, ExternalLink, FileCheck2, Gavel, Landmark, Scale, ShieldCheck, Waypoints } from 'lucide-react'

const authorityLayers = [
  { number: '01', title: 'The Constitution', detail: 'Article I assigns Congress the taxing, borrowing, and spending powers. The Appropriations Clause requires an appropriation made by law before money may be drawn from the Treasury.' },
  { number: '02', title: 'Organic and authorizing law', detail: 'Creates agencies, programs, duties, eligibility rules, and substantive authorities. An authorization of appropriations may recommend funding, but normally does not itself provide budget authority.' },
  { number: '03', title: 'Budget and appropriations law', detail: 'Structures formulation and congressional decision-making, provides budget authority, and sets account-specific conditions, ceilings, floors, transfer authority, and periods of availability.' },
  { number: '04', title: 'Execution controls', detail: 'OMB apportionments, agency allotments, fund-control regulations, and recording rules translate enacted authority into legally controlled operating limits.' },
  { number: '05', title: 'Oversight and accountability', detail: 'Congress, GAO, inspectors general, financial auditors, performance reviews, and public reporting compare execution with the law and the results Congress intended.' },
]

const executionNodes = [
  ['Congress enacts', 'Budget authority and legal conditions'],
  ['OMB apportions', 'Resources divided by time or activity'],
  ['Agency allots', 'Internal legal and administrative limits'],
  ['Official obligates', 'Government incurs a binding liability'],
  ['Program performs', 'Goods, services, grants, or benefits delivered'],
  ['Treasury outlays', 'Payment liquidates the obligation'],
  ['Oversight tests', 'Law, records, results, and corrective action'],
]

const majorAuthorities = [
  ['Budget and Accounting Act of 1921', 'Created the consolidated presidential budget and the institutional foundation for OMB and GAO.'],
  ['Congressional Budget Act of 1974', 'Created the Budget Committees and CBO, and established the budget resolution, allocations, reconciliation, and enforcement procedures.'],
  ['Impoundment Control Act of 1974', 'Limits executive withholding of enacted budget authority and establishes procedures for rescissions and deferrals.'],
  ['Purpose, time, and recording statutes', '31 U.S.C. §§1301, 1501, 1502, and 1551–1558 govern authorized objects, bona fide needs, documentary evidence, expiration, and account closing.'],
  ['Antideficiency Act', '31 U.S.C. §§1341, 1342, and 1511–1519 prohibit excess or advance obligations, unauthorized voluntary services, and violations of apportionments or allotments.'],
  ['BBEDCA and Statutory PAYGO', 'Provide amended sequestration and scorecard mechanisms. Their application depends on the current statute, exemptions, designations, and later legislation.'],
  ['Federal Credit Reform Act of 1990', 'Measures the subsidy cost of direct loans and loan guarantees on a net-present-value basis when credit decisions are made.'],
  ['CFO Act, GPRA, and related reforms', 'Connect budget authority with financial leadership, audited reporting, strategic planning, performance measurement, evidence, and management review.'],
]

export function LegalFrameworkPage({ onNavigate }: { onNavigate: (route: string) => void }) {
  useEffect(() => { document.title = 'Federal Budget Legal Framework | Budget Matter' }, [])
  return <main className="policy-native">
    <section className="policy-hero">
      <div className="policy-hero-copy">
        <p className="eyebrow">Power of the purse · execution · accountability</p>
        <h1>Federal Budget Legal Framework</h1>
        <p>A current visual map of the constitutional, statutory, and administrative controls that determine who may commit public money, for what purpose, during what period, and within what amount.</p>
        <div className="policy-hero-actions">
          <a href="/knowledge/federal-budget-laws" onClick={(event) => { event.preventDefault(); onNavigate('/knowledge/federal-budget-laws') }}>Read the in-depth paper <ArrowRight /></a>
          <span>Verified July 13, 2026</span>
        </div>
      </div>
      <figure className="policy-hero-visual">
        <img src="/assets/img/budgetlaws.jpg" alt="Illustration of federal budget laws connecting Congress, agencies, public resources, and accountability" />
        <figcaption>Law connects policy decisions to controlled public spending.</figcaption>
      </figure>
    </section>

    <div className="native-shell policy-body">
      <section className="policy-opening">
        <div><p className="section-kicker">What this page does</p><h2>Law is the control system—not simply a list of acts</h2></div>
        <div><p>The federal budget framework allocates institutional power. Congress establishes programs and provides budget authority. The President proposes a budget and executes enacted law through OMB and executive agencies. Treasury manages cash and disbursement; GAO and Congress independently oversee whether funds were used consistently with law.</p><p>The President’s budget is a recommendation, not an appropriation. An agency’s mission, program authorization, or policy priority also does not automatically provide spendable authority. Officials must identify an enacted funding source and comply with every applicable limitation before obligating the United States.</p></div>
      </section>

      <section className="authority-diagram">
        <div className="section-heading"><div><p className="section-kicker">Visual 01 · legal hierarchy</p><h2>Where spending authority comes from</h2></div><p>Each lower layer must remain consistent with the authority above it. Administrative guidance can implement a statute; it cannot enlarge or replace one.</p></div>
        <div className="authority-stack" aria-label="Hierarchy of federal budget authority">{authorityLayers.map((layer, index) => <div data-testid="authority-layer" key={layer.number} style={{ '--layer': index } as CSSProperties}><span>{layer.number}</span><div><h3>{layer.title}</h3><p>{layer.detail}</p></div>{index < authorityLayers.length - 1 && <ArrowDown aria-hidden="true" />}</div>)}</div>
      </section>

      <section className="execution-diagram">
        <div className="section-heading"><div><p className="section-kicker">Visual 02 · control flow</p><h2>How authority becomes accountable spending</h2></div><p>An appropriation creates budget authority. An obligation creates a legal liability. An outlay pays it. Treating those events as interchangeable produces weak controls and misleading reporting.</p></div>
        <div className="execution-wire" aria-label="Flow of appropriated funds from enactment through oversight">{executionNodes.map(([title, detail], index) => <div data-testid="execution-node" className="execution-node" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><small>{detail}</small></div>{index < executionNodes.length - 1 && <ArrowRight aria-hidden="true" />}</div>)}</div>
      </section>

      <section className="pta-section">
        <div className="section-heading"><div><p className="section-kicker">Visual 03 · transaction screen</p><h2>Purpose, Time, and Amount</h2></div><p>A transaction should clear all three availability tests and the obligation-recording rules before approval.</p></div>
        <div className="pta-visual">
          <article><Landmark /><span>1</span><h3>Purpose</h3><strong>31 U.S.C. §1301(a)</strong><p>Does the expense logically advance the appropriation’s object, avoid a prohibition, and belong to no more specific appropriation?</p></article>
          <div className="pta-join" aria-hidden="true">+</div>
          <article><Clock3 /><span>2</span><h3>Time</h3><strong>31 U.S.C. §1502(a)</strong><p>Is this a bona fide need of the appropriation’s period of availability, with the correct treatment for the type of supply or service?</p></article>
          <div className="pta-join" aria-hidden="true">+</div>
          <article><CircleDollarSign /><span>3</span><h3>Amount</h3><strong>31 U.S.C. §§1341, 1517</strong><p>Is sufficient authority available after statutory limits, apportionments, allotments, commitments, and prior obligations?</p></article>
          <div className="pta-equals" aria-hidden="true">=</div>
          <aside><CheckCircle2 /><strong>Legally available</strong><small>Then document and record the obligation under 31 U.S.C. §1501.</small></aside>
        </div>
      </section>

      <section className="major-authorities">
        <div className="section-heading"><div><p className="section-kicker">The core architecture</p><h2>Major authorities and their jobs</h2></div><p>No single “Budget Act” controls the system. These authorities solve different constitutional, process, execution, enforcement, credit, and accountability problems.</p></div>
        <div className="authority-card-grid">{majorAuthorities.map(([title, detail], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="current-law-status">
        <div className="status-heading"><ShieldCheck /><div><p className="section-kicker">Accuracy update</p><h2>What is current—and what is historical</h2></div></div>
        <div className="status-grid">
          <article><strong>Current foundation</strong><p>The Appropriations Clause, Title 31 fiscal statutes, the 1921 and 1974 budget-process laws, the Antideficiency Act, the Impoundment Control Act, and current appropriations remain central.</p></article>
          <article><strong>Budget Control Act caps</strong><p>The BCA discretionary caps applied from FY2012 through FY2021 and are historical. They should not be described as today’s general discretionary limits.</p></article>
          <article><strong>Later spending caps</strong><p>The Fiscal Responsibility Act of 2023 separately established enforceable discretionary limits for FY2024 and FY2025. Always verify the statute applicable to the fiscal year under review.</p></article>
          <article><strong>PAYGO and sequestration</strong><p>Statutory PAYGO and amended mandatory-sequestration provisions require current-law analysis, including exemptions, special rules, designations, and intervening legislation.</p></article>
          <article><strong>Current execution guidance</strong><p>OMB Circular A‑11 dated August 29, 2025 is the current published edition located in this review and governs FY2027 formulation and budget-execution procedures.</p></article>
          <article><strong>Current enforcement evidence</strong><p>GAO published its FY2025 Antideficiency Act reports compilation on April 30, 2026, while recent impoundment decisions demonstrate continuing oversight of delayed or withheld funds.</p></article>
        </div>
      </section>

      <section className="institution-map">
        <div className="section-heading"><div><p className="section-kicker">Visual 04 · institutional roles</p><h2>Who controls what</h2></div><p>Budget authority moves through distinct institutions. Effective internal controls preserve those boundaries.</p></div>
        <div className="institution-wire">
          <article><Landmark /><h3>Congress</h3><p>Authorizes, appropriates, establishes conditions, oversees, and changes law.</p></article>
          <Waypoints className="wire-icon" aria-hidden="true" />
          <article><Gavel /><h3>President & OMB</h3><p>Propose the budget, coordinate policy, apportion resources, and supervise execution.</p></article>
          <Waypoints className="wire-icon" aria-hidden="true" />
          <article><FileCheck2 /><h3>Agencies</h3><p>Allot, obligate, deliver programs, maintain controls, and report results.</p></article>
          <Waypoints className="wire-icon" aria-hidden="true" />
          <article><Scale /><h3>GAO & oversight</h3><p>Audit, decide appropriations questions, investigate, and support congressional accountability.</p></article>
        </div>
      </section>

      <section className="paper-promotion">
        <BookOpen />
        <div><p className="section-kicker">Knowledge publication</p><h2>Federal Budget and Appropriations Law</h2><p>Continue with the 25-minute professional paper for historical case studies, the complete legal timeline, practical appropriation scenarios, current enforcement developments, and a seven-question pre-obligation checklist.</p><code>https://budgetmatter.ai.studio/knowledge/federal-budget-laws</code></div>
        <a href="/knowledge/federal-budget-laws" onClick={(event) => { event.preventDefault(); onNavigate('/knowledge/federal-budget-laws') }}>Federal Budget and Appropriations Law <ArrowRight /></a>
      </section>

      <section className="policy-sources">
        <div><p className="section-kicker">Verified primary sources</p><h2>Source of truth</h2></div>
        <div>
          <a href="https://constitution.congress.gov/browse/article-1/section-9/clause-7/" target="_blank" rel="noreferrer">Constitution Annotated <ExternalLink /></a>
          <a href="https://www.gao.gov/legal/appropriations-law/red-book" target="_blank" rel="noreferrer">GAO Red Book <ExternalLink /></a>
          <a href="https://www.gao.gov/legal/appropriations-law/resources" target="_blank" rel="noreferrer">Antideficiency Act <ExternalLink /></a>
          <a href="https://www.gao.gov/legal/appropriations-law/impoundment-control-act" target="_blank" rel="noreferrer">Impoundment Control Act <ExternalLink /></a>
          <a href="https://www.whitehouse.gov/wp-content/uploads/2025/08/a11.pdf" target="_blank" rel="noreferrer">OMB Circular A‑11 <ExternalLink /></a>
          <a href="https://www.congress.gov/crs-product/R47019" target="_blank" rel="noreferrer">CRS Executive Budget Process <ExternalLink /></a>
        </div>
      </section>
    </div>
  </main>
}
