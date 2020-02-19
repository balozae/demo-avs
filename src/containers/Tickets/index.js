import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import store from 'redux/store'
import './style.css'
import SortingTabs from 'components/SortingTabs'
import TicketList from 'components/TicketList'
import ticketDuck from 'redux/ducks/ticket'

const sortingOptions = [
  { label: 'самый дешевый', value: 'cheapest' },
  { label: 'самый быстрый', value: 'quickest' },
  /*{ label: 'оптимальный', value: 'best' }*/
]

const Tickets = () => {
  const searchId = useSelector(ticketDuck.selectors.searchId)
  const isFetching = useSelector(ticketDuck.selectors.isFetching)
  const stops = useSelector(ticketDuck.selectors.filterStops)
  const sortFlight = useSelector(ticketDuck.selectors.sortFlight)
  const tickets = useSelector(ticketDuck.selectors.list)

  useEffect(() => {
    store.dispatch(ticketDuck.actions.getSearchId())
  }, [])

  useEffect(() => {
    if (searchId !== '') {
      store.dispatch(ticketDuck.actions.getChunks(searchId))
    }
  }, [searchId])

  useEffect(() => {
    store.dispatch(ticketDuck.actions.getList())
  }, [searchId, sortFlight, isFetching, stops])

  return (
    <div className="main">
      <SortingTabs
        options={sortingOptions}
        initialValue={sortFlight}
        onChange={(payload) => store.dispatch({
          type: ticketDuck.ACTION_TYPES.SET_SORT_FLIGHT,
          payload
        })}
      />
      <TicketList tickets={tickets} />
    </div>
  )
}

export default Tickets
