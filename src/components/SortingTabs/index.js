import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Tab = ({
  value, label, checked, onSelect,
}) => {
  const onKeyDown = ({ keyCode }) => {
    // enter
    if (keyCode === 13) {
      onSelect(value)
    }
  }

  return (
    <div
      className={`sorting__tab ${checked ? 'active' : ''}`}
      onClick={onSelect.bind(null, value)}
      tabIndex="0"
      onKeyDown={onKeyDown}
      role="button"
    >
      {label}
    </div>
  )
}

Tab.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
}

const SortingTabs = (props) => {
  const { options, initialValue, onChange } = props
  const [selected, select] = useState(initialValue)

  const onTabSelect = (value) => {
    select(value)
    onChange(value)
  }

  return (
    <div className="sorting__tabs">
      {options.map((option) => (
        <Tab
          key={option.value}
          {...option}
          checked={selected.includes(option.value)}
          onSelect={onTabSelect}
        />
      ))}
    </div>
  )
}

SortingTabs.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SortingTabs
