import blueTick from '../assets/blueTick.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import website from '../assets/website.svg'
import whatsapp from '../assets/whatsapp.svg'
import '../style/ListingBasicInfo.css'

export default function ListingBasicInfo({ listings, className = '' }) {

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

            <h1 className='listing-basic-info-category'>{listings.category}</h1>

            {/* Title */}
            <h2 className="listing-info-title">{listings.name}</h2>

            {/* Rating */}
            <div className="listing-rating">
                <div className="five-stars">
                    {renderStars(Math.trunc(listings.rating))}
                </div>
                <span className="rating-value">
                    <span>{listings.rating} </span>
                    ({listings.reviews} reviews)
                </span>
            </div>

            {/* Location + Social */}
            <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                <span>{listings.address}</span>
            </div>

            {/* social */}
            <div className="social-icons">
                {listings.social &&
                    Object.entries(listings.social).map(([key, value]) => {
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
                <p>{listings.description}</p>
            </div>

            {/* Owner */}
            <div className="listing-owner">
                <div className="owner-left">
                    <div className="owner-logo">
                        {listings.ownerName[0]}
                    </div>

                    <div>
                        <p className="owner-name">{listings.ownerName}</p>
                        <p className="owner-role">
                            Contributor
                            <img src={blueTick} alt="verified" />
                        </p>
                    </div>
                </div>

                <button className="help-btn">
                    <i className="fa-regular fa-circle-question"></i>
                    <span>Need Help</span>
                </button>
            </div>

        </div>
    )
}