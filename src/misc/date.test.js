import assert from 'assert'

import { addMinutes, durationHumanize } from 'misc/date'

describe('date utils: addMinutes', () => {
  const date = new Date(Date.UTC(2020, 2, 4, 13, 32, 2))

  it('zero', () => {
    const res = addMinutes(date, 0)
    assert.equal(res.toUTCString(), 'Wed, 04 Mar 2020 13:32:02 GMT')
  })

  it('less than 1 hour', () => {
    const res = addMinutes(date, 32)
    assert.equal(res.toUTCString(), 'Wed, 04 Mar 2020 14:04:02 GMT')
  })

  it('3 hour', () => {
    const res = addMinutes(date, 180)
    assert.equal(res.toUTCString(), 'Wed, 04 Mar 2020 16:32:02 GMT')
  })
})

describe('date utils: convertTime', () => {
  it('zero', () => {
    const res = durationHumanize(0)
    assert.deepStrictEqual(res, { hours: 0, minutes: 0 })
  })

  it('more than 1 hour', () => {
    const res = durationHumanize(100)
    assert.deepStrictEqual(res, { hours: 1, minutes: 40 })
  })

  it('less than 1 hour', () => {
    const res = durationHumanize(32)
    assert.deepStrictEqual(res, { hours: 0, minutes: 32 })
  })

  it('more than 1 day', () => {
    const res = durationHumanize(1531)
    assert.deepStrictEqual(res, { hours: 25, minutes: 31 })
  })
})
