import React from 'react'
import './App.css'
import Header from './containers/Header'
import Filters from './containers/Filters'
import Main from './containers/Main'

const App = () => (
  <>
    <Header />
    <div className="wrapper">
      <Filters />
      <Main />
    </div>
  </>
)

export default App;
