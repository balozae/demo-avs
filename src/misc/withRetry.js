class RetryException extends Error {
  constructor(message, meta) {
    super()
    this.name = 'RetryException'
    this.message = message
    this.meta = meta
  }
}

const withRetry = async (fn, maxRetryCount, verifyResponse) => {
  for (let i = 1; i <= maxRetryCount; i += 1) {
    try {
      const response = await fn()
      const confirmation = await verifyResponse(response)

      if (!confirmation) {
        throw new RetryException('Verify Failure', { response })
      }

      return response
    } catch (error) {
      if (i === maxRetryCount) {
        throw new RetryException(`Exceeded retry count of ${maxRetryCount}`, { error })
      }
    }
  }
}

export default withRetry
