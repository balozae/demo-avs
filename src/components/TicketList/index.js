import React from 'react'
import Ticket from './Ticket'
import './style.css'

const TicketList = ({ tickets: { tickets } }) => {
  const list = tickets.slice(0, 10)

  return (
    <div className="ticket__list">
      {list.map((ticket, index) => (
        <Ticket key={index} {...ticket} />
      ))}
    </div>
  )
}

export default TicketList
