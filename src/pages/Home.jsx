import { Header, Footer, Hero, CategorySection, ListingSection, HomeLoader } from '../components'
// import { listing } from '../data/listing_dummy_data.js'
import { useListings } from '../hooks/useListings.js';
import { useHomeDetails } from '../hooks/useHomeDetails.jsx';
import { getListingByCategory, getNewListings } from '../services/firebase/firestore/listingService.js';

// import { firestore } from '../firebase/firebaseConfig.js';
// import { collection, getDocs } from 'firebase/firestore';


function Home() {

  const { homeData, loading: homeLoading, error: homeError } = useHomeDetails();
  // console.log(homeData)

  const categoryList = homeData?.listings || [];

  const { 
    listings: homeListings, 
    loading: homeListingsLoading, 
    error: homeListingsError
  } = useListings(getListingByCategory,{ category: categoryList, quantity: 15 },categoryList.length > 0)

  const { 
    listings: newListings, 
    loading: newLoading, 
    error: newError
  } = useListings(getNewListings, {'quantity': 10})

  if (homeLoading) {
    return <HomeLoader />;
  }

  if(homeError || newError || homeListingsError) {
    return <p>Something went wrong, Come back later...</p>
  }

  return (
    <>
      <Hero data={homeData}/>
      <CategorySection data={homeData}/>
      <ListingSection title="Recommended Listings" listings={homeListings} see_all_navigate='/recommendedListings'/>
      <ListingSection title="Newly Added Listings" listings={newListings} see_all_navigate='/newlyAddedListings'/>
    </>
  )
}

export default Home;