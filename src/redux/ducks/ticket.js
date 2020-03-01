import { createSelector } from 'reselect'
import { genPromiseActionTypes } from 'misc/helpers'
import api from 'misc/api'
import store from 'redux/store'

const REDUCER_NAME = 'ticket'

export const ACTION_TYPES = {
  ...genPromiseActionTypes(REDUCER_NAME, 'GET_CHUNK'),
  ...genPromiseActionTypes(REDUCER_NAME, 'GET_SEARCH_ID'),
}

ACTION_TYPES.SET_FILTER_STOPS = `${REDUCER_NAME}/SET_FILTER_STOPS`
ACTION_TYPES.SET_SORT_FLIGHT = `${REDUCER_NAME}/SET_SORT_FLIGHT`

/* Selectors */
export const selectors = {}
selectors.reducer = (state) => state[REDUCER_NAME]

selectors.chunks = createSelector(
  selectors.reducer,
  (({ chunks }) => chunks),
)
selectors.isFetching = createSelector(
  selectors.reducer,
  (({ isFetching }) => isFetching),
)
selectors.searchId = createSelector(
  selectors.reducer,
  (({ searchId }) => searchId),
)
selectors.sortFlight = createSelector(
  selectors.reducer,
  (({ sortFlight }) => sortFlight),
)
selectors.filterStops = createSelector(
  selectors.reducer,
  (({ filterStops }) => filterStops),
)

/* Actions */
export const actions = {}

actions.getSearchId = () => ({
  type: ACTION_TYPES.GET_SEARCH_ID,
  apiCall: () => api.tickets.getSearchId(),
})
actions.setStops = (payload) => ({
  type: ACTION_TYPES.SET_FILTER_STOPS,
  payload,
})
actions.setSortFlight = (payload) => ({
  type: ACTION_TYPES.SET_SORT_FLIGHT,
  payload,
})
actions.getChunks = (searchId) => ({
  type: ACTION_TYPES.GET_CHUNK,
  meta: { searchId },
  transformPayload: ({ tickets, stop }) => {
    if (!stop) {
      store.dispatch(actions.getChunks(searchId))
    }

    const newTickets = tickets.map((ticket) => {
      const uuid = Math.random().toString(36).substring(2, 16)
      return { ...ticket, uuid }
    })

    return newTickets
  },
  apiCall: () => api.tickets.getChunkBySearchId(searchId),
})

export default {
  actions,
  selectors,
  ACTION_TYPES,
}
