import { ArrowRight, CircleDollarSign, Clock3, ExternalLink, Gavel, Landmark, Scale, ShieldCheck } from 'lucide-react'
import { useEffect } from 'react'

const legalTimeline = [
  { year: '1787–1789', title: 'Constitutional power of the purse', body: 'Article I gives Congress the taxing, borrowing, and spending powers. The Appropriations Clause makes an enacted appropriation a legal condition for drawing money from the Treasury and requires public accounts.' },
  { year: '1870–1906', title: 'Antideficiency controls take shape', body: 'Congress first prohibited departments from exceeding appropriations, then strengthened the rule, restricted voluntary services, added penalties, and developed the apportionment system.' },
  { year: '1921', title: 'Budget and Accounting Act', body: 'The Act required a consolidated presidential budget, created the Bureau of the Budget—later OMB—and established the General Accounting Office, now GAO.' },
  { year: '1974', title: 'Congressional Budget and Impoundment Control Act', body: 'Congress created its Budget Committees and CBO, established the budget-resolution and reconciliation framework, and prescribed the exclusive statutory process for rescissions and deferrals.' },
  { year: '1985–1987', title: 'Deficit control and separation of powers', body: 'Gramm–Rudman–Hollings introduced sequestration. After Bowsher v. Synar invalidated the Comptroller General’s executive role, Congress revised the enforcement mechanism.' },
  { year: '1990', title: 'Budget Enforcement and credit reform', body: 'The Budget Enforcement Act shifted attention to discretionary caps and PAYGO; the Federal Credit Reform Act moved loans and guarantees to subsidy-cost budgeting.' },
  { year: '1990–2010', title: 'Management, performance, and accountability', body: 'The CFO Act, GPRA, and GPRA Modernization Act linked resources to financial control, auditable reporting, strategic goals, and measurable performance.' },
  { year: '2010–2013', title: 'PAYGO and sequestration return', body: 'Statutory PAYGO created rolling scorecards for direct spending and revenue laws. The Budget Control Act of 2011 triggered the 2013 sequestration and capped discretionary funding through FY2021.' },
  { year: '2021–2026', title: 'Transparency and renewed impoundment scrutiny', body: 'Congress required online budget justifications and apportionment transparency. GAO’s recent decisions and FY2025 Antideficiency Act compilation show that execution law remains an active oversight field.' },
]

const useCases = [
  { rule: 'Purpose', question: 'May this account buy it?', answer: 'Start with the appropriation and authorizing law. Apply the necessary-expense test: the item must bear a logical relationship to the appropriation, not be prohibited, and not belong to another more specific appropriation.', example: 'An agency wants to pay a public-awareness campaign from an IT modernization account. Mission relevance alone is insufficient if the expense is outside the account’s statutory object.' },
  { rule: 'Time', question: 'Is this a bona fide need of the fund’s period?', answer: 'Identify whether the money is annual, multiple-year, or no-year. An annual appropriation generally serves needs arising during that fiscal year; severable services and nonseverable undertakings require different analyses.', example: 'A year-end order cannot merely stockpile next year’s routine needs. A properly documented, nonseverable project may be charged when the need arises even if performance continues later.' },
  { rule: 'Amount', question: 'Is enough legally available?', answer: 'Check the account balance, statutory ceilings and floors, OMB apportionment, agency allotments, commitments, and prior obligations before creating a binding obligation.', example: 'A valid contract that exceeds an allotment can trigger 31 U.S.C. §1517 even when the parent appropriation still has an unobligated balance.' },
  { rule: 'Movement', question: 'Transfer or reprogramming?', answer: 'A transfer moves budget authority between appropriation accounts and requires statutory authority. A reprogramming shifts funds within an account; it may be constrained by law, report language, and committee-notification procedures.', example: 'Moving funds from Operations to Procurement is not an internal management adjustment—it needs transfer authority and compliance with any transfer ceiling.' },
  { rule: 'Continuing resolution', question: 'What may continue before full-year funding?', answer: 'Read the CR itself and OMB guidance. Agencies normally operate at a prescribed rate and under restrictions on new starts, accelerated obligations, or actions that would preempt final congressional decisions.', example: 'A program authorized in permanent law may still lack usable annual budget authority. Under a CR, a new production line may be barred even when the account receives a temporary rate.' },
  { rule: 'Lapse or withholding', question: 'Must activity stop, or may funds be delayed?', answer: 'During a lapse, continue only activities with available funding or a recognized legal exception. With enacted funds, an executive delay must be programmatic or comply with the Impoundment Control Act; policy disagreement is not independent authority.', example: 'Personnel protecting life or property may incur limited obligations during a shutdown, but payment generally awaits an appropriation. A policy pause cannot be held through expiration to defeat Congress’s decision.' },
]

