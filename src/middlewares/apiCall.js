import { genPromiseActionNames } from 'misc/helpers'
import withRetry from 'misc/withRetry'

const apiCallMiddleware = ({ dispatch }) => next => async function apiCallMiddlewareAction(action) {
  const { apiCall, type, meta, transformPayload } = action

  if (!apiCall) {
    return next(action)
  }

  const { pending, fulfilled, rejected } = genPromiseActionNames(type)

  dispatch({
    type: pending,
    meta
  })

  try {
    const response = await withRetry(action.apiCall, 10, ({ ok }) => ok)
    const data = await response.json()

    dispatch({
      type: fulfilled,
      payload: transformPayload ? transformPayload(data) : data,
      meta
    })
  } catch (e) {
    console.error(e)

    dispatch({
      type: rejected,
      payload: e,
      meta
    })
  }
}

export default apiCallMiddleware
