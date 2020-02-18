import React from 'react'
import './style.css'
import logo from '../../logo.svg'

const Header = () => (
  <header className="header">
    <a href="/">
      <img src={logo} alt="logo aircraft" />
    </a>
  </header>
)

export default Header
