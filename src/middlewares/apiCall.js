import { genPromiseActionNames } from 'misc/helpers'
import withRetry from 'misc/withRetry'

// eslint-disable-next-line consistent-return
const apiCallMiddleware = ({ dispatch }) => (next) => async (action) => {
  const {
    type,
    meta,
    apiCall,
    hasNext,
    transformPayload,
  } = action

  if (!apiCall) {
    return next(action)
  }

  const { pending, fulfilled, rejected } = genPromiseActionNames(type)

  const newAction = { type: pending }
  if (meta) {
    newAction.meta = meta
  }

  dispatch(newAction)

  try {
    const response = await withRetry(action.apiCall, 10, ({ ok }) => ok)
    const data = await response.json()
    const payload = transformPayload ? transformPayload(data) : data

    dispatch({
      ...newAction,
      type: fulfilled,
      payload,
    })

    if (hasNext && hasNext(payload)) {
      dispatch(action)
    }
  } catch (e) {
    dispatch({ ...newAction, type: rejected })
  }
}

export default apiCallMiddleware
