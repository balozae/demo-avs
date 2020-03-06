import assert from 'assert'
import { actions } from 'redux/ducks/ticket'
import ticketReducer from 'redux/reducers/ticket'

describe('reducer: ticket', () => {
  it('should replace state for filterStops', () => {
    const { filterStops } = ticketReducer(undefined, actions.setStops([3]))
    assert.deepEqual(filterStops, [3])
  })

  it('should replace state for sortFlight', () => {
    const expected = 'test'
    const { sortFlight } = ticketReducer(undefined, actions.setSortFlight(expected))
    assert.deepEqual(sortFlight, expected)
  })
})
