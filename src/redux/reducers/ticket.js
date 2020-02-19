import ticketDuck from 'redux/ducks/ticket'

const initialState = {
  sortFlight: 'cheapest',
  searchId: '',
  stops: ['one'],
  chunks: [],
  list: [],
}

const ticketReducer = (state = initialState, action) => {
  const { type, payload, meta } = action
  switch (type) {
    case ticketDuck.ACTION_TYPES.GET_CHUNK_FULFILLED:
      const { chunks, list } = state
      const { tickets, stop } = payload
      const { searchId } = meta
      return { ...state, list: list.concat(tickets) }

    case ticketDuck.ACTION_TYPES.GET_SEARCH_ID_FULFILLED:
      return { ...state, searchId: payload.searchId }

    default: {
      return state
    }
  }
}

export default ticketReducer
