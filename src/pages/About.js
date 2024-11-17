import React from 'react'
import './About.css'

function About() {
  return (
    <div>
       <div className="about-page">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        We are a passionate team of bakers dedicated to creating delicious, high-quality cakes for all occasions. 
        Our mission is to bring joy and sweetness to every celebration with our beautifully crafted cakes.
      </p>
      
      <div className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://www.shutterstock.com/image-photo/male-baker-holding-tray-baked-600nw-2479618913.jpg" alt="Baker 1" className="team-photo" />
            <h3 className="team-name">John Doe</h3>
            <p className="team-role">Head Baker</p>
            <p className="team-background">John has over 15 years of experience in baking artisan breads and custom cakes. His expertise lies in infusing modern techniques with classic recipes.</p>
            <p className='number'>+91 9834567867</p>
            <div className="social-links">
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="team-member">
            <img src="https://images.ctfassets.net/pdf29us7flmy/7F5XUfHuv7dAW6joysWHxE/c5623a1d81518a813ad53b5020282bdb/GettyImages-583665183_optimized__1_.jpg?w=720&q=100&fm=jpg" alt="Baker 2" className="team-photo" />
            <h3 className="team-name">Jane Smith</h3>
            <p className="team-role">Pastry Chef</p>
            <p className="team-background">Jane is known for her delicate pastries and innovative dessert ideas. She loves bringing color and life to each treat she creates.</p>
            <p className='number'>+91 9456678671</p>
            <div className="social-links">
              <a href="https://twitter.com/janesmith" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="team-member">
            <img src="https://www.hrcacademy.com/wp-content/uploads/2023/07/pastry-chef.jpg" alt="Baker 3" className="team-photo" />
            <h3 className="team-name">Emily Johnson</h3>
            <p className="team-role">Cake Decorator</p>
            <p className="team-background">Emily specializes in intricate cake decorations and themed designs. Her passion for detailed artwork makes each cake a masterpiece.</p>
            <p className='number'>+91 9183456745</p>
            <div className="social-links">
              <a href="https://twitter.com/emilyjohnson" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/in/emilyjohnson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default About
