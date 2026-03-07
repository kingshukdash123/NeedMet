import { ListingSection } from "../components"
import { listing } from '../data/listing_dummy_data.js'

export default function RecommendedListings() {
    return (
        <>
            <ListingSection title='Recommended Listings' items={listing} see_all_navigate='false'/>
        </>
    )
}