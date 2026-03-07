import { Header, Footer, Hero, CategorySection, ListingSection } from '../components'
import { listing } from '../data/listing_dummy_data.js'


function Home() {

  return (
    <>
      <Hero />
      <CategorySection />
      <ListingSection title="Newly Added" items={listing} see_all_navigate='/newlyAddedListings'/>
      <ListingSection title="Recommended" items={listing} see_all_navigate='/recommendedListings'/>
    </>
  )
}

export default Home;