const sources = [
  ['Constitution Annotated: Appropriations Clause', 'https://constitution.congress.gov/browse/article-1/section-9/clause-7/'],
  ['GAO Red Book', 'https://www.gao.gov/legal/appropriations-law/red-book'],
  ['GAO Antideficiency Act resources', 'https://www.gao.gov/legal/appropriations-law/resources'],
  ['GAO Impoundment Control Act decisions', 'https://www.gao.gov/legal/appropriations-law/impoundment-control-act'],
  ['OMB Circular A-11', 'https://www.whitehouse.gov/wp-content/uploads/2025/08/a11.pdf'],
  ['CRS: Executive Budget Process', 'https://www.congress.gov/crs-product/R47019'],
  ['CRS: Federal Funding Gaps', 'https://www.congress.gov/crs-products/product/pdf/RS/RS20348'],
  ['Title 31, Chapter 13', 'https://uscode.house.gov/view.xhtml?edition=prelim&req=granuleid%3AUSC-prelim-title31-chapter13'],
]

export function BudgetLawPaper({ onNavigate }: { onNavigate: (route: string) => void }) {
  useEffect(() => { document.title = 'Federal Budget and Appropriations Law | Budget Matter' }, [])
  return <main className="law-paper">
    <section className="law-paper-hero">
      <div className="law-paper-hero-content">
        <p className="eyebrow">Budget Matter professional reference · updated July 13, 2026</p>
        <h1>Federal Budget and Appropriations Law</h1>
        <p className="law-deck">A practical introduction to what the law requires, why the controls exist, how money moves from legislation to execution, and what history teaches when constitutional boundaries are tested.</p>
        <div className="law-paper-meta"><span>Professional introduction</span><span>25 minute read</span><span>Primary government sources</span></div>
      </div>
    </section>

    <article className="native-shell law-paper-body">
      <aside className="law-scope"><ShieldCheck /><div><strong>Scope and method</strong><p>This paper explains the generally applicable federal framework. An agency must still read the current appropriation, authorizing law, general provisions, account language, OMB apportionment, and its own fund-control regulations. It is educational analysis, not a legal opinion for a particular transaction.</p></div></aside>

      <section className="law-introduction">
        <div><p className="section-kicker">The governing idea</p><h2>Constitutional foundation</h2></div>
        <div><p>Federal budget law is the operating system of representative government. Article I, section 9, clause 7 provides that money may be drawn from the Treasury only as a consequence of appropriations made by law. That short command does three jobs: Congress decides whether public money is available; executive officers may execute but not rewrite that decision; and the public is entitled to an account of receipts and expenditures.</p><p>An appropriation is therefore more than financing. It is legislation that defines authority through <strong>purpose, time, and amount</strong>. These dimensions convert policy into administrable boundaries. They also make accountability possible: an auditor, inspector general, appropriations committee, court, or taxpayer can compare what Congress enacted with what the executive branch obligated and spent.</p><p>The President’s budget remains a recommendation. Congress may accept, reject, restructure, or ignore it. Once legislation is enacted, however, the President must faithfully execute the resulting law, subject to the limited flexibility Congress has granted.</p></div>
      </section>

      <section className="law-control-stack" aria-label="Federal budget legal control stack">
        <p className="section-kicker">From highest authority to transaction</p><h2>The legal control stack</h2>
        <div className="control-stack">
          {[
            ['01', 'Constitution', 'Congress holds the purse; the President executes enacted law.'],
            ['02', 'Organic and authorizing statutes', 'Create agencies, programs, duties, benefits, and substantive limits.'],
            ['03', 'Budget and appropriations statutes', 'Provide and condition budget authority; establish process and enforcement.'],
            ['04', 'Apportionment and fund controls', 'OMB and agencies subdivide authority to prevent deficiency or premature exhaustion.'],
            ['05', 'Obligation and outlay', 'Officials create legal liabilities, record them, receive performance, and make payment.'],
            ['06', 'Reporting and oversight', 'SF 133, financial statements, USASpending, inspectors general, GAO, and Congress test compliance.'],
          ].map(([number, title, body]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></div>)}
        </div>
      </section>

      <section className="law-workflow">
        <div className="section-heading"><div><p className="section-kicker">Authority becomes action</p><h2>How the appropriations system works</h2></div><p>The process is not one statute or one annual vote. It is a chain of legal decisions, with a different institution responsible at each control point.</p></div>
        <ol className="law-flow">
          {[
            ['Authorize', 'Congress creates or continues a program and may set eligibility, duties, or an authorization of appropriations. Authorization alone usually does not supply spendable budget authority.'],
            ['Set the fiscal plan', 'The congressional budget resolution coordinates totals and may provide reconciliation instructions. It is not presented to the President and does not itself fund agencies.'],
            ['Allocate and appropriate', 'A 302(a) allocation reaches the Appropriations Committees; 302(b) suballocations guide the 12 subcommittees. Enacted appropriations supply budget authority and legal conditions.'],
            ['Apportion and allot', 'OMB apportions most executive resources under the Antideficiency Act. Agencies then allot or suballot funds under approved administrative-control systems.'],
            ['Commit and obligate', 'A commitment reserves funds administratively; an obligation creates a definite legal liability. Obligations must satisfy purpose, time, amount, and 31 U.S.C. §1501 recording requirements.'],
            ['Perform and outlay', 'Goods, services, grants, or benefits are delivered and the government liquidates obligations through payments. An outlay is not the same event as an obligation.'],
            ['Report and oversee', 'Agencies reconcile execution data, report budgetary resources and financial results, evaluate performance, and respond to congressional, GAO, inspector-general, and public oversight.'],
          ].map(([title, body], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}
        </ol>
      </section>

      <section className="availability-section">
        <div className="section-heading"><div><p className="section-kicker">The transaction test</p><h2>Purpose · Time · Amount</h2></div><p>Appropriations law review should occur before an official commits the government—not after an invoice arrives.</p></div>
        <div className="availability-grid">
          <article><Landmark /><h3>Purpose</h3><strong>31 U.S.C. §1301(a)</strong><p>Use appropriations only for the objects Congress made available. The necessary-expense doctrine fills reasonable operational gaps but cannot defeat an express prohibition or a more specific appropriation.</p></article>
          <article><Clock3 /><h3>Time</h3><strong>31 U.S.C. §1502(a)</strong><p>Charge a fixed-period appropriation only for legitimate needs of its availability period. Expired accounts remain available for limited adjustments and liquidation, not new obligations.</p></article>
          <article><CircleDollarSign /><h3>Amount</h3><strong>31 U.S.C. §§1341, 1342, 1517</strong><p>Do not exceed an appropriation, fund, apportionment, or allotment; do not obligate in advance of appropriations; and do not accept unauthorized voluntary services.</p></article>
        </div>
      </section>

      <section className="statute-map">
        <p className="section-kicker">What each major law contributes</p><h2>Core statutory architecture</h2>
        <div className="statute-table" role="table" aria-label="Major federal budget laws and their effects">
          <div role="row" className="statute-header"><span role="columnheader">Authority</span><span role="columnheader">Why it exists</span><span role="columnheader">Operational effect</span></div>
          {[
            ['Budget and Accounting Act of 1921', 'Replace fragmented agency requests with a coordinated executive budget.', 'Requires a consolidated presidential submission and anchors OMB and GAO’s institutional roles.'],
            ['Congressional Budget Act of 1974', 'Give Congress its own comprehensive process and analytic capacity.', 'Creates budget resolutions, committee allocations, reconciliation, points of order, Budget Committees, and CBO.'],
            ['Impoundment Control Act of 1974', 'Prevent unilateral executive nullification of enacted spending choices.', 'Requires special messages; rescissions need enactment and deferrals are limited. Funds may not be withheld simply until they expire.'],
            ['Antideficiency Act', 'Keep execution within congressional and administrative limits.', 'Prohibits excess or advance obligations and unauthorized voluntary service; requires apportionment, discipline, and violation reports.'],
            ['31 U.S.C. §§1301, 1501, 1502, 1551–1558', 'Make account availability and obligation records legally meaningful.', 'Governs purpose, documentary evidence, bona fide needs, expiration, and closing of accounts.'],
            ['BBEDCA, Budget Enforcement Act, and Statutory PAYGO', 'Enforce aggregate fiscal choices after legislation is scored.', 'Uses caps, scorecards, points of order, or sequestration depending on the current statutory regime and enacted exceptions.'],
            ['Federal Credit Reform Act of 1990', 'Expose the long-term cost of direct loans and guarantees when decisions are made.', 'Budgets the estimated subsidy cost on a net-present-value basis and separates financing accounts.'],
            ['CFO Act, GPRA, and related reforms', 'Connect legal authority to reliable financial information and results.', 'Establishes financial leadership, audited statements, strategic plans, performance goals, reviews, and public reporting.'],
          ].map(([law, why, effect]) => <div role="row" key={law}><strong role="cell">{law}</strong><span role="cell">{why}</span><span role="cell">{effect}</span></div>)}
        </div>
      </section>

      <section className="law-history">
        <div className="section-heading"><div><p className="section-kicker">Law shaped by conflict</p><h2>Historical case studies</h2></div><p>Budget controls are institutional memory. Each major reform responds to a recurring failure: fragmentation, overspending, executive withholding, weak information, or breakdown in enactment.</p></div>
        <div className="law-case-grid">
          <article><span>1970s · Impoundment</span><Gavel /><h3>Nixon-era withholding and the 1974 settlement</h3><p>President Nixon’s broad refusal to spend funds for programs he opposed intensified a constitutional dispute over whether the executive could defeat enacted appropriations. Congress answered with the Impoundment Control Act: the President may propose a rescission, but Congress must enact it; a deferral is temporary and cannot substitute executive policy for law.</p><strong>Impact:</strong><p>Modern execution analysis asks whether a delay is a legitimate programmatic incident or an unreported impoundment. Recent GAO decisions show this question remains live.</p></article>
          <article><span>1985–1987 · Sequestration</span><Scale /><h3>Gramm–Rudman–Hollings and Bowsher v. Synar</h3><p>Congress sought automatic deficit reduction through sequestration calculations led by the Comptroller General. In 1986, the Supreme Court held that Congress could not retain removal control over an officer exercising executive power. Congress revised the mechanism, illustrating that even fiscal enforcement must respect separation of powers.</p><strong>Impact:</strong><p>Today’s sequestration statutes assign execution calculations to OMB while CBO supplies independent estimates to Congress.</p></article>
          <article><span>1995–2019 · Funding gaps</span><Clock3 /><h3>Shutdowns turn the ADA into operating law</h3><p>The FY1996 shutdowns disrupted parks, passports, research, contracting, and public services. FY2014 produced a 16-day shutdown. The FY2019 partial shutdown lasted 35 days—the longest full-day funding gap—and demonstrated that “excepted” work can continue while payment, grants, procurement, and oversight remain constrained.</p><strong>Impact:</strong><p>Agencies now maintain contingency plans under OMB Circular A‑11, but a plan cannot create authority that the Antideficiency Act withholds.</p></article>
          <article><span>2011–2013 · Automatic cuts</span><CircleDollarSign /><h3>The Budget Control Act and 2013 sequestration</h3><p>When the Joint Select Committee process did not achieve the prescribed deficit reduction, statutory automatic reductions took effect. CBO reported lowered discretionary caps and mandatory sequestration, while agencies translated uniform legal reductions into program-level effects.</p><strong>Impact:</strong><p>Across-the-board enforcement can deliver a numerical target yet impose uneven operational costs, showing the difference between aggregate budget control and program management.</p></article>
          <article><span>2019–2020 · Ukraine assistance</span><Landmark /><h3>Apportionment cannot become policy impoundment</h3><p>GAO concluded that OMB violated the Impoundment Control Act when it withheld security assistance for a policy reason. The decision stated that faithful execution does not permit the President to replace Congress’s enacted priorities with the President’s own.</p><strong>Impact:</strong><p>Congress later strengthened apportionment-transparency requirements, recognizing that footnotes and timing controls can have the same practical force as statutory text.</p></article>
          <article><span>2025–2026 · Current enforcement</span><ShieldCheck /><h3>FEMA, NIH, and reported ADA violations</h3><p>In 2025, GAO found Impoundment Control Act violations in several funding-pause matters, including certain FEMA assistance and NIH grant funds. On April 30, 2026, GAO published its FY2025 compilation of agency Antideficiency Act reports.</p><strong>Impact:</strong><p>Appropriations law is not an archival specialty: delayed grants, staffing actions, apportionments, and execution directives can create current legal and oversight exposure.</p></article>
        </div>
      </section>

      <section className="law-timeline-section">
        <p className="section-kicker">A century of institutional design</p><h2>How the framework evolved</h2>
        <ol className="law-timeline">{legalTimeline.map((entry) => <li data-testid="law-timeline-entry" key={entry.year}><time>{entry.year}</time><div><h3>{entry.title}</h3><p>{entry.body}</p></div></li>)}</ol>
      </section>

      <section className="use-case-section">
        <div className="section-heading"><div><p className="section-kicker">Apply the law before obligating</p><h2>Practical appropriation use cases</h2></div><p>These examples show the questions a program manager, budget analyst, contracting officer, certifying official, counsel, or fund holder should surface early.</p></div>
        <div className="use-case-grid">{useCases.map((item, index) => <article data-testid="appropriation-use-case" key={item.rule}><span>{String(index + 1).padStart(2, '0')} · {item.rule}</span><h3>{item.question}</h3><p>{item.answer}</p><aside><strong>Example</strong>{item.example}</aside></article>)}</div>
      </section>

      <section className="current-framework">
        <div><p className="section-kicker">Verified current · July 13, 2026</p><h2>Current operating framework</h2></div>
        <div className="current-grid">
          <article><strong>2025 Circular A‑11</strong><p>OMB’s August 29, 2025 edition is the current published operational instruction located in this review. It covers FY2027 formulation and execution controls including apportionment, continuing resolutions, lapses, SF 133 reporting, ADA reporting, and fund-control regulations.</p></article>
          <article><strong>FY2025 ADA compilation</strong><p>GAO’s April 30, 2026 compilation is the newest annual collection located in this review. Reported violations are practical evidence of where controls fail and should be used in training and risk reviews.</p></article>
          <article><strong>Impoundment remains active</strong><p>GAO’s 2025 decisions include findings involving FEMA and NIH funds. Officials must distinguish an ordinary programmatic delay from a withholding that requires an ICA special message or immediate release.</p></article>
          <article><strong>Annual law still controls</strong><p>Permanent statutes are only the foundation. Account text, provisos, general provisions, anomalies in a CR, emergency designations, transfer authorities, and later amendments can change the answer for a fiscal year.</p></article>
        </div>
      </section>

      <section className="law-practice-checklist">
        <div><p className="section-kicker">A defensible file</p><h2>Seven questions before approval</h2></div>
        <ol>{[
          'What exact statute and account provide the authority?',
          'Is the proposed object a permissible purpose, and is a more specific account available?',
          'When did the bona fide need arise, and what is the appropriation’s availability period?',
          'What unobligated balance is legally available after ceilings, floors, apportionments, and allotments?',
          'Does the action create a valid obligation, and is the documentary evidence sufficient under 31 U.S.C. §1501?',
          'Is any transfer, reprogramming, notification, competition, or approval requirement triggered?',
          'How will the decision be recorded, reported, monitored, and explained to an independent reviewer?',
        ].map((question, index) => <li key={question}><span>{index + 1}</span>{question}</li>)}</ol>
      </section>

      <section className="law-sources">
        <div><p className="section-kicker">Primary-source reading room</p><h2>Official sources</h2><p>Use these sources—and the specific current appropriation—to validate an operational conclusion. Historical summaries in this paper are explanatory, not substitutes for enacted text or a formal legal decision.</p></div>
        <div>{sources.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}>{label}<ExternalLink /></a>)}</div>
      </section>

      <button className="law-back-link" onClick={() => onNavigate('/knowledge')}>Return to the Knowledge hub <ArrowRight /></button>
    </article>
  </main>
}
