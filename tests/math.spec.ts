import { assert } from 'chai'
import { add, div, mul, sub } from '../src/math'

describe('Test addition', () => {
  it('should return 5 when 2 is added to 3', () => {
    assert.equal(add(2, 3), 5)
  })
})

describe('Test subtraction', () => {
  it('should return 5 when 2 is subtracted from 7', () => {
    assert.equal(sub(7, 2), 5)
  })
})

describe('Test multiplication', () => {
  it('should return 6 when 2 is multiplied by 3', () => {
    assert.equal(mul(2, 3), 6)
  })
})

describe('Test division', () => {
  it('should return 2 when 6 is divided by 3', () => {
    assert.equal(div(6, 3), 2)
  })
})
