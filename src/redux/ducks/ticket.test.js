import assert from 'assert'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import { middlewares } from 'redux/store'
import { genPromiseActionNames } from 'misc/helpers'
import uuidv4 from 'uuid/v4'
import { initialState } from 'redux/reducers/ticket'
import searchMock from 'mock/search.json'
import ticketsMockRAW from 'mock/tickets.json'
import { actions, ACTION_TYPES } from './ticket'

jest.mock('uuid/v4')
uuidv4.mockReturnValue('uuid-v4-value')

require('dotenv').config()

const ticketsMock = {
  tickets: ticketsMockRAW.tickets.map(
    (ticket) => ({
      ...ticket,
      uuid: uuidv4(),
    }),
  ),
  stop: true,
}

const api = {
  search: `${process.env.REACT_APP_API_URL}/search`,
  tickets: (searchId) => `${process.env.REACT_APP_API_URL}/tickets?searchId=${searchId}`,
}

const searchId = 'abra-kadabra-777'

/* create store */
const mockStore = configureMockStore(middlewares)
const store = mockStore({ ticket: initialState })

describe('duck: ticket', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('should create PENDING, FULFILLED actions when get search id', async () => {
    fetchMock.get(api.search, searchMock, { overwriteRoutes: false })

    const { pending, fulfilled } = genPromiseActionNames(ACTION_TYPES.GET_SEARCH_ID)
    const expectedActions = [
      { type: pending },
      { type: fulfilled, payload: searchMock },
    ]

    await store.dispatch(actions.getSearchId())

    const actualActions = store.getActions()
    assert.deepEqual(actualActions, expectedActions)
  })

  it('should create PENDING, FULFILLED actions when load tickets with searchId', async () => {
    fetchMock
      // twice returns 500 error
      .getOnce(api.tickets(searchId), 500, { overwriteRoutes: false })
      .getOnce(api.tickets(searchId), 500, { overwriteRoutes: false })
      .get(api.tickets(searchId), ticketsMock, { overwriteRoutes: false })

    const { pending, fulfilled } = genPromiseActionNames(ACTION_TYPES.GET_CHUNK)

    const expectedActions = [
      { type: pending, meta: { searchId } },
      { type: fulfilled, payload: ticketsMock, meta: { searchId } },
    ]

    await store.dispatch(actions.getChunks(searchId))

    const actualActions = store.getActions()
    assert.deepEqual(actualActions, expectedActions)
  })
})
