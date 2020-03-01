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

const getSegmentsDuration = (ticket) => {
  const { segments } = ticket
  return segments.reduce(
    (acc, { duration }) => acc + duration,
    0,
  )
}

const flightCompare = {
  cheapest: (a, b) => a.price - b.price,
  quickest: (a, b) => getSegmentsDuration(a) - getSegmentsDuration(b),
}

const stopsFilter = (allowed) => (ticket) => {
  const { segments } = ticket
  return segments.every(({ stops }) => allowed.includes(stops.length))
}

const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action
  const {
    chunks,
    sortFlight,
    filterStops: stops,
  } = state

  const list = chunks.slice()

  switch (type) {
    case ACTION_TYPES.GET_CHUNK_PENDING:
      return { ...state, isFetching: true }

    case ACTION_TYPES.GET_CHUNK_FULFILLED:
      return {
        ...state,
        isFetching: false,
        chunks: chunks.concat(payload),
      }

    case ACTION_TYPES.GET_LIST:
      if (Object.prototype.hasOwnProperty.call(flightCompare, sortFlight)) {
        list.sort(flightCompare[sortFlight])
      }

      return { ...state, list: list.filter(stopsFilter(stops)) }

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
