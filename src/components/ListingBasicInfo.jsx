import verified_icon from '../assets/verified_icon.png'
import '../style/ListingBasicInfo.css'

export default function ListingBasicInfo({ selectedListing, className = '' }) {

    const socialIcons = {
        instagram: <i className="fa-brands fa-square-instagram"></i>,
        facebook: <i className="fa-brands fa-facebook"></i>,
        website: <i className="fa-solid fa-globe"></i>,
        whatsapp: <i className="fa-brands fa-square-whatsapp"></i>,
        linkedin: <i className="fa-brands fa-linkedin"></i>
    }

    return (
        <div className={`listing-basic-info ${className}`}>

            <h1 className='listing-basic-info-category'>{selectedListing.category}</h1>

            {/* Title */}
            <h2 className="listing-info-title">{selectedListing.name}</h2>

            {/* Rating */}
            <div className="listing-rating">
                <div className="five-stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <span className="rating-value">
                    {selectedListing.rating} ({selectedListing.ratingCount} reviews)
                </span>
            </div>

            {/* Location + Social */}
            <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                <span>{selectedListing.address}</span>
            </div>

            {/* social */}
            <div className="social-icons">
                {selectedListing.social &&
                    Object.entries(selectedListing.social).map(([key, value]) => {
                        if (!socialIcons[key] || !value) return null;
                        return (
                            <a key={key} href={value} target="_blank" rel="noreferrer">
                                {socialIcons[key]}
                            </a>
                        )
                    })}
            </div>

            {/* Description */}
            <div className="listing-description">
                <h4>Description</h4>
                <p>{selectedListing.description}</p>
            </div>

            {/* Owner */}
            <div className="listing-owner">
                <div className="owner-left">
                    <div className="owner-logo">
                        {selectedListing.ownerName[0]}
                    </div>

                    <div>
                        <p className="owner-name">{selectedListing.ownerName}</p>
                        <p className="owner-role">
                            Contributor
                            <img src={verified_icon} alt="verified" />
                        </p>
                    </div>
                </div>

                <button className="help-btn">
                    <i class="fa-regular fa-circle-question"></i>
                    <span>Need Help</span>
                </button>
            </div>

        </div>
    )
}