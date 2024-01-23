import { assert } from 'chai'
import { divmod, modulo } from '../src/binary'

describe('Test divmod function', () => {
  it('should return [2, 1] when 5 is divided by 2 using divmod', () => {
    assert.deepEqual(divmod(5, 2), [2, 1])
  })

  it('should return [0, 5] when 5 is divided by 0 using divmod', () => {
    assert.deepEqual(divmod(5, 0), [Infinity, NaN])
  })
})

describe('Test modulo function', () => {
  it('should return 1 when 5 modulo 2', () => {
    assert.equal(modulo(5, 2), 1)
  })

  it('should return 0 when 5 modulo 5', () => {
    assert.equal(modulo(5, 5), 0)
  })

  it('should return NaN when 5 modulo 0', () => {
    assert.isNaN(modulo(5, 0))
  })
})
