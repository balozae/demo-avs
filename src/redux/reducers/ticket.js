import { ACTION_TYPES } from 'redux/ducks/ticket'

const initialState = {
  sortFlight: 'cheapest',
  searchId: '',
  stops: [0],
  isFetching: false,
  limit: 5,
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

const stopsFilter = (allowed) => (ticket) => {
  const { segments } = ticket
  return segments.every(({ stops }) => allowed.includes(stops.length))
}

const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action
  const { chunks, sortFlight, stops, limit } = state

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
      let list = chunks.slice()

      if (Object.prototype.hasOwnProperty.call(flightCompare, sortFlight)) {
        list.sort(flightCompare[sortFlight])
      }

      list = list.filter(stopsFilter(stops))
      list = list.slice(0, limit)

      return { ...state, list }

    case ACTION_TYPES.GET_SEARCH_ID_FULFILLED:
      return { ...state, searchId: payload.searchId }

    case ACTION_TYPES.SET_SORT_FLIGHT:
      return { ...state, sortFlight: payload }

    case ACTION_TYPES.SET_FILTER_STOPS:
      return { ...state, stops: payload }

    default: {
      return state
    }
  }
}

export default ticketReducer
