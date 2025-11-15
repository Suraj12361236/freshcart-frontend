import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Wishlist = () => {
  let [products, setproducts] = useState([])

  useEffect(()=>{
    getwishlist()
  },[])


  let getwishlist = () => {
    axios.get("http://localhost:5001/wishlistproduct").then((res) => {
      if (res.data.status) {
        setproducts(res.data.wishlistitem)
      }
      else {
        Swal.fire({
          icon: "error",
          text: "failed to added product wishlist",

        });
      }
    })

  }



  // deleteitem -----------
  let deleteitem=(item)=>{
    axios.post("http://localhost:5001/deletewishlistitem",{item})
    window.location.reload()
  }



  return (
    <>
    <Navbar/>


    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
      <p className="text-gray-600 mb-6">
        There are {products.length} products in this wishlist.
      </p>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Actions</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition duration-200"
              >

                <td className="flex items-center gap-4 p-4">
                  <img
                    src={item.productimage}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {item.producttitle}
                    </div>
                    <div className="text-sm text-gray-500">{item.productweight}</div>
                  </div>
                </td>

                <td className="p-4 font-medium text-gray-800">$ {item.productprice}</td>

                <td className="p-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md">
                      Add to cart
                    </button>
                </td>

                <td className="p-4 text-gray-500 hover:text-red-600 cursor-pointer" onClick={()=>deleteitem(item)}>
                  🗑️
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


    <Footer/>

    </>
    
  );
};

export default Wishlist;