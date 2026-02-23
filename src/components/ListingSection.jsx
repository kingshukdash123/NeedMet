import "../style/ListingSection.css";
import { ListingCard } from "./index.js";

export default function ListingSection({ title, items }) {
  return (
    <section className="listing-section">
      
      {/* Header */}
      <div className="listing-header">
        <h2>{title}</h2>
        <span className="see-all">See All</span>
      </div>

      {/* Cards Grid */}
      <div className="listing-grid">
        {items.map((item) => (
          <ListingCard key={item.listingId} item={item} />
        ))}
      </div>

    </section>
  );
}