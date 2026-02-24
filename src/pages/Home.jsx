import { Header, Footer, Hero, CategorySection, ListingSection } from '../components'
import { listing } from '../data/listing_dummy_data.js'


function Home() {

  return (
    <>
      <Hero />
      <CategorySection />
      <ListingSection title="Newly Added" items={listing}/>
      <ListingSection title="Recommended" items={listing}/>
    </>
  )
}

export default Home;