/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import { formattedNumber } from 'misc/formatter'
import Segment from './Segment'
import './style.scss'

const Ticket = (props) => {
  const { price, carrier, segments } = props

  return (
    <div className="ticket">
      <div className="ticket__heading">
        <div className="ticket__price">
          {formattedNumber(price)}
          {' '}
          Р
        </div>
        <div className="ticket__carrier">
          <img
            src={`${process.env.REACT_APP_CDN_URL}/110/36/${carrier}.png`}
            srcSet={`${process.env.REACT_APP_CDN_URL}/110/36/${carrier}@2x.png 2x`}
            alt={carrier}
            width="110"
            height="36"
            className="icon"
          />
        </div>
      </div>
      {segments.map((segment, index) => (
        <Segment key={index} {...segment} />
      ))}
    </div>
  )
}

Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(PropTypes.shape(Segment.propTypes)).isRequired,
}

export default Ticket
