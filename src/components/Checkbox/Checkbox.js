import React, { useState, useEffect } from 'react'
import './style.css'

const Checkbox = (props) => {
  const {
    checked: propsChecked,
    onChange: cbOnChange,
    value,
    label
  } = props

  const [checked, setChecked] = useState(propsChecked)

  useEffect(() => {
    setChecked(propsChecked)
  }, [propsChecked])

  const toggle = ({ checked, value }) => {
    cbOnChange({ checked, value })
  }

  const onChange = (event) => {
    const { target: { checked } } = event
    toggle({ checked, value })
  }

  const onKeyDown = (event) => {
    // enter
    if (event.keyCode === 13) {
      toggle({ value, checked: !checked })
      setChecked(!checked)
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
            checked={checked}
            onChange={onChange}
          />
          <span className="checkbox__face" />
        </span>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
