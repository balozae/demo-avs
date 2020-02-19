import React from 'react'

const LanguageItem = ({ name, icon, onClick }) => {
  return (
    <div className="language-switcher__item" onClick={onClick}>
      <img className="icon" width="20" height="20" src={require(`images/locales/${icon}.svg`)} alt={name} />
      {name}
    </div>
  )
}

export default LanguageItem
