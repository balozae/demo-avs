import { genPromiseActionNames } from 'misc/helpers'
import withRetry from 'misc/withRetry'

const apiCallMiddleware = ({ dispatch }) => (next) => async function apiCallMiddle(action) {
  const {
    apiCall, type, meta, transformPayload,
  } = action

  if (!apiCall) {
    return next(action)
  }

  const { pending, fulfilled, rejected } = genPromiseActionNames(type)

  dispatch({ type: pending, meta })

  try {
    const response = await withRetry(action.apiCall, 10, ({ ok }) => ok)
    const data = await response.json()

    dispatch({
      type: fulfilled,
      payload: transformPayload ? transformPayload(data) : data,
      meta,
    })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)

    dispatch({ type: rejected, meta })
  }

  return undefined
}

export default apiCallMiddleware
