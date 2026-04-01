import React from "react";
import "../../style/Loader/AllCategoryLoader.css";

function AllCategoryLoader({ sections = 4, itemsPerSection = 8 }) {
  return (
    <div className="category-page-loader">

      {Array.from({ length: sections }).map((_, sectionIndex) => (
        <div key={sectionIndex} className="category-section">

          {/* Section Title */}
          <div className="skeleton skeleton-category-title"></div>

          {/* Items */}
          <div className="category-grid">
            {Array.from({ length: itemsPerSection }).map((_, i) => (
              <div key={i} className="category-item">

                {/* Icon */}
                <div className="skeleton skeleton-category-icon"></div>

                {/* Text */}
                <div className="skeleton skeleton-category-text"></div>

              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}

export default AllCategoryLoader;