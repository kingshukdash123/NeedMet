import '../style/RatingSection.css'

function RatingSection({ rating, reviews, ratingCount, ratingStats, avgRatings }) {

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
    <div className="rating-review-section">
      <div className="rating-section">
        <div className="rating-section-top">
          <h2>Ratings & Reviews</h2>
        </div>

        <div className="rating-body">
          <div className="rating-container">
          
            {/* LEFT SIDE - Average Rating */}
            <div className="rating-overview">
              <h1>Excellent</h1>
              <div className="stars">
                {"★".repeat(Math.round(rating))}
                {"☆".repeat(5 - Math.round(rating))}
              </div>
              <p>{ratingCount} Ratings & {reviews} Reviews</p>
            </div>

            <div className="rating-left-div"></div>

            {/* MIDDLE SIDE - Breakdown */}
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

            <div className="rating-right-div"></div>

            {/* RIGHT SIDE - Avg-rating */}
            <div className="avg-service-rating">
              {
                Object.entries(avgRatings).map(([key, val]) => (
                  <div className="avg-rating-container" key={key}>
                    <div 
                      className="avg-rating-circle" 
                      style={{ "--percent": `${val/5*100}` }}
                    >
                      <div className="avg-rating-circle-val">
                        {val/5*100}%
                      </div>
                    </div>
                    <span>{key}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <button className='share-your-review-btn'>Share Your Review</button>
      </div>

      <div className="reviews-container">
            <div className="reviews-header">
                <h3>Reviews</h3>
            </div>

            <div className="reviews-list">

                {/* Review 1 */}
                <div className="review-card">
                    <div className="review-user">
                        <div className="review-avatar">S</div>

                        <div className="review-user-info">
                            <p className="review-username">Soumen Paul</p>
                            <p className="review-text">
                                Page layouts look better with something in each section. 
                                Web page designers, content writers, and layout artists use lorem ipsum.
                            </p>
                        </div>
                        
                        <div className="review-date">
                          <div className="review-stars">
                              {renderStars(3)}
                            </div>
                            <span className="review-date">21/01/2025</span>
                          </div>
                    </div>
                </div>

                {/* Review 2 */}
                <div className="review-card">
                    <div className="review-user">
                        <div className="review-avatar">S</div>

                        <div className="review-user-info">
                            <p className="review-username">Soumen Paul</p>
                            <p className="review-text">
                                Page layouts look better with something in each section. 
                                Web page designers, content writers, and layout artists use lorem ipsum.
                            </p>
                        </div>
                        
                        <div className="review-date">
                          <div className="review-stars">
                              {renderStars(2)}
                            </div>
                            <span className="review-date">21/01/2025</span>
                          </div>
                    </div>
                </div>

                {/* Review 3 */}
                <div className="review-card">
                    <div className="review-user">
                        <div className="review-avatar">S</div>

                        <div className="review-user-info">
                            <p className="review-username">Soumen Paul</p>
                            <p className="review-text">
                                Page layouts look better with something in each section. 
                                Web page designers, content writers, and layout artists use lorem ipsum.
                            </p>
                        </div>
                        
                        <div className="review-date">
                          <div className="review-stars">
                              {renderStars(5)}
                            </div>
                            <span className="review-date">21/01/2025</span>
                          </div>
                    </div>
                </div>


            </div>

            <div className="review-see-all-btn">
              See All
            </div>

        </div>
    </div>
    
  );
}

export default RatingSection;