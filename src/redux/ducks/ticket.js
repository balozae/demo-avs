import { createSelector } from 'reselect'
import { genPromiseActionTypes } from 'misc/helpers'
import api from 'misc/api'

const REDUCER_NAME = 'ticket'

export const ACTION_TYPES = {
  ...genPromiseActionTypes(REDUCER_NAME, 'GET_LIST'),
  ...genPromiseActionTypes(REDUCER_NAME, 'GET_SEARCH_ID')
}

/*  Selectors */
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
selectors.flightSorting = createSelector(
  selectors.reducer,
  (({ flightSorting }) => flightSorting)
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
actions.getList = (searchId) => ({
  type: ACTION_TYPES.GET_LIST,
  meta: { searchId },
  apiCall: () => api.tickets.getList(searchId)
})

export default {
  actions,
  selectors
}
