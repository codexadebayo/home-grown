import React from "react";
import "./Navbar.css";
import logo from "../../assets/home-grown.svg";
import { BsBasket3 } from "react-icons/bs";
import { BsBasket3Fill } from "react-icons/bs";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const emptyCart = <BsBasket3 size={30} />;
  const cartWithItem = <BsBasket3Fill size={30} />;
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="nav-links">
          <li><Link style={{textDecoration:'none', color:'#ffffff'}} to='/about'>About</Link></li>
          <li>Contact</li>
          <li>Farmers</li>
          <li>Market</li>
        </ul>
      </div>
      <div className="user">
        <div className="basket">{emptyCart}</div>
        <div className="account">{<RiAccountPinCircleLine size={30} />}</div>
        <div className="history">{<MdHistory size={30} />}</div>
      </div>
    </div>
  );
};

export default Navbar;
