import { Header, Footer, ListingBasicInfo, InfoTable, ListingSection, RatingSection, ImageSlider, PreviewImage } from '../components'
// import { listing } from '../data/listing_dummy_data.js'
import { useParams } from 'react-router-dom';
import { useListings } from '../hooks/useListings.js';
import '../style/ListingDetails.css'
import { getListingById, getAllListings, getNewListings } from '../services/firebase/firestore/listingService.js';


function ListingDetails() {
  const { listings: newListings, loading: newLoading, error: newError} = useListings(getNewListings, 10)
  const { listings: recommendedListings, loading: recommendedLoading, error: recommendedError} = useListings(getAllListings, 10)



  const {listingId} = useParams(); 
  if(!listingId) {
    return <p>Something went wrong, Come back later...</p>
  }
  const { listings, loading, error} = useListings(getListingById, listingId)

  if (loading) {
    return <p>Loading listing...</p>;
  }
  
  if (!listings) {
    return (
      <>
        <h2 style={{textAlign: 'center', margin: '5rem 0 5rem'}}>Listing Not Found</h2>
      </>
    )
  }
  

  const detailsRows = Object.entries(listings.details).map(
    ([details, info]) => [
      details, 
      info.toString()
    ]
  )

  const weekOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const openingHoursRows = weekOrder.map((day) => {
    const details = listings.businessHours[day];

    if (!details || details.isClosed) {
      return [day, "Closed", "-"];
    }

    const slot = details.slots[0];

    return [
      day,
      slot.open,
      slot.close
    ];
  });

  const imageList = listings.images.map(image => image.fullUrl);


  return (
    <>
      <div className="listing-details">
        <div className="listing-details-left">
          <PreviewImage images={imageList}/>
          {/* <ImageSlider /> */}

          <div className="likes-contact">
            <div className="likes">
              <div className="likes-count">
                <i className="fa-solid fa-thumbs-up"></i>
                {listings.likes}
              </div>

              <div className="views-count">
                ({listings.views} Views)
              </div>
            </div>

            <div className="contact">
              <button className='call'>
                <i className="fa-solid fa-phone"></i>
                Call
              </button>

              <button className="direction">
                <i className="fa-solid fa-location-arrow"></i>
                Direction
              </button>
            </div>
          </div>

          <RatingSection
            rating={listings.rating}
            review_count={listings.reviews}
            ratingCount={listings.ratingCount}
            ratingStats={listings.ratingStats}
            avgRatings={listings.factorAvgRatings}
            listingId={listingId}
          />
        </div>

        <div className="listing-details-right">
          <ListingBasicInfo listings={listings}/>

          <InfoTable 
            title='Opening Hours'
            columns={['Day', 'Open', 'Close']}
            rows={openingHoursRows}
            style={{width: '100%'}}
          />

          <InfoTable 
            title='Detailed Information'
            columns={["Details", "Info"]}
            rows={detailsRows}
            style={{width: '100%'}}
          />
        </div>
      </div>

      <ListingSection title="Similar Listings" items={newListings} see_all_navigate='/similarListings'/>
      <ListingSection title="Recommended" items={recommendedListings} see_all_navigate='/recommendedListings'/>
    </>
  )
}

export default ListingDetails;