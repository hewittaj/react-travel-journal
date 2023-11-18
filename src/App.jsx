import React from 'react'
import Card from './components/Card'
import Nav from './components/Nav'
import data from './data'

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        id={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="container">
      <Nav/>
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App
