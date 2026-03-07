import { ListingSection } from "../components/index.js"
import { listing } from '../data/listing_dummy_data.js'

export default function NewlyAddedListings() {
    return (
        <>
            <ListingSection title='Newly Added Listings' items={listing} see_all_navigate='false'/>
        </>
    )
}