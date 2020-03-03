import assert from 'assert'

import { formattedNumber, formattedTime } from 'misc/formatter'

describe('utils: formatter - formattedNumber', () => {
  it('3 mil with space separator', () => {
    const res = formattedNumber(3000000)
    assert.equal(res, '3 000 000')
  })

  it('200030 with comma separator', () => {
    const res = formattedNumber(200030, ',')
    assert.equal(res, '200,030')
  })

  it('zero', () => {
    const res = formattedNumber(0)
    assert.equal(res, '0')
  })
})

describe('utils: formatter - formattedTime', () => {
  it('02:03', () => {
    const res = formattedTime(new Date('2020-03-04 02:03:05'))
    assert.equal(res, '02:03')
  })

  it('13:58', () => {
    const res = formattedTime(new Date('2020-03-04 13:58:59'))
    assert.equal(res, '13:58')
  })
})
