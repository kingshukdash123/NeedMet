import "../style/ListingCard.css";
import { useNavigate } from "react-router-dom";
import empty_thumb from "../assets/empty_thumb.png"


export default function ListingCard({item}) {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/listing/${item.listingId}`)
  }

  const imageUrl = item.images.length > 0 ? item.images[0].thumbUrl : empty_thumb;

  return (
    <div className="listing-card" onClick={handleClick}>
      {/* Image */}
      <div className="listing-image">
        <img src={imageUrl} alt={item.name} onError={(e) => (e.target.src = empty_thumb)}/>
      </div>

      {/* Content */}
      <div className="listing-content">
        <p className="listing-category">{item.category}</p>

        <h3 className="listing-title">{item.name.length > 20? item.name.slice(0, 20) + "...": item.name}</h3>

        <div className="listing-location">
          <i className="fa-solid fa-location-dot loc-icon"></i>
          <span>{item.address.length > 23 ? item.address.slice(0, 23) + "..." : item.address}</span>
        </div>

        <div className="listing-card-rating">
          <i className="fa-solid fa-star star-icon"></i>
          <span>{item.rating} ({item.ratingCount} reviews)</span>
        </div>
      </div>
    </div>
  );
}