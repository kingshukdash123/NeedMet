import "../style/Hero.css";

export default function Hero() {
  const tags = [
    "Saloon",
    "Spa",
    "Rental Services",
    "Gas/LPG Cylinder",
    "Tutors",
    "Garage",
    "Fitness / Yoga Instructors"
  ];

  return (
    <section className="hero">
      <div className="hero-inner">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <div className="hero-location">
            <i className="fa-solid fa-location-dot"></i>
            <span>Haldia, West Bengal</span>
          </div>

          <div className="hero-search">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder='Search for "Room Rent"'
            />
          </div>

          <div className="hero-tags">
            {tags.map((tag, index) => (
              <button key={index} className="tag-btn">
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="hero-image-card">
            <img src='https://img.freepik.com/free-vector/natural-landscape-wallpaper-concept_23-2148650600.jpg?semt=ais_user_personalization&w=740&q=80' alt="Marketplace Illustration" />
          </div>
        </div>

      </div>
    </section>
  );
}