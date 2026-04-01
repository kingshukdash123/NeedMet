import React from "react";
import "../../style/Loader/ListingSectionLoader.css";

function ListingSectionLoader({ count = 8, showSeeAll = true }) {
  return (
    <div className="listing-section">

      {/* Header */}
      <div className={`listing-header ${!showSeeAll ? "no-see-all" : ""}`}>
        <div className="skeleton skeleton-title"></div>
        {showSeeAll && <div className="skeleton skeleton-see-all"></div>}
      </div>

      {/* Grid */}
      <div className="listing-grid">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="skeleton-card">

            <div className="skeleton skeleton-img"></div>

            <div className="skeleton-content">
              <div className="skeleton skeleton-tag"></div>
              <div className="skeleton skeleton-name"></div>
              <div className="skeleton skeleton-location"></div>
              <div className="skeleton skeleton-rating"></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingSectionLoader;