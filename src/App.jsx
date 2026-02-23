import { useState } from 'react'
import './App.css'
import { Header, Footer, Hero, CategorySection, ListingCard, ListingSection } from './components'
import { listing } from './data/listing_dummy_data.js'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <CategorySection />
      <ListingSection title="Newly Added" items={listing}/>
      <ListingSection title="Recommended" items={listing}/>
      <Footer />
    </>
  )
}

export default App;
