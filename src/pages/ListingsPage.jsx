import { useParams } from "react-router-dom";
import { useListings } from "../hooks/useListings";
import { getNewListings } from "../services/firebase/firestore/listingService";
import { useLocation } from "react-router-dom";
import { ListingSection } from "../components";

const ListingsPage = () => {
  const { state } = useLocation();

  let type, fetchFn;

  const title = state?.title;
  const data = state?.listings;
  const params = state?.params || {};

  if(type === '/listings/newly_added') {
    fetchFn = getNewListings
  }

  // { type } = useParams();

//   if (type === "recommended") {
//     fetchFn = getListingByCategory;
//     params = { category: ["Printing & Xerox Shops", "Gas/LPG Cylinder", "Room Rent"] };
//   } 
//   else if (type === "new") {
//     fetchFn = getNewListings;
//     params = { quantity: 20 };
//   } 
//   else if (type === "similar") {
//     fetchFn = getListingByCategory;
//     params = { category: ["some dynamic category"] };
//   }

  const { listings: fetchedListings, loading, error } = useListings(fetchFn, params, !data);

  const listings = data || fetchedListings;

  if (loading) {
    return <p>Loading listings...</p>;
  }

  if(error) {
    return <p>Something went wrong, Come back later...</p>
  }

  return (
    <ListingSection title={title} listings={listings} see_all_navigate='false'/>
  );
};

export default ListingsPage;