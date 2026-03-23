import { ListingSection } from "../components/index.js"
import { useListings } from "../hooks/useListings.js"
import { getNewListings } from "../services/firebase/firestore/listingService.js"
// import { listing } from '../data/listing_dummy_data.js'

export default function NewlyAddedListings() {
    const { listings, loading, error} = useListings(getNewListings, 20)

    if (loading) {
        return <p>Loading listings...</p>;
    }

    if(error) {
        return <p>Something went wrong, Come back later...</p>
    }

    return (
        <>
            <ListingSection title='Newly Added Listings' listings={listings} see_all_navigate='false'/>
        </>
    )
}