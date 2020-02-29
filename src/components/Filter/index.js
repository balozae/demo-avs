import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Filter = ({ label, children }) => (
  <div className="filter__item">
    <div className="filter__heading">{label}</div>
    <div className="filter__content">{children}</div>
  </div>
)

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Filter
