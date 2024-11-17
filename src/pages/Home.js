import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom'



function Home() {
  return (
    <div>
       <div className="home-page">
      <h1 className="home-title">Welcome to Our Cake Shop!</h1>
      <p className="home-description">Delicious cakes baked with love and the finest ingredients. Explore our variety of cakes below.</p>
      <img src="https://www.mybakingaddiction.com/wp-content/uploads/2023/06/chocolate-strawberry-cake-on-stand-hero.jpg" alt="delicious cake" className='main-cake'/>
      <div className="cake-list">
        <div className="cake-item">
          
          <h2 className="cake-name">Chocolate Cake</h2>
          <img src="https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake.jpg"alt='' className='cake-img-main'/>
          <p className="cake-description">A rich and moist chocolate cake with creamy frosting.</p>
          <p className='special-offer-1'>Past rate: $50 </p>
          <p className='special-offer-2'>New rate: $45</p>
        </div>

        <div className="cake-item">
          <h2 className="cake-name">Vanilla Cake</h2>
          <img src="https://flouringkitchen.com/wp-content/uploads/2024/05/strawberry_vanilla_cake_thumbnail.jpg"alt='vanilla' className='cake-img-main'/>
          <p className="cake-description">A soft vanilla cake with a light and fluffy texture.</p>
          <p className='special-offer-1'>Past rate: $48 </p>
          <p className='special-offer-2'>New rate: $44</p>
        </div>

        <div className="cake-item">
          <h2 className="cake-name">Strawberry Shortcake</h2>
          <img src="https://scientificallysweet.com/wp-content/uploads/2024/04/IMG_2103-feature.jpg"alt='strawberry' className='cake-img-main'/>
          <p className="cake-description">A sweet and tangy strawberry shortcake with fresh berries.</p>
          <p className='special-offer-1'>Past rate: $46 </p>
          <p className='special-offer-2'>New rate: $40</p>
        </div>
      </div>

      <Link to="/shopping" className="btn view-more">View More Cakes</Link>
    </div>
      
    </div>
  )
}

export default Home
