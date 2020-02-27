import React from 'react'
import './style.css'

const Filter = ({ label, children }) => (
  <div className="filter__item">
    <div className="filter__heading">{label}</div>
    <div className="filter__content">{children}</div>
  </div>
)

export default Filter
