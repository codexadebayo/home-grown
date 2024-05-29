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
        <h1>Why Us?</h1>
        <div className="advantages">
        <div>
          <div className="advantage1">
          <h2>Empower Local Farmers</h2>
          <p>By using Home Grown you give back to your local farmers directly. Home Grown only serves as a bridge between Homes and Farmers</p>
          </div>
        </div>
        <div>
          <div className="advantage2">
          <h2>Empower Local Farmers</h2>
          <p>By using Home Grown you give back to your local farmers directly. Home Grown only serves as a bridge between Homes and Farmers</p>
          </div>
        </div>
        <div>
          <div className="advantage3">
          <h2>Empower Local Farmers</h2>
          <p>By using Home Grown you give back to your local farmers directly. Home Grown only serves as a bridge between Homes and Farmers</p>
          

          </div>
        </div>
        <div>
          <div className="advantage4">
          <h2>Empower Local Farmers</h2>
          <p>By using Home Grown you give back to your local farmers directly. Home Grown only serves as a bridge between Homes and Farmers</p>
          </div>
        </div>
        
        
        </div>
      </div>
    </div>
  )
}

export default About