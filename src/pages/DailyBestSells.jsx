import React from "react";
import { FaEye, FaHeart, FaExchangeAlt, FaStar, FaShoppingCart } from "react-icons/fa";
import bannerdeal from "../images/banner-deal.jpg"
import tea from "../images/product-img-11.jpg"
import fruits from "../images/product-img-12.jpg"
import pineapple from "../images/product-img-13.jpg"

const products = [
  {
    id: 1,
    name: "Roast Ground Coffee",
    category: "Tea, Coffee & Drinks",
    price: 13.5,
    oldPrice: 18,
    rating: 4.3,
    image: tea,
  },
  {
    id: 2,
    name: "Crushed Tomatoes",
    category: "Fruits & Vegetables",
    price: 13.5,
    oldPrice: 18,
    rating: 4.3,
    image: fruits,
  },
  {
    id: 3,
    name: "Golden Pineapple",
    category: "Fruits & Vegetables",
    price: 14.4,
    oldPrice: 18,
    rating: 4.3,
    image: pineapple,
  },
  {
    id: 4,
    name: "Fresh Mango",
    category: "Fruits & Vegetables",
    price: 12.9,
    oldPrice: 17,
    rating: 4.5,
    image: tea,
  },
];

const DailyBestSells = () => {
  return (
    <div className="px-5 py-12 bg-white">
      <h2 className="text-3xl font-bold mb-10 ml-15">Daily Best Sells</h2>

      <div className="grid grid-cols-5 gap-10 ml-15">

        {/* --- Left Side Banner --- */}
        <div className="relative col-span-1 rounded-2xl overflow-hidden h-[460px] bg-cover bg-center flex flex-col justify-start text-white p-8 banner-deal ">
          <h3 className="text-2xl font-bold mb-3 leading-tight">
            100% Organic Coffee Beans.
          </h3>
          <p className="mb-4 text-gray-200">
            Get the best deal before close.
          </p>
          <button className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-5 py-2 rounded-lg w-fit">
            Shop Now →
          </button>
        </div>

        {/* --- Product Cards --- */}
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-2xl border hover:border-green-500 shadow-sm hover:shadow-lg transition-all overflow-hidden h-[460px] flex flex-col items-center text-center"
          >
            {/* Hover Icons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="bg-white p-2 rounded-full shadow hover:bg-green-100">
                <FaEye />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-green-100">
                <FaHeart />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-green-100">
                <FaExchangeAlt />
              </button>
            </div>

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-auto object-contain mt-10 mb-4"
            />

            {/* Category & Name */}
            <p className="text-sm text-gray-500">{item.category}</p>
            <h3 className="font-semibold mb-2">{item.name}</h3>

            {/* Price */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-600 font-bold">${item.price}</span>
              <span className="text-gray-400 line-through text-sm">${item.oldPrice}</span>
            </div>

            {/* Rating */}
            <div className="flex justify-center mt-1 text-yellow-500 text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.round(item.rating) ? "" : "text-gray-300"}
                />
              ))}
              <span className="text-gray-500 ml-1">{item.rating}</span>
            </div>

            {/* Add to Cart */}
            <button className="bg-green-600 hover:bg-green-700 text-white mt-4 py-2 px-5 rounded-lg w-[85%] flex items-center justify-center gap-2">
              <FaShoppingCart /> Add to cart
            </button>

            {/* Timer */}
            <div className="flex justify-center gap-1 mt-4">
              {["Days", "Hours", "Mins", "Sec"].map((label, i) => (
                <div
                  key={i}
                  className="border rounded-lg px-2 py-1 text-gray-700 text-xs"
                >
                  <div className="font-semibold">1077</div>
                  <div className="text-gray-500">{label}</div>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default DailyBestSells;
