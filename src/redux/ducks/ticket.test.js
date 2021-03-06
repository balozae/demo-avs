import assert from 'assert'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import { middlewares } from 'redux/store'
import { genPromiseActionNames } from 'misc/helpers'
import uuidv4 from 'uuid/v4'
import { initialState } from 'redux/reducers/ticket'
import searchMock from 'mock/search.json'
import ticketsMockRAW from 'mock/tickets.json'
import chunksMock from 'mock/chunks.json'
import { actions, ACTION_TYPES, selectors } from './ticket'

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

  it('action: should create PENDING, FULFILLED actions when get search id', async () => {
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

  it('action: should create PENDING, FULFILLED actions when load tickets with searchId', async () => {
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

  it('selector: tickets - should return filtered array', () => {
    const [, second] = chunksMock

    assert.deepEqual(
      selectors.tickets({
        ticket: {
          ...initialState,
          filterStops: [3],
          chunks: chunksMock,
        },
      }),
      [second],
    )
  })

  it('selector: tickets - should return filitered and sorted array', () => {
    const [first, second, third] = chunksMock

    assert.deepEqual(
      selectors.tickets({
        ticket: {
          ...initialState,
          sortFlight: 'cheapest',
          filterStops: [0, 2],
          chunks: chunksMock,
        },
      }),
      [third, first],
    )

    assert.deepEqual(
      selectors.tickets({
        ticket: {
          ...initialState,
          filterStops: [0, 1, 2, 3],
          sortFlight: 'quickest',
          chunks: chunksMock,
        },
      }),
      [first, third, second],
    )
  })

  it('selector: tickets - if empty filterStops should return empty array', () => {
    assert.deepEqual(
      selectors.tickets({
        ticket: {
          ...initialState,
          filterStops: [],
          chunks: chunksMock,
        },
      }),
      [],
    )
  })
})
