import React, { useState } from "react";
import { MoreVertical, Trash2, Edit } from "lucide-react";
import product1 from "/src/images/product-img-1.jpg";
import product2 from "/src/images/product-img-2.jpg";
import product3 from "/src/images/product-img-3.jpg";
import product4 from "/src/images/product-img-4.jpg";
import product5 from "/src/images/product-img-5.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboardproducts = () => {
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(null); // track which menu is open





  const products = [
    {
      id: 1,
      image: product1,
      name: "Haldiram's Sev Bhujia",
      category: "Snack & Munchies",
      status: "Active",
      price: 24,
      date: "24 Nov 2022",
    },
    {
      id: 2,
      image: product2,
      name: "NutriChoice Digestive",
      category: "Bakery & Biscuits",
      status: "Active",
      price: 24,
      date: "20 Nov 2022",
    },
    {
      id: 3,
      image: product3,
      name: "Cadbury 5 Star Chocolate",
      category: "Bakery & Biscuits",
      status: "Active",
      price: 35,
      date: "14 Nov 2022",
    },
    {
      id: 4,
      image: product4,
      name: "Onion Flavour Potato",
      category: "Snack & Munchies",
      status: "Active",
      price: 5,
      date: "08 Nov 2022",
    },
    {
      id: 5,
      image: product5,
      name: "Salted Instant Popcorn",
      category: "Instant Food",
      status: "Draft",
      price: 18,
      date: "08 Nov 2022",
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // function to handle Edit/Delete click
  const handleAction = (action, product) => {
    // yaha apna logic likh lena (API call ya modal open etc.)
    setOpenMenu(null); // close the menu after click
  };


  // deleteproduct -------------------------------
  let deleteproduct = (product) => {
    axios.post("http://localhost:5001/deleteproductitem", { product })
    window.location.reload()
  }






  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-500 mt-1">Dashboard / Products</p>
        </div>
        <Link to={"/Addproducthome"}>
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
            Add Product
          </button>
        </Link>
      </div>

      {/* Search & Status Filter */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Products"
          className="border border-gray-300 rounded-md px-4 py-2 w-1/3 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>Status</option>
          <option>Active</option>
          <option>Draft</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Image</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Status</th>
              <th className="p-3">Price</th>
              <th className="p-3">Created at</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, i) => (
              <tr key={product.id} className="border-b border-gray-300 hover:bg-gray-50">
                <td className="p-3">{i + 1}</td>
                <td className="p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                </td>
                <td className="p-3 font-medium text-gray-800">{product.name}</td>
                <td className="p-3 text-gray-600">{product.category}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${product.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="p-3">${product.price}</td>
                <td className="p-3 text-gray-500">{product.date}</td>

                {/* 3 Dots Menu */}
                <td className="p-3 relative">
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() =>
                      setOpenMenu(openMenu === product.id ? null : product.id)
                    }
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openMenu === product.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 p-1 z-10">
                      <button
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => handleAction("Edit", product)}
                      >
                        <Edit size={16} /> Edit
                      </button>
                      <button
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => deleteproduct("Delete",product)}
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboardproducts;
