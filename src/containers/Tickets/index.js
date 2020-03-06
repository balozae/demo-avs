import React, { useEffect } from 'react'
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

const Tickets = () => {
  const searchId = useSelector(selectors.searchId)
  const sortFlight = useSelector(selectors.sortFlight)
  const tickets = useSelector(selectors.tickets)
  const total = useSelector(selectors.total)
  const data = tickets.slice(0, 5)

  useEffect(() => {
    store.dispatch(actions.getSearchId())
  }, [])

  useEffect(() => {
    if (searchId !== '') {
      store.dispatch(actions.getChunks(searchId))
    }
  }, [searchId])

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
