import React from 'react';
import './CustomerReviews.css';

const reviews = [
  { id: 1, name: "Amit Sharma", text: "Excellent service! The dark theme UI is amazing.", rating: 5, colorClass: "card-green" },
  { id: 2, name: "Priya Singh", text: "Very professional and fast response time. Highly recommended.", rating: 5, colorClass: "card-blue" },
  { id: 3, name: "Rahul Verma", text: "Kalpataru Cyber Center has the best digital services in town.", rating: 4, colorClass: "card-purple" },
  { id: 4, name: "Sneha Gupta", text: "Loved the seamless experience and the new design.", rating: 5, colorClass: "card-pink" },
  { id: 5, name: "Vikram Yadav", text: "Great support staff and very premium feel.", rating: 5, colorClass: "card-orange" },
  { id: 6, name: "Anil Kumar", text: "Truly a seamless experience from start to finish.", rating: 5, colorClass: "card-cyan" },
];

const CustomerReviews = () => {
  return (
    <section className="customer-reviews" id="reviews">
      <div className="section-title">
        <h2 style={{ textAlign: "center" }}>What Our <span style={{ color: "var(--neon-green)" }}>Customers Say</span></h2>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", marginBottom: "3rem" }}>Real reviews from our valued clients</p>
      </div>
      
      <div className="review-train-container">
        <div className="review-train">
          {/* Double the reviews for seamless infinite scrolling */}
          {[...reviews, ...reviews].map((review, index) => (
            <div className={`review-card ${review.colorClass}`} key={`${review.id}-${index}`}>
              <div className="review-stars">
                {"★".repeat(review.rating)}{"☆".repeat(5-review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="review-author">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
