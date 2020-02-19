import { ACTION_TYPES } from 'redux/ducks/ticket'
import languageData from 'data/languageData'

const initialState = {
  language: languageData.ru
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTION_TYPES.SWITCH_LANGUAGE:
      return { ...state, language: languageData[payload] }

    default:
      return state
  }
}

export default userReducer
