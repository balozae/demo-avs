import { combineReducers } from 'redux'
import userReducer from 'redux/reducers/user'
import ticketReducer from 'redux/reducers/ticket'

const rootReducer = combineReducers({
  user: userReducer,
  ticket: ticketReducer
})

export default rootReducer
