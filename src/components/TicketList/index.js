import React from 'react'
import PropTypes from 'prop-types'
import store from 'redux/store'
import { ACTION_TYPES } from 'redux/ducks/ticket'
import { defaultFilterStops } from 'redux/reducers/ticket'
import Button from 'components/Button'
import Message from 'components/Message'
import Ticket from './Ticket'
import './style.scss'

const TicketList = ({ tickets, total }) => {
  const { length } = tickets
  const actions = [
    <Button
      label="Clear filters"
      onClick={() => store.dispatch({
        type: ACTION_TYPES.SET_FILTER_STOPS,
        payload: defaultFilterStops,
      })}
    />,
  ]

  if (!length) {
    return (
      <div className="ticket__list">
        <Message
          title={`We found ${total} flights, but none of them match your filters.`}
          description="Click on the filter to activate it and on the X to reset it."
          actions={actions}
        />
      </div>
    )
  }

  return (
    <div className="ticket__list">
      {tickets.map((ticket) => (
        <Ticket key={ticket.uuid} {...ticket} />
      ))}
    </div>
  )
}

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(Ticket.propTypes).isRequired,
  total: PropTypes.number.isRequired,
}

export default TicketList
