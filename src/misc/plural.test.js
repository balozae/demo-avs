import assert from 'assert'

import plural from 'misc/plural'

describe('utils: plural', () => {
  const words = ['пересадка', 'пересадки', 'пересадок']

  it('1 пересадка', () => {
    const res = plural(1, ...words)
    assert.equal(res, 'пересадка')
  })

  it('2 пересадки', () => {
    const res = plural(2, ...words)
    assert.equal(res, 'пересадки')
  })

  it('5 пересадок', () => {
    const res = plural(5, ...words)
    assert.equal(res, 'пересадок')
  })

  it('6 пересадок', () => {
    const res = plural(6, ...words)
    assert.equal(res, 'пересадок')
  })
})
