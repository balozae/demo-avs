import React from 'react'
import './App.css'
import Header from 'containers/Header'
import Filters from 'containers/Filters'
import Tickets from 'containers/Tickets'

const App = () => (
  <>
    <Header />
    <div className="wrapper">
      <Filters />
      <Tickets />
    </div>
  </>
)

export default App
