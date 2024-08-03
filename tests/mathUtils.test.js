// #region imports
import { describe, test, expect } from 'vitest'
import { double, square } from '../mathUtils'
// #endregion



// #region double
describe('double', () => {
    test('returns `number` multiplied by 2', () => {
        const result = double(12)
        expect(result).toBe(24)
    })
})
// #endregion



// #region square
describe('square', () => {
    test('returns `number` squared', () => {
        const result = square(12)
        expect(result).toBe(144)
    })
})
// #endregion