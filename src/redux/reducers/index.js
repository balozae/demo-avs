import { combineReducers } from 'redux'
import ticketReducer from 'redux/reducers/ticket'

const rootReducer = combineReducers({
  ticket: ticketReducer
})

export default rootReducer
