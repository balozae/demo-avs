import React, { useState } from 'react'
import Filter from 'components/Filter'
import Checkbox from 'components/Checkbox'
import pluck from 'misc/pluck'

const FilterStops = (props) => {
  const { options, initialValue, onChange } = props
  const length = options.length

  const [selected, setSelected] = useState(initialValue)
  const [checkedAll, setCheckedAll] = useState(false)

  const select = (values) => {
    const afterLength = values.length
    setCheckedAll(afterLength === length)
    setSelected(values)
    onChange(values)
  }

  const toggleAll = ({ checked }) => {
    const values = checked
      ? pluck(options, 'value')
      : []

    select(values)
  }

  return (
    <Filter label="Количество пересадок">
      <Checkbox label="Все" onChange={toggleAll} checked={checkedAll} />
      <Checkbox.Group options={options} selected={selected} onChange={select} />
    </Filter>
  )
}

export default FilterStops
