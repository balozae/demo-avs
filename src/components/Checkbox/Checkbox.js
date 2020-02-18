import React from 'react'
import './style.css'

const Checkbox = (checkboxProps) => {
  const { value, label, checked: defaultChecked, onChange: cbOnChange } = checkboxProps

  const onChange = ({target: {checked}}) => {
    cbOnChange({value, checked})
  }

  const onKeyDown = (event) => {
    // enter
    if (event.keyCode === 13) {
      cbOnChange({
        checked: !defaultChecked,
        value
      })
    }
  }

  return (
    <div className="checkbox__item">
      <label className="checkbox__label" tabIndex="0" onKeyDown={onKeyDown}>
        <span className="checkbox">
          <input
            className="checkbox__field"
            type="checkbox"
            value={value}
            checked={defaultChecked}
            onChange={onChange} />
          <span className="checkbox__face" />
        </span>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
