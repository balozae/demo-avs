import React from 'react'
import './style.css'
import FilterStops from 'components/FilterStops'

const options = [
  { label: 'Без пересадок', value: 'bez' },
  { label: '1 пересадка', value: '1' },
  { label: '2 пересадка', value: '2' },
  { label: '3 пересадка', value: '3' }
]

const Filters = () => {
  const onChangeStops = (stops) => {
    console.log('filters__wrapper', stops)
  }

  return (
    <div className="filters__wrapper">
      <FilterStops options={options} defaultValue={['bez']} onChange={onChangeStops} />
    </div>
  )
}

export default Filters
