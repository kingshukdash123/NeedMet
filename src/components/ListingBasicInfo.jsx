import blueTick from '../assets/blueTick.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import website from '../assets/website.svg'
import whatsapp from '../assets/whatsapp.svg'
import '../style/ListingBasicInfo.css'

export default function ListingBasicInfo({ selectedListing, className = '' }) {

    const socialIcons = {
        instagram: <img src={instagram} alt="instagram" className='social-icons-img' />,
        facebook: <img src={facebook} alt="facebook" className='social-icons-img'/>,
        website: <img src={linkedin} alt="linkedin" className='social-icons-img' />,
        whatsapp: <img src={website} alt="website" className='social-icons-img' />,
        linkedin: <img src={whatsapp} alt="whatsapp" className='social-icons-img' />
    }

    const renderStars = (count) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`fa-solid fa-star ${i <= count ? 'active' : ''}`}
                ></i>
            )
        }
        return stars
    }

    return (
        <div className={`listing-basic-info ${className}`}>

            <h1 className='listing-basic-info-category'>{selectedListing.category}</h1>

            {/* Title */}
            <h2 className="listing-info-title">{selectedListing.name}</h2>

            {/* Rating */}
            <div className="listing-rating">
                <div className="five-stars">
                    {renderStars(Math.trunc(selectedListing.rating))}
                </div>
                <span className="rating-value">
                    <span>{selectedListing.rating} </span>
                    ({selectedListing.ratingCount} reviews)
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
                            <img src={blueTick} alt="verified" />
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