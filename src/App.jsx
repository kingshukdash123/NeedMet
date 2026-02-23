import { useState } from 'react'
import './App.css'
import { Header, Footer, Hero, CategorySection, ListingCard, ListingSection } from './components'
import { listings } from './data/listings.js'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <CategorySection />
      <ListingSection title="Newly Added" items={listings}/>
      <ListingSection title="Recommended" items={listings}/>
      <Footer />
    </>
  )
}

export default App;
