import React from 'react'
import LanguageSwitcher from 'components/LanguageSwitcher'
import './style.css'

const Footer = () => (
  <footer className="footer">
    <div className="container jc-center">
      <div className="col">
        <div className="heading">Get To Known Us</div>
        <ul className="menu">
          <li className="menu__item">
            <a href="https://aviasales.jobs" target="_blank" rel="noopener noreferrer">Careers</a>
          </li>
          <li className="menu__item">
            <a href="https://www.aviasales.ru/blog" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
          <li className="menu__item">
            <a href="https://www.jetradar.com/about/" target="_blank" rel="noopener noreferrer">About Us</a>
          </li>
        </ul>
      </div>
      <div className="col">
        <div className="heading">Make Money with Us</div>
        <ul className="menu">
          <li className="menu__item">
            <a href="https://old.travelpayouts.com/auth/registration" target="_blank" rel="noopener noreferrer">Become an Affiliate</a>
          </li>
          <li className="menu__item">
            <a href="https://support.travelpayouts.com/hc/en-us/categories/115000474487" target="_blank" rel="noopener noreferrer">White Label</a>
          </li>
          <li className="menu__item">
            <a href="https://support.travelpayouts.com/hc/en-us/categories/115000474547" target="_blank" rel="noopener noreferrer">WordPress Plugin &amp; SDK</a>
          </li>
        </ul>
      </div>
      <div className="col">
        <div className="heading">Let Us Help You</div>
        <ul className="menu">
          <li className="menu__item">
            <a href="/" target="_blank" rel="noopener noreferrer">Your Account</a>
          </li>
          <li className="menu__item">
            <a href="/" target="_blank" rel="noopener noreferrer">Policies</a>
          </li>
          <li className="menu__item">
            <a href="https://support.travelpayouts.com/hc/en-us" target="_blank" rel="noopener noreferrer">Knowledge Base</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="container jc-flex-end" style={{ marginTop: 20 }}>
      <LanguageSwitcher />
    </div>
  </footer>
)

export default Footer
