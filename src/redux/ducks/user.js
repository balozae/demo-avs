import { createSelector } from 'reselect'

const REDUCER_NAME = 'user'

export const ACTION_TYPES = {}

ACTION_TYPES.SWITCH_LANGUAGE = `${REDUCER_NAME}/SWITCH_LANGUAGE`

/* Selectors */
export const selectors = {}
selectors.reducer = state => state[REDUCER_NAME]

selectors.language = createSelector(
  selectors.reducer,
  (({ language }) => language)
)

/* Actions */
export const actions = {}

actions.switchLanguage = (payload) => ({
  type: ACTION_TYPES.SWITCH_LANGUAGE,
  payload
})

export default {
  actions,
  selectors,
  ACTION_TYPES
}
