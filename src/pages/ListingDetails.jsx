import { Header, Footer } from '../components'
import { listing } from '../data/listing_dummy_data.js'
import { useParams } from 'react-router-dom';


function ListingDetails() {
  const {id} = useParams(); 

  const selectedListing = listing.find(
    (item) => item.listingId === id
  )

  if (!selectedListing) {
    return (
      <>
        <Header />
        <h2 style={{textAlign: 'center', margin: '5rem 0 5rem'}}>Listing Not Found</h2>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div style={{ padding: "50px" }}>
      <h1>{selectedListing.name}</h1>
      <p>{selectedListing.address}</p>
      <p>{selectedListing.description}</p>

      <img
        src={selectedListing.images[0].fullUrl}
        alt={selectedListing.name}
        width="400"
      />

      <p>⭐ {selectedListing.rating} ({selectedListing.reviews} reviews)</p>
    </div>
      <Footer />
    </>
  )
}

export default ListingDetails;