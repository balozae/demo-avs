import React from 'react'
import Ticket from './Ticket'

const TicketList = ({ tickets }) => (
  <>
    {tickets.map(ticket => (
      <Ticket key={ticket.uuid} {...ticket} />
    ))}
  </>
)

export default TicketList
