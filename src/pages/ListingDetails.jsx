import { Header, Footer, ListingBasicInfo, InfoTable, ListingSection, RatingSection, ImageSlider } from '../components'
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
      <div className="listing-details">
        <div className="listing-details-left">
          <ImageSlider width='100%' height='55vh'/>

          <div className="likes-contact">
            <div className="likes">
              <div className="likes-count">
                <i class="fa-solid fa-thumbs-up"></i>
                {selectedListing.likes}
              </div>

              <div className="views-count">
                {selectedListing.views} Views
              </div>
            </div>

            <div className="contact">
              <button className='call'>
                <i class="fa-solid fa-phone"></i>
                Call
              </button>

              <button className="direction">
                <i class="fa-solid fa-location-arrow"></i>
                Direction
              </button>
            </div>
          </div>

          <RatingSection
            rating={selectedListing.rating}
            reviews={selectedListing.reviews}
            ratingCount={selectedListing.ratingCount}
            ratingStats={selectedListing.ratingStats}
            avgRatings={selectedListing.factorAvgRatings}
          />
        </div>

        <div className="listing-details-right">
          <ListingBasicInfo selectedListing={selectedListing}/>

          <InfoTable 
            title='Opening Hours'
            columns={['Day', 'Open', 'Close']}
            rows={openingHoursRows}
            style={{width: '100%'}}
          />

          <InfoTable 
            title='Detailed Information'
            columns={["Details", "Info"]}
            rows={detaisRows}
            style={{width: '100%'}}
          />
        </div>
      </div>
      
      {/* <div className="listing-details">
        <RatingSection
          rating={selectedListing.rating}
          reviews={selectedListing.reviews}
          ratingCount={selectedListing.ratingCount}
          ratingStats={selectedListing.ratingStats}
          avgRatings={selectedListing.factorAvgRatings}
        />


      </div> */}

      <ListingSection title="Similar Listings" items={listing}/>
      <ListingSection title="Recommended" items={listing}/>
    </>
  )
}

export default ListingDetails;