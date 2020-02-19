import { createSelector } from 'reselect'
import { genPromiseActionTypes } from 'misc/helpers'
import api from 'misc/api'
import store from 'redux/store'

const REDUCER_NAME = 'ticket'

export const ACTION_TYPES = {
  ...genPromiseActionTypes(REDUCER_NAME, 'GET_CHUNK'),
  ...genPromiseActionTypes(REDUCER_NAME, 'GET_SEARCH_ID')
}

ACTION_TYPES.SET_FILTER_STOPS = `${REDUCER_NAME}/SET_FILTER_STOPS`
ACTION_TYPES.SET_SORT_FLIGHT = `${REDUCER_NAME}/SET_SORT_FLIGHT`
ACTION_TYPES.SET_POLLING = `${REDUCER_NAME}/SET_POLLING`

/* Selectors */
export const selectors = {}
selectors.reducer = state => state[REDUCER_NAME]

selectors.list = createSelector(
  selectors.reducer,
  (({ list }) => list)
)
selectors.searchId = createSelector(
  selectors.reducer,
  (({ searchId }) => searchId)
)
selectors.sortFlight = createSelector(
  selectors.reducer,
  (({ sortFlight }) => sortFlight)
)
selectors.stops = createSelector(
  selectors.reducer,
  (({ stops }) => stops)
)

/* Actions */
export const actions = {}

actions.getSearchId = () => ({
  type: ACTION_TYPES.GET_SEARCH_ID,
  apiCall: () => api.tickets.getSearchId()
})
actions.setStops = (payload) => ({
  type: ACTION_TYPES.SET_FILTER_STOPS,
  payload
})
actions.setSortFlight = (payload) => ({
  type: ACTION_TYPES.SET_SORT_FLIGHT,
  payload
})
actions.setPolling = (payload) => ({
  type: ACTION_TYPES.SET_POLLING,
  payload
})
actions.getList = (searchId) => ({
  type: ACTION_TYPES.GET_CHUNK,
  meta: { searchId },
  transformPayload: ({ tickets, stop }) => {
    if (!stop) {
      store.dispatch(actions.getList(searchId))
    } else {
      store.dispatch(actions.setPolling(false))
    }

    return tickets
  },
  apiCall: () => api.tickets.getChunkBySearchId(searchId)
})

export default {
  actions,
  selectors,
  ACTION_TYPES
}
