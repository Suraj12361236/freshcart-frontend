import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import amazonpay from "../images/amazonpay.svg";
import american from "../images/american-express.svg";
import MasterCard from "../images/mastercard.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-400 mt-12">
      
      {/* ====== Top Section (FLEX) ====== */}
      <div className="max-w-8xl mx-auto px-13 py-12 flex flex-wrap gap-10 justify-between">
        
        {/* 1️⃣ Categories */}
        <div className="w-40">
          <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Vegetables & Fruits</li>
            <li>Breakfast & instant food</li>
            <li>Bakery & Biscuits</li>
            <li>Atta, rice & dal</li>
            <li>Sauces & spreads</li>
            <li>Organic & gourmet</li>
            <li>Baby care</li>
            <li>Cleaning essentials</li>
            <li>Personal care</li>
          </ul>
        </div>

        {/* 2️⃣ Get to know us */}
        <div className="w-40">
          <h3 className="font-semibold text-gray-900 mb-4">Get to know us</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Our Value</li>
          </ul>
        </div>

        {/* 3️⃣ For Consumers */}
        <div className="w-40">
          <h3 className="font-semibold text-gray-900 mb-4">For Consumers</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Product Returns</li>
            <li>FAQ</li>
            <li>Shop Checkout</li>
          </ul>
        </div>

        {/* 4️⃣ Become a Shopper */}
        <div className="w-40">
          <h3 className="font-semibold text-gray-900 mb-4">Become a Shopper</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Shopper Opportunities</li>
            <li>Become a Shopper</li>
            <li>Earnings</li>
            <li>Ideas & Guides</li>
            <li>New Retailers</li>
          </ul>
        </div>

        {/* 5️⃣ Freshcart Programs */}
        <div className="w-40">
          <h3 className="font-semibold text-gray-900 mb-4">Freshcart programs</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Freshcart programs</li>
            <li>Gift Cards</li>
            <li>Promos & Coupons</li>
            <li>Freshcart Ads</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400"></div>

      {/* ====== Bottom Section (FLEX) ====== */}
      <div className="max-w-8xl mx-auto px-13 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Payment Partners */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-gray-900">Payment Partners</span>

          <img src={amazonpay} alt="Amazon Pay" className="h-5" />
          <img src={american} alt="Amex" className="h-5" />
          <img src={MasterCard} alt="MasterCard" className="h-5" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg"
            alt="PayPal"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-5"
          />
        </div>

        {/* App Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-gray-700 font-medium">
            Get deliveries with FreshCart
          </p>

          <div className="flex gap-3">
            <div className="flex items-center bg-black text-white px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer">
              <FaApple className="text-lg mr-2" /> App Store
            </div>

            <div className="flex items-center bg-black text-white px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer">
              <FaGooglePlay className="text-lg mr-2" /> Google Play
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400"></div>

      {/* ====== Copyright (FLEX) ====== */}
      <div className="max-w-8xl mx-auto px-12 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>
          © 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved.{" "}
          <span className="text-green-600 font-medium">Powered by Codescandy.</span>
        </p>

        <div className="flex items-center gap-3 mt-2 mr-2 md:mt-0">
          <span>Follow us on</span>
          <FaFacebookF className="cursor-pointer hover:text-green-600" />
          <FaTwitter className="cursor-pointer hover:text-green-600" />
          <FaInstagram className="cursor-pointer hover:text-green-600" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
