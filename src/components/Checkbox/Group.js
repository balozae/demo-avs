import React from 'react'
import PropTypes from 'prop-types'
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

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CheckboxGroup
