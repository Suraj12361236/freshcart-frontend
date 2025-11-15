import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [addproduct, setaddproduct] = useState({});

  let inputvalue = (e) => {
    setaddproduct({
      ...addproduct, [e.target.name]: e.target.value
    })
  }

  let productadd = () => {
    axios.post("https://freshcart-backend-umber.vercel.app/addproduct", { addproduct }).then((res) => {
      if (res.data.status) {
        Swal.fire({
          text: "Product Add ...",
          icon: "success"
        });
      }
      else {
        Swal.fire({
          icon: "error",
          text: "failed to add product",

        });
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex gap-6">
      {/* Left Section */}
      <div className="flex-1 bg-white rounded-2xl shadow p-6 space-y-6">
       <h2 className="text-xl font-semibold mb-6 text-green-600">Add New Product</h2>
        <p className="text-x font-semibold ">Product Information</p>

        {/* Title and Category */}
        <div className="flex grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              onChange={inputvalue}
              name="title"
              placeholder="Product Name"
              className="w-full mt-1 border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Product Category</label>
            <select className="w-full mt-1 border border-gray-300 rounded-lg p-2" name="category" onChange={inputvalue}>
              <option>Product Category</option>
              <option value="Snacks">Snack & Munchies</option>
              <option value="Biscuits">Bakery & Biscuits</option>
              <option value="Instant cook">Instant Food</option>
              <option value="Dairy products">Dairy, Bread & Eggs</option>
              <option value="Instant cook">maggie</option>
              <option value="Biscuits">snaks food</option>
              <option value="namkeen">savory snak</option>

            </select>
          </div>
        </div>

        {/* Weight */}
        <div className="flex grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Weight</label>
            <input name="weight"
              type="text"
              placeholder="Weight"
              onChange={inputvalue}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Quantity</label>
            <input
              name="quantity"
              type="text"
              placeholder="Quantity"
              onChange={inputvalue}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        {/* Product Images */}
        <div>
          <h3 className="font-semibold mb-2">Product Images</h3>
          <input className=" p-2 border-2 border-solid border-gray-300 rounded-lg h-15 flex w-full justify-center items-center text-gray-500" placeholder="Product Image" onChange={inputvalue} name="image" />
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold mb-2">Product Descriptions</h3>
          <textarea
            name="descriptions"
            placeholder="Enter product description..."
            rows="4"
            onChange={inputvalue}
            className="w-full border border-gray-300 rounded-lg p-2"
          ></textarea>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-80 space-y-6">


        {/* Price */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h3 className="font-semibold">Product Price</h3>
          <div>
            <label className="text-sm font-medium">Regular Price</label>
            <input
              type="text"
              name="regularprice"
              onChange={inputvalue}
              placeholder="$0.00"
              className="w-full mt-1 border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Sale Price</label>
            <input
              type="text"
              name="saleprice"
              onChange={inputvalue}
              placeholder="$0.00"
              className="w-full mt-1 border border-gray-300 rounded-lg p-2"
            />
          </div>

          <button onClick={productadd}>Add Products</button>
        </div>
      </div>
    </div>
  );
}
