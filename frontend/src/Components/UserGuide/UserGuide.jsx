import React from "react";
import './UserGuide.css'

const UserGuide = () => {
  return (
    <div className="userguide">
      <div className="demo">
        
      </div>
      <div className="guide">
        <div className="list"><p>Create Reusable Shopping List</p> <hr /></div>
        <div className="list"><p>Shop For Friends and Family</p> <hr /></div>
        <div className="list">
            <p>Make a custom request</p>
            <hr />

        </div>
        <div className="list">
            <p>Delivery options</p>
            <hr />
        </div>
        

      </div>
    </div>
  );
};

export default UserGuide;
