// ✅ FreshCart FULL Products Page
// ✅ Includes: Sidebar + Topbar + Checkbox before image + 12 Products + Lucide Icons
// ✅ 100% Matching FreshCart layout structure

import React from "react";
import {
  Menu,
  Search,
  Plus,
  Pencil,
  Trash2,
  MoreVertical
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-white shadow-lg p-4 border-r">
      <h2 className="text-xl font-bold mb-4">FreshCart</h2>
      <ul className="space-y-3 text-gray-600">
        <li className="hover:text-green-600 cursor-pointer">Dashboard</li>
        <li className="text-green-600 font-semibold cursor-pointer">Products</li>
        <li className="hover:text-green-600 cursor-pointer">Orders</li>
        <li className="hover:text-green-600 cursor-pointer">Customers</li>
      </ul>
    </div>
  );
};

const Topbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Menu className="md:hidden" />
        <h3 className="font-semibold text-lg">Products</h3>
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
};

const productData = new Array(12).fill(0).map(() => ({
  img: "https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg",
  name: "Organic Banana",
  category: "Groceries",
  stock: "In Stock",
  price: "$12.00"
}));

const ProductsPage = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Topbar />

        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-lg">Products</h4>
            <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-md text-sm">
              <Plus size={18} /> Add Product
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="p-3"><input type="checkbox" /></th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3 text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 flex items-center gap-3">
                      <img
                        src={item.img}
                        className="w-12 h-12 rounded-md object-cover"
                        alt="product"
                      />
                      {item.name}
                    </td>
                    <td className="p-3 text-gray-600">{item.category}</td>
                    <td className="p-3 font-medium text-green-600">{item.stock}</td>
                    <td className="p-3 font-semibold">{item.price}</td>
                    <td className="p-3 flex items-center gap-2">
                      <Pencil size={18} className="text-blue-600 cursor-pointer" />
                      <Trash2 size={18} className="text-red-600 cursor-pointer" />
                      <MoreVertical size={18} className="cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
