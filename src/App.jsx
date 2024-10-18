import './style.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'

function App() {
  const cardElements = data.map((card) => {
    return (
      <Card 
          key={card.id}
          item={card}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cardElements}</section>
    </>
  )
}

export default App
