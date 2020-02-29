import React from 'react'
import PropTypes from 'prop-types'
import Ticket from './Ticket'
import './style.scss'

const TicketList = ({ tickets }) => (
  <div className="ticket__list">
    {tickets.map((ticket) => (
      <Ticket key={ticket.uuid} {...ticket} />
    ))}
  </div>
)

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(Ticket.propTypes).isRequired,
}

export default TicketList
