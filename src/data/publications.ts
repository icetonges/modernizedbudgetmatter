export type Publication = {
  title: string
  summary: string
  route: string
  category: 'Guide' | 'Reference' | 'Model' | 'Engineering'
  readingTime: string
  featured?: boolean
}

// Add a new object here to publish another item in the Knowledge hub.
export const publications: Publication[] = [
  { title: 'A-11 · Section 20 — Terms and Concepts', summary: 'A visual, searchable reference to the Federal budget vocabulary and budget-authority concepts defined in OMB Circular A-11 Section 20.', route: '/knowledge/a-11/section-20', category: 'Reference', readingTime: '20 min', featured: true },
  { title: 'Federal Budget and Appropriations Law', summary: 'An in-depth professional introduction to the constitutional framework, core statutes, execution controls, historical cases, and real-world appropriation decisions.', route: '/knowledge/federal-budget-laws', category: 'Reference', readingTime: '25 min', featured: true },
  { title: 'Website Transformation and AI Studio Publishing', summary: 'The production blueprint used to modernize Budget Matter and publish it at a custom ai.studio address.', route: '/build-and-publish', category: 'Engineering', readingTime: '12 min', featured: true },
  { title: 'The Federal Budget Process', summary: 'A visual tour of formulation, congressional enactment, and agency execution from beginning to end.', route: '/process', category: 'Guide', readingTime: '10 min' },
  { title: 'Federal Budget Legal Framework', summary: 'A current visual map of the constitutional, statutory, and administrative controls that shape federal budgeting.', route: '/policy', category: 'Reference', readingTime: '10 min' },
  { title: 'Budget Spend Plan Model', summary: 'An applied portfolio example for turning appropriated resources into an executable financial plan.', route: '/project7/project7', category: 'Model', readingTime: '6 min' },
]
