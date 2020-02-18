import React from 'react'
import Ticket from './Ticket'
import './style.css'

const TicketList = ({ tickets }) => {
  const list = tickets.slice(0, 5)

  return (
    <div className="ticket__list">
      {list.map((ticket, index) => (
        <Ticket key={index} {...ticket} />
      ))}
    </div>
  )
}

export default TicketList
