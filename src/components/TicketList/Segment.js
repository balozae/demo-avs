import React from 'react'
import { formattedTime } from 'misc/formatter'
import { addMinutes, durationHumanize } from 'misc/date'
import plural from 'misc/plural'
import './style.scss'

const Segment = (props) => {
  const {
    origin,
    destination,
    date: dateString,
    duration,
    stops,
  } = props

  const date = new Date(dateString)
  const dateOrigin = formattedTime(date)
  const dateDestination = formattedTime(addMinutes(date, duration))
  const formattedDuration = durationHumanize(duration)
  const stopsCount = stops.length
  const stopsPluralWord = plural(stopsCount, 'пересадка', 'пересадки', 'пересадок')
  const stopsList = stopsCount ? stops.join(', ') : 'прямой'
  const stopsWord = `${stopsCount === 0 ? 'без' : stopsCount} ${stopsPluralWord}`

  return (
    <div className="ticket-segment">
      <div className="ticket-segment__column">
        <div className="ticket-segment__column__heading">
          {origin}
          {' '}
          &ndash;
          {' '}
          {destination}
        </div>
        <div className="ticket-segment__column__body">
          {dateOrigin}
          {' '}
          &ndash;
          {' '}
          {dateDestination}
        </div>
      </div>
      <div className="ticket-segment__column">
        <div className="ticket-segment__column__heading">в пути</div>
        <div className="ticket-segment__column__body">
          {formattedDuration.hours}
          ч
          {' '}
          {formattedDuration.minutes}
          м
        </div>
      </div>
      <div className="ticket-segment__column">
        <div className="ticket-segment__column__heading">{stopsWord}</div>
        <div className="ticket-segment__column__body">{stopsList}</div>
      </div>
    </div>
  )
}

export default Segment
