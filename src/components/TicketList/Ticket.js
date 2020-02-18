import React from 'react'
import Segment from './Segment'
import { formattedNumber } from 'misc/formatter'
import './style.css'

const Ticket = (props) => {
  const { price, carrier, segments } = props

  return (
    <div className="ticket__item">
      <div className="ticket__heading">
        <div className="ticket__price">
          {formattedNumber(price)} Р
        </div>
        <div className="ticket__logo">
          <img
            src={`${process.env.REACT_APP_CDN_URL}/110/36/${carrier}.png`}
            srcSet={`${process.env.REACT_APP_CDN_URL}/110/36/${carrier}@2x.png 2x`}
            alt={carrier}
            width="110"
            height="36"
          />
        </div>
      </div>
      <div className="ticket__segments">
        {segments.map((segment, index) => (
          <Segment key={index} {...segment} />
        ))}
      </div>
    </div>
  )
}

export default Ticket
