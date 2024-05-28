import React from 'react'
import './AboutUs.css'
import img0 from '../../assets/img0.jpg'

const About = () => {
  return (
    <div className='aboutus'>
      <div className="left">
        <img src={img0} alt="" />
      </div>
      <div className="right">
        <h1>Why Should I Choose Home Grown?</h1>
        <div className="advantages">
        <div className="advantage1">
          <h2>Empower Local Farmers</h2>
          <p>By using Home Grown you give back to your local farmers directly. Home Grown only serves as a bridge between Homes and Farmers</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi odit deleniti, nulla officiis animi accusantium aliquid ad perspiciatis exercitationem</p>
        </div>
        <div className="advantage2">
          <h2>Unbeatable Quality</h2>
          <p>Our farmers are encouraged to give buyers harvest details, and produce variety. This helps qurantee the quality of what foods you buy. </p>
        </div>
        <div className="advantage3">
          <h2>Never Buy Overpriced Food Again</h2>
          <p>We offer the best prices for farm fresh produce with no hidden cost and payment protection.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About