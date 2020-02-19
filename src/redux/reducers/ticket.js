import { ACTION_TYPES } from 'redux/ducks/ticket'

const initialState = {
  sortFlight: 'cheapest',
  searchId: '',
  stops: ['one'],
  isPolling: false,
  isFetching: false,
  chunks: [],
  list: [],
}

const ticketReducer = (state = initialState, action) => {
  const { type, payload, meta } = action
  switch (type) {
    case ACTION_TYPES.GET_CHUNK:
      return { ...state, isFetching: true, isPolling: true }

    case ACTION_TYPES.GET_CHUNK_FULFILLED:
      const { chunks, list } = state
      return { ...state, isFetching: false, list: list.concat(payload) }

    case ACTION_TYPES.GET_SEARCH_ID_FULFILLED:
      return { ...state, searchId: payload.searchId }

    case ACTION_TYPES.SET_POLLING:
      return { ...state, isPolling: payload }

    default: {
      return state
    }
  }
}

export default ticketReducer
