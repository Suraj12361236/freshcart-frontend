import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom";

const CartPage = () => {

  let [products, setproducts] = useState([])

  useEffect(() => {
    getcart()
  }, [])


  let getcart = () => {
    axios.get("https://freshcart-backend-umber.vercel.app/cartproduct").then((res) => {
      if (res.data.status) {
        setproducts(res.data.cartproduct)
      }
      else {
        Swal.fire({
          icon: "error",
          text: "failed to added product wishlist",

        });
      }
    })

  }

   // total price ------------

    let totalprice=products.reduce((total,cartproduct)=>{
       return total+parseInt(cartproduct.quantity)*parseInt(cartproduct.productprice)
    },0)  




  let Cartitems = ({ data }) => {
    // deletedata-------------------------
    let deletedata = (item) => {
      axios.post("https://freshcart-backend-umber.vercel.app/deletecartdata", { item })
      window.location.reload()
    }



    // updatequantity ------------------
    let [quantity, setquantity] = useState(data.quantity)

    let increasequantity = () => {
      setquantity(++quantity)
      axios.post("https://freshcart-backend-umber.vercel.app/updatecartitem",{quantity,data})
      window.location.reload()
    }
    let decreasequantity = () => {
      if (quantity > 1) {
        setquantity(--quantity)
        axios.post("https://freshcart-backend-umber.vercel.app/updatecartitem",{quantity,data})
      window.location.reload()

      }
    }


   

    return (
      <>
        <tr className="border-t hover:bg-gray-50">

          <td className="p-4 flex items-center gap-4">
            <img src={data.productimage} className="w-16 h-16 object-contain" />
            {data.producttitle}
          </td>

          <td className="p-4">${data.productprice}</td>

          <td className="p-4 text-center">
            <div className="inline-flex border rounded-md">
              <button className="px-3 py-1 hover:bg-gray-200" onClick={decreasequantity}>-</button>
              <span className="px-3 py-1">{quantity}</span>
              <button className="px-3 py-1 hover:bg-gray-200" onClick={increasequantity}>+</button>
            </div>
          </td>

          <td className="p-4 text-right font-semibold">
            ${parseInt(data.productprice)*parseInt(data.quantity)}
          </td>

          <td className="p-4 text-center cursor-pointer hover:text-red-600" onClick={() => deletedata(data)}>🗑️</td>

        </tr>
      </>
    )
  }


  // checkout ------------
  let go=useNavigate()
  let totalcartprice=totalprice+50
  let checkout=()=>{
    go("/Checkout",{state:totalcartprice})
  }






  return (
    <>

      <Navbar />

      <div className="w-screen min-h-screen bg-gray-50 p-0 m-0 overflow-x-hidden">

        {/* Heading */}
        <div className="w-full py-6 px-6 bg-gray-50">
          <h1 className="text-3xl font-bold">My Cart</h1>
          <p className="text-gray-600">You have {products.length} items in your cart.</p>
        </div>

        {/* FLEX 70% / 30% */}
        <div className="flex w-screen p-0 m-0">

          {/* LEFT - TABLE (70%) */}
          <div className="flex-[0.7] bg-white shadow-md border-r">

            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700 ">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4 text-center">Quantity</th>
                  <th className="p-4 text-right">Subtotal</th>
                  <th className="p-4 text-center">Remove</th>
                </tr>
              </thead>

              <tbody>
                {products.map((item, index) => (
                  <Cartitems data={item} />
                ))}

              </tbody>

            </table>
          </div>

          {/* RIGHT - SUMMARY (30%) */}
          <div className="flex-[0.3] bg-white shadow-md p-6 ml-8">

            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span><span>${totalprice}</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Shipping</span><span>$50.00</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span><span>${totalprice+50}</span>
            </div>

            <button className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700" onClick={checkout}>
              Proceed to Checkout
            </button>

          </div>

        </div>
      </div>







      <Footer />

    </>
  );
};

export default CartPage;