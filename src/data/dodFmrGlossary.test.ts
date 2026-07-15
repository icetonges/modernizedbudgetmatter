import { describe, expect, it } from 'vitest'
import { dodFmrGlossary, dodFmrMajorChanges, dodFmrOverview } from './dodFmrGlossary'

describe('DoD FMR glossary extraction', () => {
  it('contains every source definition in order with page references', () => {
    expect(dodFmrGlossary).toHaveLength(224)
    expect(dodFmrGlossary[0]).toMatchObject({ term: 'Accessorial Charges', page: 2 })
    expect(dodFmrGlossary.at(-1)).toMatchObject({ term: 'Year-end Adjustments for Reimbursements', page: 36 })
    expect(dodFmrGlossary.every((entry) => entry.term.length > 0 && entry.definition.length > 0)).toBe(true)
    expect(new Set(dodFmrGlossary.map((entry) => entry.term)).size).toBe(224)
    expect(dodFmrOverview).toMatch(/Authoritative guidance/i)
    expect(dodFmrMajorChanges).toMatch(/previous version dated September 2021/i)
  })
})
