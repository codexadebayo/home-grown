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
          <h2>Get Fresh Foods Delivered To Your Home</h2>
          <p>Home Grown partners with farmers across the country significantly reducing your need to buy from distant farms when there's an option closer to home.</p>
          </div>
        </div>
        <div>
          <div className="advantage3">
          <h2>Buy More Food For Less</h2>
          <p>Message farms and bargain prices. Our market place is open to negotiation. Make a friend of a farmer and enjoy many satisfying benefits.</p>
          </div>
        </div>
        <div>
          <div className="advantage4">
          <h2>Eat Healthy & Fresh Home Cooked Meals</h2>
          <p>While processed foods saves time and effort, Home cooked meals are truly a reward of practice and hard work. African dishes are packed with mouth watering spices, healthy nutrients and love. Share love with your family. Give them a taste of Home.</p>
          </div>
        </div>        
        </div>
      </div>
    </div>
  )
}

export default About