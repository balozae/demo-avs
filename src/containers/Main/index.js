import React from 'react'
import './style.css'
import SortingTabs from 'components/SortingTabs'
import TicketList from 'components/TicketList'
import ticketsData from './tickets.json'

const sortingOptions = [
  { label: 'самый дешевый', value: 'cheapest' },
  { label: 'самый быстрый', value: 'direct' },
  /*{ label: 'оптимальный', value: 'best' }*/
]

const onChangeSorting = (sorting) => {
  console.log('onChangeSorting', sorting)
}

const Main = () => (
  <div className="main">
    <SortingTabs options={sortingOptions} defaultValue="cheapest" onChange={onChangeSorting} />
    <TicketList tickets={ticketsData} />
  </div>
)

export default Main
