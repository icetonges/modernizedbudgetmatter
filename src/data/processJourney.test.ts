import { describe, expect, it } from 'vitest'
import { isProcessRoute, processStepByRoute, processSteps } from './processJourney'

describe('process intelligence data', () => {
  it('covers every numbered step with actionable content', () => {
    expect(processSteps).toHaveLength(22)
    expect(processSteps.map((item) => item.number)).toEqual(Array.from({ length: 22 }, (_, index) => index + 1))
    expect(new Set(processSteps.map((item) => item.route)).size).toBe(22)
    processSteps.forEach((item) => {
      expect(item.inputs.length).toBeGreaterThanOrEqual(2)
      expect(item.outputs.length).toBeGreaterThanOrEqual(2)
      expect(item.actions.length).toBeGreaterThanOrEqual(3)
      expect(item.useCase.length).toBeGreaterThan(40)
      expect(item.insight.length).toBeGreaterThan(30)
      expect(item.watchout.length).toBeGreaterThan(30)
    })
  })

  it('recognizes the overview and numbered process routes', () => {
    expect(isProcessRoute('/process')).toBe(true)
    expect(isProcessRoute('/formulation')).toBe(true)
    expect(isProcessRoute('/enactment')).toBe(true)
    expect(isProcessRoute('/execution')).toBe(true)
    expect(processStepByRoute['/b22_directive'].number).toBe(22)
    expect(isProcessRoute('/about')).toBe(false)
  })
})
