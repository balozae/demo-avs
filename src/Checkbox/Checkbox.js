import React, { useState } from 'react'
import './style.css'

const Checkbox = (checkboxProps) => {
  const { value, label, onChange, checked: propsChecked } = checkboxProps
  const [checked, setChecked] = useState(propsChecked)

  const onKeyDown = (event) => {
    // enter
    if (event.keyCode === 13) {
      setChecked(!checked)
      onChange(value, !checked)
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
            onChange={({ target: { checked: checkboxChecked } }) => { setChecked(checkboxChecked); onChange(value, checkboxChecked) }}
            checked={checked} />
          <span className="checkbox__face" />
        </span>
        {label}
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  checked: false
}

export default Checkbox
