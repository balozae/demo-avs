import React from 'react'
import './style.css'
import SortingTabs from '../../components/SortingTabs'
import Ticket from '../../components/Ticket'

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
    <Ticket.Group>
      <Ticket id="1" />
      <Ticket id="2" />
    </Ticket.Group>
  </div>
)

export default Main
