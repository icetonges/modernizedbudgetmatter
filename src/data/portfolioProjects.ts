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
]

export const portfolioProjectByRoute = Object.fromEntries(portfolioProjects.map((project) => [project.route, project]))
export const portfolioCategories = [...new Set(portfolioProjects.map((project) => project.category))]
