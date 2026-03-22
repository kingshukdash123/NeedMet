import { Header, Footer, Hero, CategorySection, ListingSection, HomeLoader } from '../components'
// import { listing } from '../data/listing_dummy_data.js'
import { useListings } from '../hooks/useListings.js';
import { getNewListings, getAllListings } from '../services/firebase/firestore/listingService.js';

// import { firestore } from '../firebase/firebaseConfig.js';
// import { collection, getDocs } from 'firebase/firestore';


function Home() {
  const { listings: newListings, loading: newLoading, error: newError} = useListings(getNewListings, 10)
  const { listings: recommendedListings, loading: recommendedLoading, error: recommendedError} = useListings(getAllListings, 10)


  if (newLoading || recommendedLoading) {
    return <HomeLoader />;
  }

  if(newError || recommendedError) {
    return <p>Something went wrong, Come back later...</p>
  }

  return (
    <>
      <Hero />
      <CategorySection />
      <ListingSection title="Newly Added" items={newListings} see_all_navigate='/newlyAddedListings'/>
      <ListingSection title="Recommended" items={recommendedListings} see_all_navigate='/recommendedListings'/>
    </>
  )
}

export default Home;