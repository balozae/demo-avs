import React from 'react'
import { useSelector } from 'react-redux'
import store from 'redux/store'
import FilterStops from 'components/FilterStops'
import ticketDuck from 'redux/ducks/ticket'
import './style.css'

const options = [
  { label: 'Без пересадок', value: 0 },
  { label: '1 пересадка', value: 1 },
  { label: '2 пересадка', value: 2 },
  { label: '3 пересадка', value: 3 }
]

const Filters = () => {
  const stops = useSelector(ticketDuck.selectors.stops)

  return (
    <div className="filters__wrapper">
      <FilterStops
        options={options}
        initialValue={stops}
        onChange={(payload) => store.dispatch({
          type: ticketDuck.ACTION_TYPES.SET_FILTER_STOPS,
          payload
        })}
      />
    </div>
  )
}

export default Filters
