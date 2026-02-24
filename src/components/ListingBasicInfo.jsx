import verified_icon from '../assets/verified_icon.png'
import '../style/ListingBasicInfo.css'
import { ImageSlider } from './'

export default function ListingBasicInfo({ selectedListing }) {

    const socialIcons ={
        'instagram': <i className="fa-brands fa-square-instagram"></i>, 
        'facebook': <i className="fa-brands fa-facebook"></i>, 
        'website': <i className="fa-brands fa-chrome"></i>
    }

    return (
        <div className="service-info-top">
            <ImageSlider width='50vw' height='60vh'/>
            <div className="service-basic-info">
                <p className='service-category'>{selectedListing.category}</p>
                <p className='service-name'>{selectedListing.name}</p>
                <p className='service-description'><span>Description : </span>{selectedListing.description}</p>

                <hr />

                <div className="service-address-container">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className='service-address'>{selectedListing.address}</p>
                </div>

                <hr />

                <div className="service-overview">
                    <div className="service-overview-item">
                        <i className="fa-solid fa-star"></i>
                        <span>{selectedListing.rating}({selectedListing.ratingCount})</span>
                    </div>

                    <div className="service-overview-item">
                        <i className="fa-solid fa-thumbs-up"></i>
                        <span>{selectedListing.likes}</span>
                    </div>

                    <div className="service-overview-item">
                        <i className="fa-solid fa-eye"></i>
                        <span>{selectedListing.views}</span>
                    </div>
                </div>

                <hr />

                <div className="service-owner-details">
                    <div className="service-owner-name_logo">
                    <div className="service-owner-logo">
                        {selectedListing.ownerName[0]}
                    </div>

                    <div className="service-owner-name-section">
                        <p className='service-owner-name'>{selectedListing.ownerName}</p>
                        <p className='service-owner-contributor'>Contributor
                            <img src={verified_icon} alt="" />
                        </p>
                    </div>
                    </div>

                    <div className="service-social">
                    {selectedListing.social && Object.entries(selectedListing.social).map(([key, value]) => {
                        const Icon = socialIcons[key];
                        if (!Icon || !value) return null;

                        let link = value;

                        // Fix links if needed
                        if (key === "facebook") {
                            link = `https://facebook.com/${value}`;
                        }
                        if (key === "instagram") {
                            link = `https://instagram.com/${value.replace("@", "")}`;
                        }

                        return (
                        <a
                            key={key}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {Icon}
                        </a>
                        );
                    })}
                    </div>

                    <div className="service-need-help">
                    <button>Need Help ?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}