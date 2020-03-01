// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/label-has-associated-control, jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Checkbox = (props) => {
  const {
    checked: propsChecked,
    onChange: cbOnChange,
    value,
    label,
  } = props

  const [isChecked, setChecked] = useState(propsChecked)

  useEffect(() => {
    setChecked(propsChecked)
  }, [propsChecked])

  const toggle = ({ checked, value: toggleValue }) => {
    cbOnChange({ checked, value: toggleValue })
  }

  const onChange = (event) => {
    const { target: { checked } } = event
    toggle({ checked, value })
  }

  const onKeyDown = (event) => {
    // enter
    if (event.keyCode === 13) {
      toggle({ value, checked: !isChecked })
      setChecked(!isChecked)
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
            checked={isChecked}
            onChange={onChange}
          />
          <span className="checkbox__face" />
        </span>
        {label}
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  value: '',
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string.isRequired,
}

export default Checkbox
