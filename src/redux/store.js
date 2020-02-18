import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import apiCallMiddleware from 'middlewares/apiCall'
import rootReducer from 'redux/reducers'

const middlewares = [logger, thunk, apiCallMiddleware]

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

export default store
