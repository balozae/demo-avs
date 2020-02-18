import React from 'react'
import { formattedNumber, formattedTime } from '../../misc/formatter'
import { addMinutes, durationHumanize } from '../../misc/date'
import plural from '../../misc/plural'
import './style.css'

const Segment = (props) => {
  const { origin, destination, date: dateString, duration, stops } = props

  const date = new Date(dateString)
  const dateOrigin = formattedTime(date)
  const dateDestination = formattedTime(addMinutes(date, duration))
  const formattedDuration = durationHumanize(duration)
  const stopsCount = stops.length
  const stopsPluralWord = plural(stopsCount, 'пересадка', 'пересадки', 'пересадок')

  return (
    <div className="ticket__segment">
      <div className="ticket__segment__meta">
        <div className="ticket__segment__meta__heading">{origin} &ndash; {destination}</div>
        <div className="ticket__segment__meta__body">{dateOrigin} &ndash; {dateDestination}</div>
      </div>
      <div className="ticket__segment__meta">
        <div className="ticket__segment__meta__heading">в пути</div>
        <div className="ticket__segment__meta__body">{formattedDuration.hours}ч {formattedDuration.minutes}м</div>
      </div>
      <div className="ticket__segment__meta">
        <div className="ticket__segment__meta__heading">{stopsCount} {stopsPluralWord}</div>
        <div className="ticket__segment__meta__body">{stops.join(', ')}</div>
      </div>
    </div>
  )
}

const Ticket = (props) => {
  const { price, carrier, segments } = props
  console.log(props)

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
        {segments.map(segment => (
          <Segment {...segment} />
        ))}
      </div>
    </div>
  )
}

const List = ({ tickets: { tickets } }) => {
  const list = tickets.slice(0, 10)

  return (
    <div className="ticket__list">
      {list.map(ticket => (
        <Ticket {...ticket} />
      ))}
    </div>
  )
}

export default List
