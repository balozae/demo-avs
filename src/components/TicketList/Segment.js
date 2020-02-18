import React from 'react'
import { formattedTime } from '../../misc/formatter'
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
  const stopsList = stopsCount ? stops.join(', ') : 'прямой'

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
        <div className="ticket__segment__meta__body">{stopsList}</div>
      </div>
    </div>
  )
}

export default Segment
