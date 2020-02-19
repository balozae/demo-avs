import { ACTION_TYPES } from 'redux/ducks/ticket'

const initialState = {
  sortFlight: 'cheapest',
  searchId: '',
  stops: ['one'],
  isFetching: false,
  chunks: [],
  list: []
}

const getSegmentsDuration = (ticket) => {
  const { segments } = ticket
  return segments.reduce(
    (acc, { duration }) => acc + duration,
    0
  )
}

const flightCompare = {
  cheapest: (a, b) => a.price - b.price,
  quick: (a, b) => getSegmentsDuration(a) - getSegmentsDuration(b)
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
        chunks: chunks.concat(payload)
      }

    case ACTION_TYPES.GET_LIST:
      const { sortFlight } = state
      const list = chunks.slice()
      
      if (Object.prototype.hasOwnProperty.call(flightCompare, sortFlight)) {
        list.sort(flightCompare[sortFlight])
      }
      
      return { ...state, list }

    case ACTION_TYPES.GET_SEARCH_ID_FULFILLED:
      return { ...state, searchId: payload.searchId }

    case ACTION_TYPES.SET_SORT_FLIGHT:
      return { ...state, sortFlight: payload }

    default: {
      return state
    }
  }
}

export default ticketReducer
