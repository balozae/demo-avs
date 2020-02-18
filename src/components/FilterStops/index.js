import React, { useState } from 'react'
import Checkbox from 'components/Checkbox'
import pluck from 'misc/pluck'

const FilterStops = (props) => {
  const { options, defaultValue: selectedStops } = props

  const [selected, setSelected] = useState(selectedStops)
  const [isCheckedAll, setCheckAll] = useState(false)

  const onChangeCheckboxAll = ({ checked }) => {
    if (checked) {
      setCheckAll(true)
      setSelected(pluck(options, 'value'))
    } else {
      setCheckAll(false)
      setSelected([])
    }
  }

  const onChangeGroup = (newSelected) => {
    setSelected(newSelected)
    setCheckAll(false)
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
