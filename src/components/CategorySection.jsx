import "../style/CategorySection.css";

export default function CategorySection() {
  const categories = [
    "Room Rent",
    "PG",
    "Hostel",
    "Flat",
    "Room Rent",
    "PG",
    "Hostel",
    "Flat",
    "PG",
    "Hostel",
    "Flat"
  ];

  return (
    <section className="category-section">
      <div className="category-container">

        <h2 className="category-title">Categories</h2>

        <div className="category-grid">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">
                <img src="data:image/png;base64,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" alt="category" />
              </div>
              <p className="category-name">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}