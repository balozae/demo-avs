import { ACTION_TYPES } from 'redux/ducks/ticket'

export const defaultFilterStops = [0, 1, 2, 3]

export const initialState = {
  searchId: '',
  sortFlight: 'cheapest',
  filterStops: defaultFilterStops,
  chunks: [],
}

const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action
  const { chunks } = state

  switch (type) {
    case ACTION_TYPES.GET_CHUNK_FULFILLED:
      return { ...state, chunks: chunks.concat(payload.tickets) }

    case ACTION_TYPES.GET_SEARCH_ID_FULFILLED:
      return { ...state, searchId: payload.searchId }

    case ACTION_TYPES.SET_SORT_FLIGHT:
      return { ...state, sortFlight: payload }

    case ACTION_TYPES.SET_FILTER_STOPS:
      return { ...state, filterStops: payload }

    default:
      return state
  }
}

export default ticketReducer
