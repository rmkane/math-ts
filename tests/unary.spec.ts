import { assert } from 'chai'
import { factorial } from '../src/unary'

describe('Test factorial function', () => {
  it('should return the correct factorial for 5', () => {
    const result = factorial(5)
    const expected = 120

    assert.equal(result, expected, `Expected ${expected}, but got ${result}`)
  })

  it('should return 1 for factorial of 0', () => {
    const result = factorial(0)
    const expected = 1

    assert.equal(result, expected, `Expected ${expected}, but got ${result}`)
  })

  it('should return 1 for factorial of 1', () => {
    const result = factorial(1)
    const expected = 1

    assert.equal(result, expected, `Expected ${expected}, but got ${result}`)
  })
})
