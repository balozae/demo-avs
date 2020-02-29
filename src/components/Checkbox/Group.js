import React from 'react'
import Checkbox from './Checkbox'
import './style.css'

const CheckboxGroup = (props) => {
  const { options, selected, onChange } = props

  const onCheckboxChange = ({ value, checked }) => {
    if (checked) {
      onChange(selected.concat(value))
    } else {
      onChange(selected.filter((v) => v !== value))
    }
  }

  return (
    <div className="checkbox__group">
      {options.map((option) => (
        <Checkbox
          {...option}
          key={option.value}
          onChange={onCheckboxChange}
          checked={selected.includes(option.value)}
        />
      ))}
    </div>
  )
}

export default CheckboxGroup
