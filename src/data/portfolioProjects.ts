export type PortfolioCategory = 'Budget & finance' | 'Data automation' | 'Business intelligence' | 'Analytics & AI' | 'Interactive visualization'

export type PortfolioProject = {
  route: string
  title: string
  shortTitle: string
  category: PortfolioCategory
  image: string
  summary: string
  outcome: string
  whyItMatters: string
  capabilities: string[]
  tools: string[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    route: '/project7/project7', title: 'Federal Budget Spend Plan Model', shortTitle: 'Spend Plan Model', category: 'Budget & finance', image: '/assets/project7/Spend%20Plan%20Demo.gif',
    summary: 'A scenario-driven operating-plan model that translates enacted resources into an executable, balanced funding plan and supports in-year monitoring.',
    outcome: 'Leaders can compare allocation, hiring, pay, non-pay, continuing-resolution, and obligation-rate scenarios before committing funds.',
    whyItMatters: 'Budget authority only creates value when it becomes a realistic operating plan. This model connects resource decisions to execution capacity and makes tradeoffs visible early.',
    capabilities: ['Scenario modeling and self-balancing controls', 'Pay and non-pay forecasting', 'Plan-versus-actual execution monitoring'], tools: ['Excel', 'Financial modeling', 'Federal budget execution'],
  },
  {
    route: '/tableau-1-citibike', title: 'Citi Bike Mobility Analysis', shortTitle: 'Citi Bike Analysis', category: 'Business intelligence', image: '/assets/img/tableau-1-citibike.JPG',
    summary: 'An interactive Tableau analysis of New York City bike-share activity, station demand, trip patterns, rider behavior, and geographic movement.',
    outcome: 'Users can identify high-volume stations, route concentrations, time patterns, and differences between rider segments.',
    whyItMatters: 'Mobility data becomes actionable when planners can see where and when demand occurs. The same approach supports asset placement, service planning, and capacity decisions.',
    capabilities: ['Geospatial demand analysis', 'Interactive filtering and drill-down', 'Operational trend visualization'], tools: ['Tableau', 'Geospatial analysis', 'Data storytelling'],
  },
  {
    route: '/project10/project10', title: 'Automated Excel Consolidation with Python', shortTitle: 'Excel Consolidation', category: 'Data automation', image: '/assets/project10/book.gif',
    summary: 'A repeatable Python workflow for combining multiple Excel workbooks or worksheets into a standardized analytical dataset.',
    outcome: 'Fragmented submissions can be parsed, normalized, combined, analyzed, and exported without repetitive copy-and-paste work.',
    whyItMatters: 'Consolidation is a common control point in budget and operational reporting. Automation reduces cycle time, manual errors, and version-control risk.',
    capabilities: ['Multi-file ingestion and schema alignment', 'Repeatable data transformation', 'Controlled analytical output'], tools: ['Python', 'Pandas', 'Excel'],
  },
  {
    route: '/project11/project11', title: 'Excel Change Detection with Python', shortTitle: 'Excel Change Detection', category: 'Data automation', image: '/assets/project11/compare.gif',
    summary: 'An automated comparison workflow that detects additions, removals, and changed values across Excel workbooks and worksheets.',
    outcome: 'Reviewers receive a focused record of what changed instead of manually comparing entire files cell by cell.',
    whyItMatters: 'Reliable change detection strengthens reconciliation, review, and auditability—especially when successive budget versions contain thousands of data points.',
    capabilities: ['Record-level comparison', 'Exception and variance identification', 'Review-ready change reporting'], tools: ['Python', 'Pandas', 'Excel'],
  },
  {
    route: '/project9/project9', title: 'Excel VBA Automation Toolkit', shortTitle: 'VBA Automation', category: 'Data automation', image: '/assets/project9/vba.jpg',
    summary: 'A collection of practical VBA patterns for finding, replacing, comparing, combining, returning, and analyzing information inside Microsoft Excel.',
    outcome: 'Recurring spreadsheet tasks become guided, repeatable operations that can be executed close to the user’s existing workflow.',
    whyItMatters: 'Many organizations still operate critical processes in Excel. Well-designed automation can improve consistency and free analysts to focus on exceptions and decisions.',
    capabilities: ['Workbook and worksheet automation', 'Cross-application data handling', 'Custom analytical and formatting routines'], tools: ['VBA', 'Excel', 'Office automation'],
  },
  {
    route: '/project13/project13', title: 'Federal Government Spending Dashboard', shortTitle: 'Federal Spending', category: 'Budget & finance', image: '/assets/project13/project13.PNG',
    summary: 'A Tableau dashboard that organizes federal budget and spending information into an accessible, filterable management view.',
    outcome: 'Users can explore spending patterns and compare funding activity without working directly through dense source tables.',
    whyItMatters: 'Public finance data is most useful when leaders and stakeholders can quickly move from totals to patterns, exceptions, and questions requiring follow-up.',
    capabilities: ['Budget and spending trend analysis', 'Interactive slicing and comparison', 'Executive-ready financial communication'], tools: ['Tableau', 'Federal spending data', 'Dashboard design'],
  },
  {
    route: '/project14/project14', title: 'Federal Budget Execution Dashboard', shortTitle: 'Execution Dashboard', category: 'Budget & finance', image: '/assets/project14/project14.PNG',
    summary: 'A reusable execution dashboard for monitoring and comparing plans, obligations, outlays, and performance across time or organizational segments.',
    outcome: 'Managers can identify execution variance, emerging year-end risk, and areas that require corrective action or updated forecasts.',
    whyItMatters: 'Execution dashboards turn periodic reporting into an active management system by showing whether resources are moving at the pace and toward the results intended.',
    capabilities: ['Plan-to-actual variance analysis', 'Execution-rate monitoring', 'Comparative performance views'], tools: ['Tableau', 'Budget execution', 'Management reporting'],
  },
  {
    route: '/project15/project15', title: 'SQL-to-Python Analytical Pipeline', shortTitle: 'SQL + Python Analytics', category: 'Analytics & AI', image: '/assets/project15/sqlalchemy.png',
    summary: 'An end-to-end analytical workflow that retrieves structured data from SQL, analyzes it with Python, and communicates findings through visual outputs.',
    outcome: 'Database records can move through a reproducible pipeline from query to transformation, analysis, and presentation.',
    whyItMatters: 'Connecting governed data stores to analytical tools reduces one-off extracts and creates a stronger foundation for repeatable, scalable decision support.',
    capabilities: ['Database retrieval and query integration', 'Dataframe-based analysis', 'Programmatic visualization'], tools: ['SQLAlchemy', 'Python', 'Pandas', 'Matplotlib'],
  },
  {
    route: '/project12/project12', title: 'Text Sentiment Analysis with Python', shortTitle: 'Text Analytics', category: 'Analytics & AI', image: '/assets/project12/text.gif',
    summary: 'A natural-language analysis workflow that classifies text sentiment and visualizes polarity and intensity across selected social-media accounts.',
    outcome: 'Large volumes of unstructured text become comparable signals that reveal tone, changes over time, and communication patterns.',
    whyItMatters: 'Organizations need structured ways to interpret feedback and public conversation. Text analytics helps prioritize what requires human review while preserving scale.',
    capabilities: ['Lexicon-based sentiment scoring', 'Automated text collection and preparation', 'Comparative sentiment visualization'], tools: ['Python', 'VADER', 'Pandas', 'Matplotlib'],
  },
  {
    route: '/tableau-2-fed-avg-salary', title: 'Federal Workforce and Salary Analysis', shortTitle: 'Federal Workforce', category: 'Business intelligence', image: '/assets/img/tableau-2-fed-avg-salary.JPG',
    summary: 'An interactive view of federal employment and salary patterns by geography, agency, occupation, education, and grade-related dimensions using public FY 2018 data.',
    outcome: 'Users can explore how workforce composition and compensation vary across organizations and locations.',
    whyItMatters: 'Workforce cost is a major operating driver. Clear segmentation supports staffing analysis, affordability discussions, and evidence-based human-capital planning.',
    capabilities: ['Workforce segmentation', 'Compensation distribution analysis', 'Geographic and organizational comparison'], tools: ['Tableau', 'Public workforce data', 'Interactive analytics'],
  },
  {
    route: '/tableau-3-covid19', title: 'COVID-19 Geographic Dashboard', shortTitle: 'COVID-19 Dashboard', category: 'Business intelligence', image: '/assets/img/tableau-3-covid19.JPG',
    summary: 'A state- and county-level Tableau dashboard for exploring reported COVID-19 cases and deaths across geography and time.',
    outcome: 'Users can move from a national view to local patterns and compare the scale and distribution of reported impacts.',
    whyItMatters: 'During rapidly changing events, decision-makers need consistent geographic context. The project demonstrates how public data can be transformed into an accessible situational-awareness product.',
    capabilities: ['Geographic drill-down', 'Time-series monitoring', 'Public-data dashboarding'], tools: ['Tableau', 'Public-health data', 'Geospatial visualization'],
  },
  {
    route: '/project5/project5', title: 'Clinical Trial Analysis: The Power of Plots', shortTitle: 'Clinical Trial Plots', category: 'Analytics & AI', image: '/assets/img/project5.PNG',
    summary: 'A Python analysis of experimental treatment data covering tumor response, metastatic progression, survival rates, uncertainty, and comparative outcomes.',
    outcome: 'Raw study observations are transformed into statistical summaries and decision-oriented charts that compare treatment performance over time.',
    whyItMatters: 'Good analytical graphics expose both magnitude and uncertainty. The techniques transfer directly to program evaluation, performance measurement, and evidence-based decisions.',
    capabilities: ['Grouped statistical analysis', 'Uncertainty and error-bar visualization', 'Comparative outcome assessment'], tools: ['Python', 'Pandas', 'Matplotlib'],
  },
  {
    route: '/project4/project4', title: 'Interactive Biodiversity Explorer', shortTitle: 'Biodiversity Explorer', category: 'Interactive visualization', image: '/assets/img/project4.PNG',
    summary: 'A browser-based dashboard that lets users select a sample and explore demographic metadata, microbial composition, and biodiversity measures.',
    outcome: 'Multiple linked charts update from one selection, creating a compact exploratory experience for complex scientific data.',
    whyItMatters: 'Interactive visual systems help nontechnical users investigate multidimensional data without losing the relationship between context, composition, and scale.',
    capabilities: ['Linked interactive charts', 'Dynamic selection and rendering', 'Multidimensional scientific storytelling'], tools: ['JavaScript', 'D3', 'Plotly', 'CSS'],
  },
  {
    route: '/project6/project6', title: 'Machine Learning for World Happiness Drivers', shortTitle: 'Happiness Modeling', category: 'Analytics & AI', image: '/assets/project6/project6.PNG',
    summary: 'A Python machine-learning workflow that cleans World Happiness data, prepares training and test sets, and models relationships between reported well-being and explanatory factors.',
    outcome: 'The analysis estimates which measured factors are associated with changes in happiness scores and demonstrates a complete supervised-learning workflow.',
    whyItMatters: 'Predictive models are most valuable when their drivers, assumptions, and limitations are understandable. This project connects model construction to interpretable evidence.',
    capabilities: ['Data preparation and feature selection', 'Train-test model development', 'Driver and relationship analysis'], tools: ['Python', 'Pandas', 'Scikit-learn', 'Regression'],
  },
  {
    route: '/project8/project8', title: 'Interactive Geospatial Data Platform', shortTitle: 'Geospatial Platform', category: 'Interactive visualization', image: '/assets/project8/project8.PNG',
    summary: 'A full geospatial workflow that prepares data with Python and presents layered, interactive maps using JavaScript, D3, GeoJSON, and Leaflet.',
    outcome: 'Users can explore locations, attributes, layers, legends, and pop-up detail through a responsive web map rather than a static image.',
    whyItMatters: 'Location often explains operational patterns that tables conceal. Layered maps support resource placement, risk analysis, service coverage, and regional comparison.',
    capabilities: ['Geospatial data preparation', 'Layered interactive mapping', 'Legends, pop-ups, and spatial context'], tools: ['Python', 'JavaScript', 'D3', 'Leaflet', 'GeoJSON'],
  },
  {
    route: '/project16/project16', title: 'ANY FED — Federal Financial Management Portal', shortTitle: 'ANY FED Portal', category: 'Analytics & AI', image: '/assets/project16/project16.png',
    summary: 'A flagship, any-agency financial-management portal spanning all 28 CFO Act and independent agencies, combining parsed DoD and SEC source data with a live USAspending.gov fallback across the entire FM lifecycle.',
    outcome: 'Analysts can switch agencies and instantly get a locally-run AI/ML workbench, a three-model AI Analyst, and document-level audit provenance instead of static, single-agency reporting.',
    whyItMatters: 'Federal financial management is fragmented across dozens of agencies and legacy systems. Building one AI-enabled, data-science-driven portal that works for any agency is a showcase of the full-stack digital transformation federal finance modernization needs.',
    capabilities: ['Any-agency financial data modeling across 28 CFO Act agencies', 'Local AI/ML workbench for forecasting, anomaly detection, and classification', 'Multi-provider AI FM Analyst chain (Gemini → Groq → Claude) with full data provenance'],
    tools: ['Next.js', 'TypeScript', 'DuckDB', 'USAspending API', 'Treasury FiscalData API', 'Gemini', 'Groq', 'Claude'],
  },
  {
    route: '/project17/project17', title: 'FedFin — Federal Finance Intelligence', shortTitle: 'FedFin', category: 'Analytics & AI', image: '/assets/project17/project17.png',
    summary: "A local-first federal finance intelligence prototype where the repository's own parsed data — 31,425 DoD budget-line observations and 17,078 USAspending award rows — is the traceable system of record.",
    outcome: 'Every dashboard figure carries its own source path, parser status, and timestamp, so leaders can trust a number instead of re-verifying it against the original workbook.',
    whyItMatters: 'Audit-ready federal financial reporting depends on traceability, not just accurate math. This data-engineering and AI-analytics build shows how evidentiary lineage can be designed in from day one — a repeatable model for scalable, audit-defensible digital transformation.',
    capabilities: ['Local-first lakehouse over 48 scanned source files', 'Budget Lab, Audit Readiness, and FinOps monitoring modules', 'Source-grounded AI Analyst that cites the same record shown on screen'],
    tools: ['Next.js', 'TypeScript', 'Excel/CSV parsers', 'USAspending extracts', 'AI Analyst', 'KPI drilldowns'],
  },
  {
    route: '/project18/project18', title: 'DoD FM System Architecture Blueprints', shortTitle: 'DoD FM Systems', category: 'Budget & finance', image: '/assets/project18/project18.png',
    summary: 'An interactive reference spanning 17 DoD financial management systems — GFEBS, GCSS-Army, LMP, Navy ERP, DAI, DEAMS, CEFMS, and more — each mapped through a shared Source → Detail → GL → Statement lineage model.',
    outcome: 'Financial managers and auditors can trace how any transaction moves from a feeder system through the general ledger to a reported financial-statement line, system by system.',
    whyItMatters: "DoD's fragmented systems landscape is one of the central obstacles to a clean audit opinion. Turning tribal knowledge of 17 systems into one consistent, data-driven reference is applied digital transformation for federal financial-systems modernization.",
    capabilities: ['Consistent Source→Detail→GL→Statement lineage explorer across 17 systems', 'Audit-readiness lens with FIAR/NFR/CAP remediation mapping', 'Worked transaction lifecycle use cases (travel, contracts, property, leases, IGT, F-35)'],
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Financial systems research'],
  },
  {
    route: '/project19/project19', title: 'AI Use Case Library — DoD FM, Audit & Finance', shortTitle: 'AI Use Case Library', category: 'Analytics & AI', image: '/assets/project19/project19.png',
    summary: 'A searchable AI intelligence library indexing 6,442 federal and DoD financial-management AI use cases across four source workbooks, including both 2025 OMB government-wide AI inventories.',
    outcome: "Leadership can move from a raw use-case count to a scored, evidence-backed shortlist of AI opportunities ranked against audit priorities and material line items before anything reaches a decision brief.",
    whyItMatters: "AI adoption in federal finance stalls when opportunities aren't inventoried, scored, or evidenced. Turning 6,442 scattered entries into one searchable, risk-scored data-science catalog puts machine learning and analytics in service of governance, not just a bigger spreadsheet.",
    capabilities: ['Full-text search and browse across 4 source workbooks and mission areas', 'Priority and risk scoring against FY27/FY28 audit priorities', 'Insights dashboard flagging evidence type and self-reported vs. source-derived data'],
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Full-text search', 'Excel/CSV ingestion', 'Data cataloging'],
  },
  {
    route: '/project20/project20', title: 'FY2027 DoD Budget Inside Analysis', shortTitle: 'FY2027 Budget Analysis', category: 'Budget & finance', image: '/assets/project20/project20.png',
    summary: "A portfolio-manager-grade breakdown of the $1.45T President's Budget request, covering the discretionary/mandatory topline split, a 19-title procurement deep dive, and an 18-program munitions analysis.",
    outcome: 'Reviewers get a structured read of where the FY2027 request concentrates risk and investment — including the $58.5B AI Arsenal and $53.6B Drone Dominance lines — instead of parsing hundreds of pages of exhibits by hand.',
    whyItMatters: "Budget review at this scale is fundamentally a data-analytics problem. Rebuilding a portfolio manager's own analytical process into a domain-native, AI-assisted product is a showcase of a subject-matter expert also acting as the digital transformer and engineer of their own decision-support tooling.",
    capabilities: ['Bimodal topline architecture analysis ($1.1T discretionary + $350B mandatory)', 'Procurement deep-dive across 19 appropriation titles and 18 munitions programs', 'Execution risk register mapped to the Advana → War Data Platform transition'],
    tools: ['Next.js', 'TypeScript', 'Neon PostgreSQL', 'Data analytics', 'PPBE domain modeling'],
  },
  {
    route: '/project21/project21', title: 'DoD Audit Readiness Intelligence System', shortTitle: 'Audit Readiness Intelligence', category: 'Analytics & AI', image: '/assets/project21/project21.png',
    summary: 'A decoded view of the FY2025 DODIG-2026-032 audit, mapping all 26 material weaknesses by remediation theme and matching 17 of them to existing Advana capability.',
    outcome: 'Audit and remediation teams can see, at a glance, which of the $859B in unsupported adjustments are already covered by Advana tooling and which require one of 10 proposed AI/ML remediation plays.',
    whyItMatters: 'Clearing 26 material weaknesses by FY2028 requires converting a dense IG report into a prioritized, capability-mapped roadmap. Applying anomaly detection, graph reconciliation, and agentic AI to real audit findings is machine learning aimed directly at the clean-opinion goal.',
    capabilities: ['26 material weaknesses mapped by remediation theme with dollar-at-risk analysis', 'Advana capability matrix covering 17 of 26 material weaknesses', '10 AI/ML remediation plays including anomaly detection and agentic CAP drafting'],
    tools: ['Next.js', 'TypeScript', 'Neon PostgreSQL', 'pgvector', 'Anomaly detection', 'Agentic AI'],
  },
  {
    route: '/project22/project22', title: 'Live Federal Obligation Execution Tracker', shortTitle: 'Obligation Tracker', category: 'Analytics & AI', image: '/assets/project22/project22.png',
    summary: 'An automated obligation-analytics platform with a weekly GitHub Actions pipeline pulling live DoD data from the USASpending.gov API, then chunking and embedding it into pgvector for AI-powered question answering.',
    outcome: 'Analysts get up-to-date agency obligations, top contract awards, and object-class trends alongside natural-language answers, plus automated TAFS aging, cancellation-risk, and ADA/FFMIA red-flag detection.',
    whyItMatters: 'Execution monitoring is only as useful as its freshness. Wiring a live federal spending API into an automated ETL-to-AI pipeline is a showcase of owning the entire data-engineering-to-data-science stack, not just the analysis layer.',
    capabilities: ['Weekly automated ETL from the USASpending.gov API via GitHub Actions', 'pgvector-embedded RAG pipeline for natural-language obligation Q&A', 'TAFS aging, cancellation-risk prediction, and ADA/FFMIA compliance flagging'],
    tools: ['GitHub Actions', 'USASpending API', 'pgvector', 'Neon PostgreSQL', 'RAG', 'ETL automation'],
  },
  {
    route: '/project23/project23', title: 'Journal Voucher Anomaly Detection & Graph Reconciliation', shortTitle: 'JV Anomaly Detection', category: 'Analytics & AI', image: '/assets/project23/project23.png',
    summary: 'A machine-learning pipeline that applies isolation forests and autoencoders to surface the 5,665-plus unsupported DoD accounting adjustments — $859B in FY2025 — for audit triage before quarter close.',
    outcome: 'Reviewers get a ranked list of anomalous journal vouchers instead of a flat ledger dump, plus a graph database with entity resolution that automatically flags unmatched intragovernmental buyer/seller pairs.',
    whyItMatters: "Manually triaging hundreds of thousands of journal vouchers doesn't scale to an $859B adjustment problem. Applying unsupervised machine learning and graph-based entity resolution is applied data science built specifically to close two named DoD material weaknesses.",
    capabilities: ['Isolation-forest and autoencoder anomaly scoring on journal voucher populations', 'Graph database with entity resolution for buyer/seller transaction matching', 'Human-review flagging for unmatched intragovernmental transaction pairs'],
    tools: ['Python', 'Isolation Forest', 'Autoencoders', 'Graph database', 'Entity resolution'],
  },
  {
    route: '/project24/project24', title: 'DoD Spending Semantic ETL & RAG Pipeline', shortTitle: 'Semantic ETL & RAG', category: 'Data automation', image: '/assets/project24/project24.png',
    summary: 'An end-to-end data-engineering pipeline that pulls live DoD obligation data from USASpending.gov every Sunday, chunks and embeds it into Neon pgvector, and exposes it through a RAG-powered AI chat interface.',
    outcome: 'Finance staff can ask natural-language questions about obligations and get answers grounded in the same live-refreshed source data, while an XGBoost model separately flags cancellation risk on expiring funds.',
    whyItMatters: 'Turning a scheduled data pull into a fully automated semantic-search and AI-chat layer is the practical definition of digital transformation in federal finance — moving from static spreadsheets to a continuously refreshed, AI-queryable knowledge system.',
    capabilities: ['Scheduled GitHub Actions ETL from the USASpending.gov API', 'Chunking and embedding pipeline into Neon pgvector for semantic search', 'XGBoost cancellation-risk modeling with USSGL TAFS and ADA compliance tracking'],
    tools: ['GitHub Actions', 'Neon pgvector', 'XGBoost', 'RAG', 'USSGL/TAFS domain modeling'],
  },
]

export const portfolioProjectByRoute = Object.fromEntries(portfolioProjects.map((project) => [project.route, project]))
export const portfolioCategories = [...new Set(portfolioProjects.map((project) => project.category))]
