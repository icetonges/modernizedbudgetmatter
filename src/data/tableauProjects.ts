export type TableauProject = {
  label: string
  view: string
  preview: string
  desktopHeight: number
  mobileHeight: number
}

export const tableauProjects: Record<string, TableauProject> = {
  '/tableau-1-citibike': {
    label: 'Citi Bike (Jan 2020)',
    view: 'Citi_15824261544430/CitiBikeJan2020',
    preview: 'https://public.tableau.com/static/images/Ci/Citi_15824261544430/CitiBikeJan2020/1_rss.png',
    desktopHeight: 840,
    mobileHeight: 2477,
  },
  '/tableau-2-fed-avg-salary': {
    label: 'Federal Employee Salary',
    view: 'Labor-Fed-092018/DB',
    preview: 'https://public.tableau.com/static/images/La/Labor-Fed-092018/DB/1_rss.png',
    desktopHeight: 870,
    mobileHeight: 1450,
  },
  '/tableau-3-covid19': {
    label: 'COVID-19 Dashboard',
    view: 'PsTableau-03/Dashboard1',
    preview: 'https://public.tableau.com/static/images/Ps/PsTableau-03/Dashboard1/1_rss.png',
    desktopHeight: 840,
    mobileHeight: 1177,
  },
  '/project13/project13': {
    label: 'Federal Government Spending Dashboard',
    view: 'FederalGovernmentSpendingDashboard/Dashboard1',
    preview: 'https://public.tableau.com/static/images/Fe/FederalGovernmentSpendingDashboard/Dashboard1/1_rss.png',
    desktopHeight: 840,
    mobileHeight: 1277,
  },
  '/project14/project14': {
    label: 'Budget and Execution Historical Table',
    view: 'Budget_15927103644200/Dashboard1',
    preview: 'https://public.tableau.com/static/images/Bu/Budget_15927103644200/Dashboard1/1_rss.png',
    desktopHeight: 840,
    mobileHeight: 1177,
  },
}
