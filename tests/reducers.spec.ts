import { assert } from 'chai'
import { product, sum } from '../src/reducers'

describe('Test product function', () => {
  it('should return 30 when calculating the product for [1, 2, 3, 5]', () => {
    assert.equal(product([1, 2, 3, 5]), 30)
  })

  it('should return 0 when calculating the product for an empty array', () => {
    assert.equal(product([]), 0)
  })
})

describe('Test sum function', () => {
  it('should return 11 when calculating the sum for [1, 2, 3, 5]', () => {
    assert.equal(sum([1, 2, 3, 5]), 11)
  })

  it('should return 0 when calculating the sum for an empty array', () => {
    assert.equal(sum([]), 0)
  })
})
