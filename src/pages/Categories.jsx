import React from "react";
import "../App.css"
import Backery from "../images/pet-care.jpg"
import instant from "../images/instant-food.jpg"
import tea from "../images/tea-coffee-drinks.jpg"
import atta from "../images/atta-rice-dal.jpg"
import babycare from "../images/baby-care.jpg"
import nonveg from "../images/chicken-meat-fish.jpg"

let categories = [
  {
    title: "Backery & Biscuits",
    image: Backery 
  },
  {
    title: "Instant Food",
    image: instant
  },
  {
    title: "Tea, Coffee & Drinks",
    image: tea
  },
  {
    title: "Atta, Rice & Dal",
    image: atta
  },
  {
    title: "Baby Care",
    image: babycare
  },
  {
    title: "Chicken, Meat & Fish",
    image: nonveg
  }
];

export default function Categories(){
  return (
    <div className="fc-container">
      <h2 className="section-title">Featured Categories</h2>
      <div className="fc-grid">
        {categories.map((item, index) => (
          <div className="fc-card" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
