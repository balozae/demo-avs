import React from 'react'
import Checkbox from './Checkbox'
import './style.css'

const CheckboxGroup = (props) => {
  const { options, value, onChange } = props

  const onCheckboxChange = (checkboxValue, checked) => {
    if (checked) {
      onChange(value.concat(checkboxValue))
    } else {
      onChange(value.filter(v => v !== checkboxValue))
    }
  }

  return (
    <div className="checkbox__group">
      {options.map(option => (
        <Checkbox key={option.value} {...option} onChange={onCheckboxChange} checked={value.includes(option.value)} />
      ))}
    </div>
  )
}

export default CheckboxGroup
