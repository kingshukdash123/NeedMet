import React from "react";
import "../../style/Loader/ListingDetailsLoader.css";

function ListingDetailsLoader() {
  return (
    <div className="detail-page">

      {/* TOP SECTION */}
      <div className="detail-top">

        {/* LEFT - IMAGE */}
        <div className="detail-left">
          <div className="skeleton detail-main-img"></div>

          <div className="detail-thumbnails">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="skeleton detail-thumb"></div>
            ))}
          </div>

        </div>

        {/* RIGHT - INFO */}
        <div className="detail-right">
          <div className="skeleton detail-category"></div>
          <div className="skeleton detail-title"></div>
          <div className="skeleton detail-rating"></div>
          <div className="skeleton detail-location"></div>

          <div className="detail-socials">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="skeleton detail-icon"></div>
            ))}
          </div>

          <div className="skeleton detail-desc"></div>
          <div className="skeleton detail-user"></div>
        </div>

      </div>

      {/* MIDDLE SECTION */}
      <div className="detail-middle">

        {/* Ratings */}
        <div className="detail-box">
          <div className="skeleton detail-box-title"></div>
          <div className="skeleton detail-rating-bars"></div>
        </div>

        {/* Opening Hours */}
        <div className="detail-box">
          <div className="skeleton detail-box-title"></div>
          <div className="skeleton detail-table"></div>
        </div>

      </div>

      {/* REVIEWS */}
      <div className="detail-box">
        <div className="skeleton detail-box-title"></div>
        <div className="skeleton detail-review"></div>
      </div>

      {/* SIMILAR LISTINGS */}
      <div className="detail-section">
        <div className="skeleton detail-section-title"></div>

        <div className="detail-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-name"></div>
              <div className="skeleton skeleton-location"></div>
            </div>
          ))}
        </div>
      </div>

      {/* RECOMMENDED */}
      <div className="detail-section">
        <div className="skeleton detail-section-title"></div>

        <div className="detail-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-name"></div>
              <div className="skeleton skeleton-location"></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ListingDetailsLoader;