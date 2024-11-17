import React, {useState} from 'react'
import './Shopping.css'

function Shopping() {
  const [visibleReviews, setVisibleReviews] = useState({});
  const [cart, setCart] = useState([]);
  const [comments, setComments] = useState({});
    const cakeList = [
        { name: 'Chocolate Cake', description: 'Rich, moist chocolate cake with creamy frosting.', link:'https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake.jpg', alt:'choco cake', reviews: [
          { reviewer: 'Alice', comment: 'Absolutely delicious! The best chocolate cake I have ever tasted.', rating: 5 },
          
        ] },
        { name: 'Vanilla Cake', description: 'Soft and fluffy vanilla cake with a light texture.', link:'https://flouringkitchen.com/wp-content/uploads/2024/05/strawberry_vanilla_cake_thumbnail.jpg', alt:'vanilla', reviews: [
          { reviewer: 'Charlie', comment: 'Classic and perfectly balanced. Great with tea.', rating: 4 },
          
        ]},
        { name: 'Strawberry Shortcake', description: 'Tangy strawberry shortcake with fresh berries.', link:'https://scientificallysweet.com/wp-content/uploads/2024/04/IMG_2103-feature.jpg', alt:'strawbeery', reviews: [
          { reviewer: 'Eve', comment: 'Refreshing and delightful, loved the fresh strawberries.', rating: 4 },
          
        ]},
        { name: 'Red Velvet Cake', description: 'A luscious red velvet cake with a cream cheese frosting.', link:'https://upload.wikimedia.org/wikipedia/commons/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg', alt:'red-velvet', reviews: [
          { reviewer: 'Eve', comment: 'Refreshing and delightful, loved the fresh strawberries.', rating: 5 },
          
        ] },
        { name: 'Lemon Cake', description: 'Zesty lemon cake with a tangy glaze.', link:'https://recipesblob.oetker.ca/assets/4ffbde4ec9a0438da9840bd29b73dda4/1272x764/lemon-cake-11.webp', alt:'lemon', reviews: [
          { reviewer: 'Ivy', comment: 'Perfect balance of tangy and sweet. Highly recommend.', rating: 4 },
          
        ] }
        
      ];
      const toggleReviews = (index) => {
        setVisibleReviews((prevVisibleReviews) => ({
          ...prevVisibleReviews,
          [index]: !prevVisibleReviews[index]
        }));
      };
      const handleAddToCart = (cake, comment) => {
        setCart((prevCart) => [...prevCart, { ...cake, comment }]);
      };
    
     
    
    
  return (
    <div>
       <div className="cakes-page">
      <h1 className="cakes-title">Our Cakes</h1>
      <p className="cakes-description">Explore our variety of cakes, perfect for every occasion!</p>

      <div className="cakes-list">
        {cakeList.map((cake, index) => (
          <div className="cake-card" key={index}>
            <h2 className="cake-name">{cake.name}</h2>
            <img src={cake.link} alt={cake.alt} className='cake-img'/>
            <p className="cake-description">{cake.description}</p>

            <div className='buttons'>

            <button 
              onClick={() => handleAddToCart(cake, comments[index])}
              className="btn add-to-cart"
            >
              {cart.find(item => item.name === cake.name) ? '✔ Added' : 'Add to Cart'}
            </button>

            <button 
              onClick={() => toggleReviews(index)}
              className="btn view-more"
            >
              {visibleReviews[index] ? 'Hide Reviews' : 'View More'}
            </button>
            </div>
            
            {visibleReviews[index] && (
              <div className="cake-reviews">
                <h3>Reviews:</h3>
                {cake.reviews.map((review, idx) => (
                  <div key={idx} className="review-item">
                    <p><strong>{review.reviewer}:</strong> {review.comment} (Rating: {review.rating}/5)</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Shopping
