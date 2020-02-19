import { ACTION_TYPES } from 'redux/ducks/ticket'

const initialState = {
  sortFlight: 'cheapest',
  searchId: '',
  stops: ['one'],
  chunks: [],
  list: [],
}

const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.GET_LIST_FULFILLED:
      return { ...state, list: state.list.concat(payload.tickets) }
    case ACTION_TYPES.GET_SEARCH_ID_FULFILLED:
      return { ...state, searchId: payload.searchId }
    default: {
      return state
    }
  }
}

export default ticketReducer
