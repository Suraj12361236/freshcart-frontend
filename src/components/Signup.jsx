import React, { useState } from 'react'
import groot2 from "../images/signup.svg"
import axios from 'axios'
import Swal from 'sweetalert2'

function Signup() {

  let [signup, setsignup] = useState({})

  let inputvalue = (e) => {
    setsignup({
      ...signup, [e.target.name]: e.target.value
    })
  }

  let signupbtn = () => {
    axios.post("http://localhost:5001/signup", { signup }).then((res) => {
      if (res.data.status) {
        Swal.fire({
          text: "successfully signup...",
          icon: "success"
        });
      }
      else {
        Swal.fire({
          icon: "error",
          text: "failed to signup",

        });
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        {/* Navbar */}
        <div className="absolute top-5 left-10 flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold text-gray-800">FreshCart</h1>
        </div>

        {/* Signup Box */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-lg p-10 w-11/12 max-w-5xl">
          {/* Left Illustration */}
          <div className="hidden md:flex justify-center w-1/2">
            <img
              src={groot2}
              alt="Signup illustration"
              className="w-80"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 px-5">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Get Start Shopping
            </h2>
            <p className="text-gray-500 mb-6">
              Welcome to FreshCart! Enter your email to get started.
            </p>

            <div className="space-y-4">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={inputvalue}
                  className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="LastName"
                  name="lastname"
                  onChange={inputvalue}
                  className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={inputvalue}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={inputvalue}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button onClick={signupbtn}

                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
              >
                Register
              </button>

              <p className="text-sm text-gray-500 mt-3">
                By continuing, you agree to our{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Terms of Service
                </a>{" "}
                &{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Buy Now */}
        <div className="fixed bottom-5 right-5">
          <button className="flex items-center bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800">
            <span className="mr-2">🛒</span> Buy Now
          </button>
        </div>
      </div>
    </>
  )
}

export default Signup
