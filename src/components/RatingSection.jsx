import React from "react";
import '../style/RatingSection.css'

function RatingSection({ rating, reviews, ratingCount, ratingStats }) {

  return (
    <div className="rating-section">
      <h2>Ratings & Reviews</h2>

      <div className="rating-body">
        <div className="rating-container">
        
          {/* LEFT SIDE - Average Rating */}
          <div className="rating-overview">
            <h1>{rating.toFixed(1)}</h1>
            <div className="stars">
              {"★".repeat(Math.round(rating))}
              {"☆".repeat(5 - Math.round(rating))}
            </div>
            <p>{ratingCount} Ratings & {reviews} Reviews</p>
          </div>

          {/* RIGHT SIDE - Breakdown */}
          <div className="rating-breakdown">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = ratingStats[star] || 0;
              const percentage =
                ratingCount > 0
                  ? (count / ratingCount) * 100
                  : 0;

              return (
                <div key={star} className="rating-row">
                  <span>{star} ★</span>

                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>

                  <span>{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reviews-section">
          <p>No Reviews Found</p>
        </div>
      </div>
    </div>
  );
}

export default RatingSection;