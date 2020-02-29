import React from 'react'
import LanguageSwitcher from 'components/LanguageSwitcher'
import './style.scss'

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container jc-center">
      <div className="footer__column">
        <div className="footer__heading">Get To Known Us</div>
        <ul className="footer__menu">
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
      <div className="footer__column">
        <div className="footer__heading">Make Money with Us</div>
        <ul className="footer__menu">
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
      <div className="footer__column">
        <div className="footer__heading">Let Us Help You</div>
        <ul className="footer__menu">
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

    <div className="footer__container container jc-flex-end" style={{ marginTop: 20 }}>
      <LanguageSwitcher />
    </div>
  </footer>
)

export default Footer
