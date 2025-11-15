// ✅ FreshCart Add Product Page – COMPLETE & FINAL
// Matches website exactly including In Stock section, Product Code, SKU, Status, Prices, Meta
// Sidebar + Topbar included, Tailwind + Lucide Icons

import React, { useState } from 'react';
import { Menu, Search, Upload, ArrowLeft } from 'lucide-react';

const Sidebar = () => (
  <div className="hidden md:flex flex-col w-64 h-screen bg-white shadow-lg p-4 border-r">
    <h2 className="text-xl font-bold mb-4">FreshCart</h2>
    <ul className="space-y-3 text-gray-600">
      <li className="hover:text-green-600 cursor-pointer">Dashboard</li>
      <li className="hover:text-green-600 cursor-pointer">Products</li>
      <li className="text-green-600 font-semibold cursor-pointer">Add Product</li>
      <li className="hover:text-green-600 cursor-pointer">Orders</li>
    </ul>
  </div>
);

const Topbar = () => (
  <div className="flex items-center justify-between bg-white p-4 shadow-sm">
    <div className="flex items-center gap-2">
      <Menu className="md:hidden" />
      <h3 className="font-semibold text-lg">Add Product</h3>
    </div>
    <div className="flex items-center border rounded-md px-3 py-1">
      <Search size={18} />
      <input
        type="text"
        placeholder="Search Products"
        className="ml-2 outline-none text-sm"
      />
    </div>
  </div>
);

const AddProductPage = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
   
      <div className="flex-1">
        <Topbar />

        <div className="p-4">
          <button className="flex items-center gap-2 text-green-600 hover:text-gray-800 mb-4">
            <ArrowLeft size={18} /> Back to Products
          </button>

          <div className="bg-white p-6 rounded-lg shadow-md mx-auto">
            <h2 className="text-xl font-semibold mb-6">Add New Product</h2>

            {/* Product Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-medium text-sm text-green-600 ">Product Title</label>
                <input type="text" className="w-full border p-2 rounded-md mt-1" />
              </div>

              <div>
                <label className="font-medium text-sm text-green-600">Product Category</label>
                <select className="w-full border p-2 rounded-md mt-1">
                  <option>Groceries</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                </select>
              </div>

              <div>
                <label className="font-medium text-sm text-green-600">Weight</label>
                <div className="flex gap-2">
                  <input type="number" className="w-2/3 border p-2 rounded-md mt-1" />
                  <select className="w-1/3 border p-2 rounded-md mt-1">
                    <option>kg</option>
                    <option>gm</option>
                  </select>
                </div>
              </div>

              {/* <div>
                <label className="font-medium text-sm">In Stock</label>
                <input type="checkbox" className="mt-2" />
              </div> */}

              <div>
                <label className="font-medium text-sm text-green-600">Product Code</label>
                <input type="text" className="w-full border p-2 rounded-md mt-1" />
              </div>

              <div>
                <label className="font-medium text-sm text-green-600">Product SKU</label>
                <input type="text" className="w-full border p-2 rounded-md mt-1" />
              </div>

              <div>
                <label className="font-medium text-sm text-green-600">Status</label>
                <select className="w-full border p-2 rounded-md mt-1">
                  <option>Active</option>
                  <option>Disabled</option>
                </select>
              </div>
            </div>

            {/* Product Images */}
            <div className="mt-6">
              <label className="font-medium text-sm text-green-600">Product Images</label>
              <div className="border border-dashed rounded-lg p-6 text-center mt-2 cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  id="upload"
                  onChange={handleImageChange}
                />
                <label htmlFor="upload" className="cursor-pointer">
                  <Upload className="mx-auto mb-2" />
                  <p className="text-sm">Click to upload image</p>
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="preview"
                    className="mx-auto mt-4 w-32 h-32 object-cover rounded-md"
                  />
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="font-medium text-sm text-green-600">Description</label>
              <textarea
                rows="4"
                className="w-full border p-2 rounded-md mt-1"
                placeholder="Write product description"
              ></textarea>
            </div>

            {/* Product Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="font-medium text-sm text-green-600">Regular Price</label>
                <input type="number" className="w-full border p-2 rounded-md mt-1" />
              </div>

              <div>
                <label className="font-medium text-sm text-green-600">Sale Price</label>
                <input type="number" className="w-full border p-2 rounded-md mt-1" />
              </div>
            </div>

            {/* Meta Data */}
            <div className="mt-6">
              <label className="font-medium text-sm text-green-600">Meta Title</label>
              <input type="text" className="w-full border p-2 rounded-md mt-1" />

              <label className="font-medium text-sm mt-4 text-green-600">Meta Description</label>
              <textarea rows="3" className="w-full border p-2 rounded-md mt-1"></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button className="px-4 py-2 rounded-md bg-gray-200">Cancel</button>
              <button className="px-4 py-2 rounded-md bg-green-600 text-white">Save Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;