import React from 'react'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import Filters from 'containers/Filters'
import Tickets from 'containers/Tickets'
import './App.scss'
import 'containers/Tickets/style.scss'

const App = () => (
  <>
    <div className="wrapper">
      <Header />
      <main>
        <div className="container">
          <div className="tickets">
            <Filters />
            <Tickets />
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </>
)

export default App
