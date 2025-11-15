import React, { useState } from "react";
import { Search, MapPin, Heart, User, ShoppingBag, Grid, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import freshcartlogo from "/src/images/freshcart-logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b px-12 border-gray-200 bg-white">

      {/* TOP BAR */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* LEFT : LOGO + SEARCH */}
        <div className="flex items-center gap-6">

          {/* LOGO */}
          <img
            src={freshcartlogo}
            alt="FreshCart"
            className="h-7 w-auto object-contain"
          />

          {/* SEARCH BAR (logo ke bilkul side me) */}
          <div className="hidden md:flex items-center">
            <div className="flex w-130 border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search for products"
                className="flex-1 px-3 py-2 outline-none"
              />
              <button className="px-3 text-gray-600 hover:text-green-600">
                <Search />
              </button>
            </div>

            <button className="ml-3 flex items-center gap-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 hover:text-green-600">
              <MapPin size={16} />
              <span>Location</span>
            </button>
          </div>

        </div>

        {/* RIGHT : ICONS */}
        <div className="flex items-center gap-4">
          <Link to={"/Wishlist"}>
            <button className="relative text-gray-600 hover:text-green-600">
              <Heart />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                4
              </span>
            </button>
          </Link>

          <button className="text-gray-600 hover:text-green-600">
            <User />
          </button>

          <Link to={"/CartPage"}>
            <button className="relative text-gray-600 hover:text-green-600">
              <ShoppingBag />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                5
              </span>
            </button>
          </Link>

          {/* Mobile Menu */}
          <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* BOTTOM MENU */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container mx-auto flex items-center px-4 py-3">
          
          <button className="flex items-center gap-2 bg-green-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700">
            <Grid size={18} />
            All Departments
          </button>

          <ul className={`flex-col md:flex-row md:flex gap-6 ml-8 text-gray-700 font-medium ${menuOpen ? "flex" : "hidden md:flex"}`}>
            <Link to={"/home"}><li className="hover:text-green-600 cursor-pointer">Home</li></Link>
            <li className="hover:text-green-600 cursor-pointer">Shop</li>
            <li className="hover:text-green-600 cursor-pointer">Stores</li>
            <li className="hover:text-green-600 cursor-pointer">Mega menu</li>
            <li className="hover:text-green-600 cursor-pointer">Pages</li>
            <Link to={"/OrdersPage"}><li className="hover:text-green-600 cursor-pointer">Account</li></Link>
            <Link to={"/Dashboardhome"}><li className="hover:text-green-600 cursor-pointer">Dashboard</li></Link>
            <li className="hover:text-green-600 cursor-pointer">Docs</li>
          </ul>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;
