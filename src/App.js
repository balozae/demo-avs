import React from 'react'
import './App.css'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import Filters from 'containers/Filters'
import Tickets from 'containers/Tickets'

const App = () => (
  <div className="app">
    <div className="wrapper">
      <Header />
      <div className="container">
        <Filters />
        <Tickets />
      </div>
    </div>
    <Footer />
  </div>
)

export default App
