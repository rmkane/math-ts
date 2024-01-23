import { assert } from 'chai'
import { even, odd } from '../src/assertions'

describe('Test even function', () => {
  it('should return true for even number', () => {
    assert.isTrue(even(2))
  })

  it('should return false for odd number', () => {
    assert.isFalse(even(3))
  })
})

describe('Test odd function', () => {
  it('should return true for odd number', () => {
    assert.isTrue(odd(5))
  })

  it('should return false for even number', () => {
    assert.isFalse(odd(4))
  })
})
