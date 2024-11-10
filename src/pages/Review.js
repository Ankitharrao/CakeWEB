import React from 'react';
import './Reviews.css'; 

const Reviews = () => {
  const reviews = [
    { name: 'Joe Kane', rating: 5, text: 'The chocolate cake was absolutely delicious! Rich, moist, and full of flavor. Highly recommend!' },
    { name: 'Janel', rating: 4, text: 'A really tasty vanilla cake, light and fluffy. I loved it, just wish there was a bit more frosting.' },
    { name: 'Exar', rating: 5, text: 'The strawberry shortcake was out of this world. Perfect balance of sweetness and freshness. Will order again!' },
    { name: 'Michael Lee', rating: 4, text: 'Red velvet cake was great. The texture was perfect, and the cream cheese frosting was delicious. Would love a bit more cream cheese.' },
    { name: 'Sarah Brown', rating: 5, text: 'Amazing lemon cake! The tangy glaze really made it special. I’ll be back for more!' }
  ];

  return (
    <div className="reviews-page">
      <h1 className="reviews-title">Customer Reviews</h1>
      <p className="reviews-description">See what our customers have to say about our cakes!</p>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3 className="review-name">{review.name}</h3>
            <div className="review-rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
