import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import apiCallMiddleware from 'middlewares/apiCall'
import rootReducer from 'redux/reducers'

// const isDev = process.env.NODE_ENV === 'development'

const middlewares = [
  thunk,
  apiCallMiddleware,
]

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
)

export default store
