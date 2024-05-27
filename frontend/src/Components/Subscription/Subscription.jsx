import React from "react";
import "./Subscription.css";
import fruits from '../../assets/fru1.png'

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="title">
        <h1>Best Offers</h1>
      </div>
      <hr />

      <div className="sub-boxes">
        <div className="box">
          <img src={fruits} alt="" />
          <div className="details">
            <p>Title: Lorem ipsum</p>
            <p>
              Description: dolor sit amet consectetur adipisicing elit. Debitis
              enim voluptate illo dicta facilis velit, voluptates labore?
              Perferendis nostrum deleniti nemo laudan
            </p>
          </div>
          <div className="price">
            <button>#3000</button>
            <button>#5000</button>
          </div>
        </div>
        <div className="box">
          <img src={fruits} alt="" />
          <div className="details">
            <p>Title: Lorem ipsum</p>
            <p>
              Description: dolor sit amet consectetur adipisicing elit. Debitis
              enim voluptate illo dicta facilis velit, voluptates labore?
              Perferendis nostrum deleniti nemo laudan
            </p>
          </div>
          <div className="price">
            <button>#3000</button>
            <button>#5000</button>
          </div>
        </div>
        <div className="box">
        <img src={fruits} alt="" />
          <div className="details">
            <p>Title: Lorem ipsum</p>
            <p>
              Description: dolor sit amet consectetur adipisicing elit. Debitis
              enim voluptate illo dicta facilis velit, voluptates labore?
              Perferendis nostrum deleniti nemo laudan
            </p>
          </div>
          <div className="price">
            <button>#3000</button>
            <button>#5000</button>
          </div>
        </div>
        <div className="box">
          <img src={fruits} alt="" />
          <div className="details">
            <p>Title: Lorem ipsum</p>
            <p>
              Description: dolor sit amet consectetur adipisicing elit. Debitis
              enim voluptate illo dicta facilis velit, voluptates labore?
              Perferendis nostrum deleniti nemo laudan
            </p>
          </div>
          <div className="price">
            <button>#3000</button>
            <button>#5000</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
