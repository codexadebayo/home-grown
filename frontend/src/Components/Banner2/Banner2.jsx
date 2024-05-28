import React from "react";
import "./Banner2.css";
import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Banner2 = () => {
  return (
    <div className="banner2">
      <div className="banner2-left">
        <div className="contact">
          <h1>Contact us</h1>
          <p>+234-808-1573-468</p>
        </div>
        <div className="icons">
          <Link to="instagram.com/_anotherbadman">
            {<RiTwitterXFill size={30} style={{color: '#ffffff'}} />}
          </Link>
          <Link to="instagram.com/_anotherbadman">
            {<MdAlternateEmail style={{color: '#ffffff'}} size={30} />}
          </Link>
          <Link to="instagram.com/_anotherbadman">{<FaPhone style={{color: '#ffffff'}} size={30} />}</Link>
        </div>
      </div>
      <div className="banner2-right"></div>
    </div>
  );
};

export default Banner2;
