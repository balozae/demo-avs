import assert from 'assert'
import withRetry from 'misc/withRetry'

describe('utils: withRetry hoc', () => {
  const fail = () => ({ ok: false })
  const pass = () => ({ ok: true, data: 'content' })

  const passWithCounter = (stopValue) => {
    let counter = 1

    return () => {
      counter += 1

      if (counter >= stopValue) {
        return pass()
      }

      return fail()
    }
  }

  it('should crash on exceeded retry count', async () => {
    withRetry(fail, 3, ({ ok }) => ok).catch((error) => {
      assert.equal(error, 'RetryException: Exceeded retry count of 3')
    })
  })

  it('should pass on valid response', async () => {
    const res = await withRetry(pass, 3, ({ ok }) => ok)
    assert.deepEqual(res, pass())
  })

  it('should return undefined when zero maxRetryCount', async () => {
    const res = await withRetry(pass, 0, ({ ok }) => ok)
    assert.equal(res, undefined)
  })

  it('should pass on 3 retries with 1 fail query', async () => {
    const res = await withRetry(passWithCounter(3), 3, ({ ok }) => ok)
    assert.deepEqual(res, pass())
  })

  it('should crash on 3 retries', async () => {
    withRetry(passWithCounter(5), 3, ({ ok }) => ok).catch((error) => {
      assert.equal(error, 'RetryException: Exceeded retry count of 3')
    })
  })
})
