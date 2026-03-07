import { Header, Footer, ListingBasicInfo, InfoTable, ListingSection, RatingSection, ImageSlider, PreviewImage } from '../components'
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

    const images = [ 
      'https://firebasestorage.googleapis.com/v0/b/startup20-5eaa7.firebasestorage.app/o/listings%2FSALEFTRkbVNN1SI4yGQT%2Ffull_719c5166-7702-4770-9f97-5be90964cb29.jpg?alt=media&token=4e8885a1-78bd-4b78-9de8-9a99d83c1450', 
      'https://firebasestorage.googleapis.com/v0/b/startup20-5eaa7.firebasestorage.app/o/listings%2FSALEFTRkbVNN1SI4yGQT%2Ffull_0785d585-a979-4539-8b2a-e4a4a57e2551.jpg?alt=media&token=9ef49997-cd6a-4727-a9d1-0dba5fdc16b8', 
      'https://firebasestorage.googleapis.com/v0/b/startup20-5eaa7.firebasestorage.app/o/listings%2FSALEFTRkbVNN1SI4yGQT%2Ffull_5d4c2553-3763-4bd5-bc41-429895a58d06.jpg?alt=media&token=cb53dd94-a3db-4e0d-9e4e-d1ed8ba08982',
      'https://firebasestorage.googleapis.com/v0/b/startup20-5eaa7.firebasestorage.app/o/listings%2FSALEFTRkbVNN1SI4yGQT%2Ffull_0785d585-a979-4539-8b2a-e4a4a57e2551.jpg?alt=media&token=9ef49997-cd6a-4727-a9d1-0dba5fdc16b8',
      'https://firebasestorage.googleapis.com/v0/b/startup20-5eaa7.firebasestorage.app/o/listings%2FSALEFTRkbVNN1SI4yGQT%2Ffull_719c5166-7702-4770-9f97-5be90964cb29.jpg?alt=media&token=4e8885a1-78bd-4b78-9de8-9a99d83c1450', 
      'https://firebasestorage.googleapis.com/v0/b/startup20-5eaa7.firebasestorage.app/o/listings%2FSALEFTRkbVNN1SI4yGQT%2Ffull_0785d585-a979-4539-8b2a-e4a4a57e2551.jpg?alt=media&token=9ef49997-cd6a-4727-a9d1-0dba5fdc16b8', 
      'https://firebasestorage.googleapis.com/v0/b/startup20-5eaa7.firebasestorage.app/o/listings%2FSALEFTRkbVNN1SI4yGQT%2Ffull_5d4c2553-3763-4bd5-bc41-429895a58d06.jpg?alt=media&token=cb53dd94-a3db-4e0d-9e4e-d1ed8ba08982',
      'https://firebasestorage.googleapis.com/v0/b/startup20-5eaa7.firebasestorage.app/o/listings%2FSALEFTRkbVNN1SI4yGQT%2Ffull_0785d585-a979-4539-8b2a-e4a4a57e2551.jpg?alt=media&token=9ef49997-cd6a-4727-a9d1-0dba5fdc16b8',
      ]

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
          <PreviewImage images={images}/>
          {/* <ImageSlider /> */}

          <div className="likes-contact">
            <div className="likes">
              <div className="likes-count">
                <i class="fa-solid fa-thumbs-up"></i>
                {selectedListing.likes}
              </div>

              <div className="views-count">
                ({selectedListing.views} Views)
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

      <ListingSection title="Similar Listings" items={listing} see_all_navigate='/similarListings'/>
      <ListingSection title="Recommended" items={listing} see_all_navigate='/recommendedListings'/>
    </>
  )
}

export default ListingDetails;