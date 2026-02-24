import { Header, Footer, ListingBasicInfo, InfoTable, ListingSection, RatingSection } from '../components'
import { listing } from '../data/listing_dummy_data.js'
import { useParams } from 'react-router-dom';
import '../style/ListingDetails.css'


function ListingDetails() {

  const {id} = useParams(); 

  const selectedListing = listing.find(
    (item) => item.listingId === id
  )

  const detaisRows = Object.entries(selectedListing.details).map(
    ([details, info]) => [
      details, 
      info.toString()
    ]
  )

  const openingHoursRows = Object.entries(selectedListing.openHours).map(
    ([day, details]) => [
      day, 
      details.open, 
      details.close
    ]
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
      <ListingBasicInfo selectedListing={selectedListing}/>
      <div className="listing-details">
        <InfoTable 
          title='Detailed Information'
          columns={["Details", "Info"]}
          rows={detaisRows}
        />
        <InfoTable 
          title='Opening Hours'
          columns={['Day', 'Open', 'Close']}
          rows={openingHoursRows}
        />
      </div>

      <RatingSection className='rating-section'
        rating={selectedListing.rating}
        reviews={selectedListing.reviews}
        ratingCount={selectedListing.ratingCount}
        ratingStats={selectedListing.ratingStats}
      />

      <ListingSection title="Similar Listings" items={listing}/>
      <ListingSection title="Recommended" items={listing}/>
    </>
  )
}

export default ListingDetails;