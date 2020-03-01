import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Button = ({ label, ...rest }) => (
  <button type="button" className="btn" {...rest}>{label}</button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Button
