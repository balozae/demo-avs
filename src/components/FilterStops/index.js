import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Filter from 'components/Filter'
import Checkbox from 'components/Checkbox'
import pluck from 'misc/pluck'

const FilterStops = (props) => {
  const { options, initialValue, onChange } = props
  const { length } = options

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

FilterStops.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialValue: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FilterStops
