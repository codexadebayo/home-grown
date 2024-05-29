import React from "react";
import "./Footnote.css";
import Reviews from "../Reviews/Reviews";

const Footnote = () => {
  return (
    <div className="footnote">
      <ul>
        <li>Contact Us</li>
        <li>Markets</li>
        <li>About Us</li>
        <li>Community</li>
        <li>Farming Programmes</li>
      </ul>
      <Reviews/> 
    </div>
  );
};

export default Footnote;
