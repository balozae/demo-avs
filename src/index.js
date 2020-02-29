import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'redux/store'
import App from './App'
import './index.css'

/** Intl polyfill (iOS safari) */
import '@formatjs/intl-pluralrules/polyfill'
import '@formatjs/intl-pluralrules/dist/locale-data/en'
import '@formatjs/intl-unified-numberformat/polyfill'

/* eslint-disable no-underscore-dangle, global-require */
if (typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData(
    require('@formatjs/intl-unified-numberformat/dist/locale-data/en.json'),
  )
}
/* eslint-enable no-underscore-dangle, global-require */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
