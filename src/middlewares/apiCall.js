import { genPromiseActionNames } from 'misc/helpers'

const apiCallMiddleware = ({ dispatch }) => next => action => {
  const { apiCall, type, meta } = action

  if (!apiCall) {
    return next(action)
  }

  const { pending, fulfilled, rejected } = genPromiseActionNames(type)

  dispatch({
    type: pending,
    meta
  })

  return action
    .apiCall()
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: fulfilled,
        payload: response,
        meta
      })
    })
    .catch(e => {
      console.log('catch = ', e)
      dispatch({
        type: rejected,
        payload: e,
        meta
      })
    })
}

export default apiCallMiddleware
