export const genPromiseActionTypes = (reducerName, actionName) => {
  const action = `${reducerName}/${actionName}`
  return {
    [actionName]: action,
    [`${actionName}_PENDING`]: `${action}_PENDING`,
    [`${actionName}_FULFILLED`]: `${action}_FULFILLED`,
    [`${actionName}_REJECTED`]: `${action}_REJECTED`,
  }
}

export const genPromiseActionNames = (action) => ({
  init: action,
  pending: `${action}_PENDING`,
  fulfilled: `${action}_FULFILLED`,
  rejected: `${action}_REJECTED`,
})

export const getSegmentsDuration = (ticket) => {
  const { segments } = ticket

  return segments.reduce(
    (acc, { duration }) => acc + duration,
    0,
  )
}

export const flightOrderBy = {
  cheapest: (a, b) => a.price - b.price,
  quickest: (a, b) => getSegmentsDuration(a) - getSegmentsDuration(b),
}
