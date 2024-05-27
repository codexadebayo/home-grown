import React from "react";
import "./Banner1.css";
import leaflogo from '../../assets/leaflogo.png'

const Banner1 = () => {
  return (
    <div className="banner1">
      <div className="banner1-left"></div>
      <div className="banner1-right">
        <h1>Home Grown</h1>
        <p>Buy more food & save 30%</p>
        <img src={leaflogo} alt="" />
        <input type="text" name="" id="" placeholder="Search" />
      </div>
    </div>
  );
};

export default Banner1;
