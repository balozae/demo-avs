import { ACTION_TYPES } from 'redux/ducks/ticket'

export const defaultFilterStops = [0, 1, 2, 3]

const initialState = {
  searchId: '',
  sortFlight: 'cheapest',
  filterStops: defaultFilterStops,
  isFetching: false,
  chunks: [],
  list: [],
}

const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action
  const { chunks } = state

  switch (type) {
    case ACTION_TYPES.GET_CHUNK_PENDING:
      return { ...state, isFetching: true }

    case ACTION_TYPES.GET_CHUNK_FULFILLED:
      return {
        ...state,
        isFetching: false,
        chunks: chunks.concat(payload),
      }

    case ACTION_TYPES.GET_SEARCH_ID_FULFILLED:
      return { ...state, searchId: payload.searchId }

    case ACTION_TYPES.SET_SORT_FLIGHT:
      return { ...state, sortFlight: payload }

    case ACTION_TYPES.SET_FILTER_STOPS:
      return { ...state, filterStops: payload }

    default: {
      return state
    }
  }
}

export default ticketReducer
