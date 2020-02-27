import React, { useState } from 'react'
import Filter from 'components/Filter'
import Checkbox from 'components/Checkbox'
import pluck from 'misc/pluck'

const FilterStops = (props) => {
  const { options, initialValue, onChange } = props

  const [selected, setSelected] = useState(initialValue)

  const toggleAll = ({ checked }) => {
    const values = checked
      ? pluck(options, 'value')
      : []

    select(values)
  }

  const select = (values) => {
    setSelected(values)
    onChange(values)
  }

  return (
    <Filter label="Количество пересадок">
      <Checkbox label="Все" onChange={toggleAll} />
      <Checkbox.Group options={options} selected={selected} onChange={select} />
    </Filter>
  )
}

export default FilterStops
