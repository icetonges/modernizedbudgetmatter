import { describe, expect, it } from 'vitest'
import { portfolioProjectByRoute, portfolioProjects } from './portfolioProjects'

describe('portfolio project catalog', () => {
  it('describes every portfolio project with actionable capability and impact content', () => {
    expect(portfolioProjects).toHaveLength(15)
    expect(new Set(portfolioProjects.map((project) => project.route)).size).toBe(15)
    expect(Object.keys(portfolioProjectByRoute)).toHaveLength(15)
    portfolioProjects.forEach((project) => {
      expect(project.summary.length).toBeGreaterThan(90)
      expect(project.outcome.length).toBeGreaterThan(70)
      expect(project.whyItMatters.length).toBeGreaterThan(90)
      expect(project.capabilities).toHaveLength(3)
      expect(project.tools.length).toBeGreaterThanOrEqual(3)
    })
  })
})
