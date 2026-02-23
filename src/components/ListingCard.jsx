import "../style/ListingCard.css";


export default function ListingCard({item}) {
  console.log(item)
  return (
    <div className="listing-card">
      {/* Image */}
      <div className="listing-image">
        <img src={item.images[0].thumbUrl} alt={item.name} />
      </div>

      {/* Content */}
      <div className="listing-content">
        <p className="listing-category">{item.category}</p>

        <h3 className="listing-title">{item.name}</h3>

        <div className="listing-location">
          <i className="fa-solid fa-location-dot loc-icon"></i>
          <span>{item.address}</span>
        </div>

        <div className="listing-rating">
          <i className="fa-solid fa-star star-icon"></i>
          <span>{item.rating}</span>
        </div>
      </div>
    </div>
  );
}