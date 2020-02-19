import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import store from 'redux/store'
import userDuck from 'redux/ducks/user'
import LanguageItem from './LanguageItem'
import languageData from 'data/languageData'
import './style.css'

const LanguageSwitcher = () => {
  const { locale: initialLocale } = useSelector(userDuck.selectors.language)
  const [currentLocale, setLocale] = useState(initialLocale)

  const availableLocales = Object.keys(languageData).filter(key => currentLocale !== key)

  return (
    <div className="language-switcher">
      {availableLocales.map(key => {
        const language = languageData[key]
        const { locale } = language

        return (
          <LanguageItem
            key={locale}
            {...language}
            onClick={() => {
              setLocale(locale)

              store.dispatch({
                type: userDuck.ACTION_TYPES.SWITCH_LANGUAGE,
                payload: locale
              })
            }}
          />
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
