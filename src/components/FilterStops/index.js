import React, { useState } from 'react'
import Checkbox from 'components/Checkbox'
import pluck from 'misc/pluck'

const FilterStops = (props) => {
  const { options, initialValue, onChange } = props

  const [selected, select] = useState(initialValue)
  const [isCheckedAll, setCheckAll] = useState(false)

  const onChangeCheckboxAll = ({ checked }) => {
    if (checked) {
      const values = pluck(options, 'value')
      setCheckAll(true)
      select(pluck(options, 'value'))
      onChange(values)
    } else {
      setCheckAll(false)
      select([])
      onChange([])
    }
  }

  const onChangeGroup = (values) => {
    setCheckAll(false)
    select(values)
    onChange(values)
  }

  return (
    <div className="filter__item">
      <div className="filter__heading">
        Количество пересадок
        </div>
      <div className="filter__content">
        <Checkbox label="Все" onChange={onChangeCheckboxAll} checked={isCheckedAll} />
        <Checkbox.Group options={options} selected={selected} onChange={onChangeGroup} />
      </div>
    </div>
  )
}

export default FilterStops
