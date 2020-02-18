import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import store from 'redux/store'
import './style.css'
import SortingTabs from 'components/SortingTabs'
import TicketList from 'components/TicketList'
import ticketDuck from 'redux/ducks/ticket'

const sortingOptions = [
  { label: 'самый дешевый', value: 'cheapest' },
  { label: 'самый быстрый', value: 'quick' },
  /*{ label: 'оптимальный', value: 'best' }*/
]

const Tickets = () => {
  const searchId = useSelector(ticketDuck.selectors.searchId)
  const stops = useSelector(ticketDuck.selectors.stops)
  const flightSorting = useSelector(ticketDuck.selectors.flightSorting)
  const tickets = useSelector(ticketDuck.selectors.list)

  useEffect(() => {
    store.dispatch(ticketDuck.actions.getSearchId())
  }, [])

  useEffect(() => {
    if (searchId !== '') {
      store.dispatch(ticketDuck.actions.getList(searchId))
    }
  }, [searchId])

  const onChangeSorting = (sorting) => {
    // console.log('onChangeSorting', sorting)
  }

  console.log('stops=', stops)

  return (
    <div className="main">
      <SortingTabs options={sortingOptions} defaultValue={flightSorting} onChange={onChangeSorting} />
      <TicketList tickets={tickets} />
    </div>
  )
}

export default Tickets
