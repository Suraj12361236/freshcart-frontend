import React, { useState } from "react";
import bigbasket from "/src/images/bigbasket.jpeg"
import instamart from "/src/images/instamart.png"
import onlinegrocery from "/src/images/onlinegrocery.jpg"
import dealshare from "/src/images/dealshare.jpeg"
import dmart from "/src/images/d-mart.jpeg"
import Blinkit from "/src/images/Blinkit.png"
import supermarket from "/src/images/supermarket.jpeg"



const vendorsData = [
  {
    id: "#015",
    name: "BigBasket",
    email: "lizin@armyspy.com",
    grossSale: "$560.00",
    earning: "$120.00",
    image: bigbasket,
  },
  {
    id: "#014",
    name: "Swiggy Instamart",
    email: "tured@jourrapide.com",
    grossSale: "$780.00",
    earning: "$360.00",
    image: instamart,
  },
  {
    id: "#013",
    name: "Online Grocery Mart",
    email: "liturname@einrot.com",
    grossSale: "$460.00",
    earning: "$175.00",
    image: onlinegrocery,
  },
  {
    id: "#012",
    name: "DealShare Mart",
    email: "wervel962@superrito.com",
    grossSale: "$350.00",
    earning: "$150.00",
    image: dealshare,
  },
  {
    id: "#011",
    name: "DMart",
    email: "trablneiver@armyspy.com",
    grossSale: "$120.00",
    earning: "$45.00",
    image: dmart,
  },
  {
    id: "#010",
    name: "Blinkit Store",
    email: "steened@rhyta.com",
    grossSale: "$1200.00",
    earning: "$400.00",
    image: Blinkit,
  },
  {
    id: "#009",
    name: "E-Grocery Super Market",
    email: "heathercarpenter@dayrep.com",
    grossSale: "$200.00",
    earning: "$60.00",
    image: supermarket,
  },
];

export default function Sellers() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredVendors = vendorsData.filter((v) => {
    const matchName = v.name.toLowerCase().includes(search.toLowerCase());
    if (filter === "All") return matchName;
    if (filter === "Top Sellers") return matchName && parseFloat(v.grossSale.replace("$", "")) > 500;
    if (filter === "Low Sellers") return matchName && parseFloat(v.grossSale.replace("$", "")) <= 500;
    return matchName;
  });

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-10 gap-3">
          <div>
            <h1 className="text-3xl font-bold">Vendors</h1>
            <p className="text-gray-500">
              Dashboard / <span className="text-green-500 font-medium">Sellers</span>
            </p>
          </div>

          <div className="flex gap-2">
            <button className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600">
              <i className="fa-solid fa-border-all"></i>
            </button>
            <button className="bg-gray-200 text-gray-800 p-3 rounded-md hover:bg-gray-300">
              <i className="fa-solid fa-list"></i>
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl p-5 shadow-sm mb-8 flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="w-full sm:w-1/2 flex items-center gap-3">
            <input
              type="text"
              placeholder="Search Vendors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <div className="w-full sm:w-1/4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-400 outline-none"
            >
              <option>All</option>
              <option>Top Sellers</option>
              <option>Low Sellers</option>
            </select>
          </div>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredVendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 flex flex-col items-center text-center transition"
            >
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-20 h-20 mb-4 object-contain"
              />
              <h2 className="text-lg font-semibold">{vendor.name}</h2>
              <p className="text-sm text-gray-500">Seller ID: {vendor.id}</p>
              <p className="text-gray-500 text-sm mb-4">{vendor.email}</p>
              <div className="flex justify-between w-full border-t pt-4 mt-4 text-sm">
                <div>
                  <p className="text-gray-500">Gross Sale</p>
                  <p className="font-semibold">{vendor.grossSale}</p>
                </div>
                <div>
                  <p className="text-gray-500">Earning</p>
                  <p className="font-semibold">{vendor.earning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-10 text-gray-600">
          <p>
            Showing {filteredVendors.length} of {vendorsData.length} entries
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Previous</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">1</button>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">2</button>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
