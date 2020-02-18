import React from 'react'
import './style.css'

const Ticket = () => {
  return (
    <div className="ticket__item">ticket</div>
  )
}

const Group = ({ children }) => {
  return (
    <div className="ticket__list">{children}</div>
  )
}

Ticket.Group = Group

export default Ticket
