import React from 'react'
import './Shopping.css'

function Shopping() {
    const cakeList = [
        { name: 'Chocolate Cake', description: 'Rich, moist chocolate cake with creamy frosting.', link:'https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake.jpg', alt:'choco cake' },
        { name: 'Vanilla Cake', description: 'Soft and fluffy vanilla cake with a light texture.', link:'https://flouringkitchen.com/wp-content/uploads/2024/05/strawberry_vanilla_cake_thumbnail.jpg', alt:'vanilla'},
        { name: 'Strawberry Shortcake', description: 'Tangy strawberry shortcake with fresh berries.', link:'https://scientificallysweet.com/wp-content/uploads/2024/04/IMG_2103-feature.jpg', alt:'strawbeery'},
        { name: 'Red Velvet Cake', description: 'A luscious red velvet cake with a cream cheese frosting.', link:'https://upload.wikimedia.org/wikipedia/commons/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg', alt:'red-velvet' },
        { name: 'Lemon Cake', description: 'Zesty lemon cake with a tangy glaze.', link:'https://recipesblob.oetker.ca/assets/4ffbde4ec9a0438da9840bd29b73dda4/1272x764/lemon-cake-11.webp', alt:'lemon' }
        
      ];
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
            <a href={`/cake/${cake.name.toLowerCase().replace(/ /g, '-')}`} className="btn view-more">View Details</a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Shopping
