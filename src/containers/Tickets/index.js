import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import store from 'redux/store'
import './style.scss'
import SortingTabs from 'components/SortingTabs'
import TicketList from 'components/TicketList'
import { selectors, actions, ACTION_TYPES } from 'redux/ducks/ticket'

const sortingOptions = [
  { label: 'самый дешевый', value: 'cheapest' },
  { label: 'самый быстрый', value: 'quickest' },
  /* { label: 'оптимальный', value: 'best' } */
]

const getSegmentsDuration = (ticket) => {
  const { segments } = ticket
  return segments.reduce(
    (acc, { duration }) => acc + duration,
    0,
  )
}

const flightCompare = {
  cheapest: (a, b) => a.price - b.price,
  quickest: (a, b) => getSegmentsDuration(a) - getSegmentsDuration(b),
}

const stopsFilter = (filter) => (ticket) => {
  const { segments } = ticket
  return segments.every(({ stops }) => filter.includes(stops.length))
}

const Tickets = () => {
  const searchId = useSelector(selectors.searchId)
  const stops = useSelector(selectors.filterStops)
  const sortFlight = useSelector(selectors.sortFlight)
  const tickets = useSelector(selectors.chunks)
  const total = tickets.length

  useEffect(() => {
    store.dispatch(actions.getSearchId())
  }, [])

  useEffect(() => {
    if (searchId !== '') {
      store.dispatch(actions.getChunks(searchId))
    }
  }, [searchId])

  const data = useMemo(() => {
    const result = tickets.filter(stopsFilter(stops))

    if (Object.prototype.hasOwnProperty.call(flightCompare, sortFlight)) {
      result.sort(flightCompare[sortFlight])
    }

    return result.slice(0, 5)
  }, [sortFlight, stops, tickets])

  return (
    <div className="list">
      <SortingTabs
        options={sortingOptions}
        initialValue={sortFlight}
        onChange={(payload) => store.dispatch({
          type: ACTION_TYPES.SET_SORT_FLIGHT,
          payload,
        })}
      />
      <TicketList tickets={data} total={total} />
    </div>
  )
}

export default Tickets
