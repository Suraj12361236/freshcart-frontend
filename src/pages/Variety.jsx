import React from "react";
import "../App.css"

const BannerSection = () => {
  return (
    <div className="banner-wrapper">
      
      {/* Fruits & Vegetables */}
      <div className="banner-card1">
        <div className="banner-content">
          <h2>Fruits & Vegetables</h2>
          <p>Get Upto <span>30% Off</span></p>
          <button className="btn">Shop Now</button>
        </div>
       
      </div>

      {/* Freshly Baked Buns */}
      <div className="banner-card2">
        <div className="banner-content">
          <h2>Freshly Baked Buns</h2>
          <p>Get Upto <span>25% Off</span></p>
          <button className="btn">Shop Now</button>
        </div>
       
      </div>
      
    </div>
  );
};

export default BannerSection;
