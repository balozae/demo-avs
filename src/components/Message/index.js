import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Message = ({ title, description, actions }) => (
  <div className="message">
    <div className="message__container">
      <div className="message__icon" />
      <div className="message__title">{title}</div>
      {description && <div className="message__description">{description}</div>}
      {actions && <div className="message__actions">{actions.map((action) => action)}</div>}
    </div>
  </div>
)

Message.defaultProps = {
  description: null,
  actions: null,
}

Message.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.node),
}

export default Message
