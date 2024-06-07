import React from 'react'
import './Produce.css'
import mint from '../../assets/mint.jpg'

import manngo from '../../assets/manngo.jpg'

const Produce = () => {
  return (
    // TODO loop through the produce from farms. use farm details to get necessary info. it should random produce from our top 30 farms. in every epoch, a new set of farms will be added. fuckkkk!!!! I need new backend routes. 
    // 1. random farms with a response of their top selling produce. (use top selling to boost specialty, quality, and competition).
    
    <div className='produces'>
        <div className="produce">
        <h1>Farm name</h1>
        <img src={manngo} alt="" />
        <div className="description">
          <p>Freshly plugged mangoes</p>
          <p>Location: Bukuru</p>
          <p>Harvest: 1days</p>
        </div>
        <div className="price">
          <p>Bargain: #2,500 per basket</p>
          <p>Open to offers</p>
        </div>
        </div>
        <div className="produce">
        <h1>Farm name</h1>
        <img src={mint} alt="" />
        <div className="description">
          <p>Freshly plugged mangoes</p>
          <p>Location: Bukuru</p>
          <p>Harvest: 1days</p>
        </div>
        <div className="price">
          <p>Bargain: #2,500 per basket</p>
          <p>Open to offers</p>
        </div>
        </div>
        <div className="produce">
        <h1>Farm name</h1>
        <img src={mint} alt="" />
        <div className="description">
          <p>Freshly plugged mangoes</p>
          <p>Location: Bukuru</p>
          <p>Harvest: 1days</p>
        </div>
        <div className="price">
          <p>Bargain: #2,500 per basket</p>
          <p>Open to offers</p>
        </div>
        </div>
        <div className="produce">
        <h1>Farm name</h1>
        <img src={manngo} alt="" />
        <div className="description">
          <p>Freshly plugged mangoes</p>
          <p>Location: Bukuru</p>
          <p>Harvest: 1days</p>
        </div>
        <div className="price">
          <p>Bargain: #2,500 per basket</p>
          <p>Open to offers</p>
        </div>
        </div>
        <div className="produce">
        <h1>Farm name</h1>
        <img src={mint} alt="" />
        <div className="description">
          <p>Freshly plugged mangoes</p>
          <p>Location: Bukuru</p>
          <p>Harvest: 1days</p>
        </div>
        <div className="price">
          <p>Bargain: #2,500 per basket</p>
          <p>Open to offers</p>
        </div>
        </div>
        <div className="produce">
        <h1>Farm name</h1>
        <img src={manngo} alt="" />
        <div className="description">
          <p>Freshly plugged mangoes</p>
          <p>Location: Bukuru</p>
          <p>Harvest: 1days</p>
        </div>
        <div className="price">
          <p>Bargain: #2,500 per basket</p>
          <p>Open to offers</p>
        </div>
        </div>
        <div className="produce">
        <h1>Farm name</h1>
        <img src={manngo} alt="" />
        <div className="description">
          <p>Freshly plugged mangoes</p>
          <p>Location: Bukuru</p>
          <p>Harvest: 1days</p>
        </div>
        <div className="price">
          <p>Bargain: #2,500 per basket</p>
          <p>Open to offers</p>
        </div>
        </div>
    </div>
  )
}

export default Produce