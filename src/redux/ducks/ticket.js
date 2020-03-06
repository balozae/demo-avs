import { createSelector } from 'reselect'
import { genPromiseActionTypes, flightOrderBy } from 'misc/helpers'
import api from 'misc/api'
import uuidv4 from 'uuid/v4'

const REDUCER_NAME = 'ticket'

export const ACTION_TYPES = {
  ...genPromiseActionTypes(REDUCER_NAME, 'GET_CHUNK'),
  ...genPromiseActionTypes(REDUCER_NAME, 'GET_SEARCH_ID'),
}

ACTION_TYPES.SET_FILTER_STOPS = `${REDUCER_NAME}/SET_FILTER_STOPS`
ACTION_TYPES.SET_SORT_FLIGHT = `${REDUCER_NAME}/SET_SORT_FLIGHT`

/* ----------------
    Selectors
---------------- */
export const selectors = {}
selectors.reducer = (state) => state[REDUCER_NAME]

selectors.searchId = createSelector(
  selectors.reducer,
  (({ searchId }) => searchId),
)
selectors.filterStops = createSelector(
  selectors.reducer,
  ({ filterStops }) => filterStops,
)
selectors.sortFlight = createSelector(
  selectors.reducer,
  ({ sortFlight }) => sortFlight,
)
const getChunks = createSelector(
  selectors.reducer,
  ({ chunks }) => chunks,
)
const getFiltered = createSelector(
  getChunks,
  selectors.filterStops,
  (chunks, filterStops) => {
    if (filterStops) {
      return chunks.filter((ticket) => {
        const { segments } = ticket
        return segments.every(({ stops }) => filterStops.includes(stops.length))
      })
    }

    return chunks
  },
)
const getSortedAndFiltered = createSelector(
  getFiltered,
  selectors.sortFlight,
  (chunks, sortFlight) => {
    if (!Object.prototype.hasOwnProperty.call(flightOrderBy, sortFlight)) {
      return chunks
    }

    const newState = [...chunks]
    newState.sort(flightOrderBy[sortFlight])
    return newState
  },
)
selectors.tickets = createSelector(
  getSortedAndFiltered,
  (state) => state,
)

/* ----------------
    Actions
---------------- */
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
    const newTickets = tickets.map((ticket) => ({ ...ticket, uuid: uuidv4() }))
    return { tickets: newTickets, stop }
  },
  hasNext: ({ stop }) => !stop,
  apiCall: () => api.tickets.getChunkBySearchId(searchId),
})

export default {
  actions,
  selectors,
  ACTION_TYPES,
}
