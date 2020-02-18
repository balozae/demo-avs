import React from 'react'
import Checkbox from './Checkbox'
import './style.css'

const CheckboxGroup = (props) => {
  const { options, value: groupValue, onChange } = props

  const onCheckboxChange = ({value, checked, checkAll}) => {
    if (checked) {
      onChange(groupValue.concat(value))
    } else {
      onChange(groupValue.filter(v => v !== value))
    }
  }

  return (
    <div className="checkbox__group">
      {options.map(option => (
        <Checkbox key={option.value} {...option} onChange={onCheckboxChange} checked={groupValue.includes(option.value)} />
      ))}
    </div>
  )
}

export default CheckboxGroup
