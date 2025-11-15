import React, { useState } from "react";
import {
  Home,
  Box,
  List,
  ShoppingCart,
  Users,
  Star,
  Settings,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import freshcartlogo from "/src/images/freshcart-logo.svg";

function Sidebar() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <div className="w-64 bg-white shadow-md left-0 top-0 flex flex-col">
      {/* Logo / Title */}
      <div className="px-3 py-2">
      <img
        src={freshcartlogo}
        alt="FreshCart"
        className="h-7 w-auto object-contain mt-4"
      />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 text-gray-700">
        <a
          href="/Dashboardhome"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-green-600 transition"
        >
          <Home size={18} /> <span>Dashboard</span>
        </a>

        <a
          href="/Producthome"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-green-600 transition"
        >
          <Box size={18} /> <span>Products</span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-green-600 transition"
        >
          <List size={18} /> <span>Categories</span>
        </a>

        {/* Orders with dropdown */}
        <div>
          <button
            onClick={() => setIsOrderOpen(!isOrderOpen)}
            className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-green-600 transition focus:outline-none"
          >
            <div className="flex items-center space-x-3">
              <ShoppingCart size={18} /> <span>Orders</span>
            </div>
            {isOrderOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Submenu */}
          {isOrderOpen && (
            <ul className="ml-8 mt-2 list-disc text-sm text-gray-700 space-y-2">
              <li>
                <a
                  href="/Orderlisthome"
                  className="block px-3 py-1 rounded-lg hover:bg-gray-50 hover:text-green-600 transition"
                >
                  List
                </a>
              </li>
              <li>
                <a
                  href="/OrderSingle"
                  className="block px-3 py-1 rounded-lg hover:bg-gray-50 hover:text-green-600 transition"
                >
                  Single
                </a>
              </li>
            </ul>
          )}
        </div>

        <a
          href="/Customershome"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-green-600 transition"
        >
          <Users size={18} /> <span>Customers</span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-green-600 transition"
        >
          <Star size={18} /> <span>Reviews</span>
        </a>

        <a
          href="/Sellershome"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-green-600 transition"
        >
          <Users size={18} /> <span>Sellers</span>
        </a>
      </nav>

      {/* Footer / Settings */}
      <div className="p-4 border-t border-gray-200 text-sm text-gray-500 flex items-center gap-2">
        <Settings size={16} /> Site Settings (Coming Soon)
      </div>
    </div>
  );
}

export default Sidebar;
