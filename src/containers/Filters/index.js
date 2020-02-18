import React, { useState } from 'react'
import './style.css'
import Checkbox from '../../Checkbox'

const options = [
  { label: 'Все', value: 'all' },
  { label: 'Без пересадок', value: 'bez' },
  { label: '1 пересадка', value: '1' },
  { label: '2 пересадка', value: '2' },
  { label: '3 пересадка', value: '3' }
]

const Filters = () => {
  const [stops, setStops] = useState(['bez'])

  const onChange = (values) => {
    setStops(values)
  }

  return <div className="filters__wrapper">
      <div className="filter__item">
        <div className="filter__heading">
          Количество пересадок
        </div>
        <div className="filter__content">
          <Checkbox.Group options={options} value={stops} onChange={onChange} />
        </div>
      </div>
    </div>
}

export default Filters
