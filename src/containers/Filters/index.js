import React from 'react'
import { useSelector } from 'react-redux'
import store from 'redux/store'
import FilterStops from 'components/FilterStops'
import { selectors, ACTION_TYPES } from 'redux/ducks/ticket'
import './style.css'

const options = [
  { label: 'Без пересадок', value: 0 },
  { label: '1 пересадка', value: 1 },
  { label: '2 пересадка', value: 2 },
  { label: '3 пересадка', value: 3 },
]

const Filters = () => {
  const stops = useSelector(selectors.filterStops)

  return (
    <div className="filters__wrapper">
      <FilterStops
        options={options}
        value={stops}
        onChange={(payload) => store.dispatch({
          type: ACTION_TYPES.SET_FILTER_STOPS,
          payload,
        })}
      />
    </div>
  )
}

export default Filters
