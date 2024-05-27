import React from "react";
import "./Reviews.css";
import home from "../../assets/home-grown.svg";
import { TiSocialInstagram } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


const Reviews = () => {
  return (
    <div className="reviews">
      <div className="review">
        <input type="text" placeholder="Comment" />
        <button>Comment</button>
      </div>

      <div className="cta">
        <div className="logo">
          <img src={home} alt="" />
        </div>

        <h1>Home Grown</h1>
        <p>Shop for unlimited food at market prices</p>
        <div className="socials">
                {<FaWhatsapp size={20}/>}
                {<TiSocialInstagram size={20}/>}
                {<FaXTwitter size={20}/>}
                {<IoCall size={20}/>}
            </div>
      </div>
    </div>
  );
};

export default Reviews;
