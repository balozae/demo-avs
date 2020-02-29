import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import apiCallMiddleware from 'middlewares/apiCall'
import rootReducer from 'redux/reducers'

const isDev = process.env.NODE_ENV === 'development'

const middlewares = [
  thunk,
  apiCallMiddleware,
]

if (isDev) {
  middlewares.push(logger)
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
)

export default store
