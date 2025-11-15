import React, { useState } from 'react'
import groot1 from "../images/signin.svg"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function Signin() {

  let [Signin,setsignin] = useState({})

  let inputvalue = (e) => {
    setsignin({
      ...Signin,[e.target.name]: e.target.value
    })
  }
  
  let signinbtn=()=>{
    axios.post("http://localhost:5001/signin",{Signin}).then((res) => {
          if (res.data.status) {
            Swal.fire({
              text: "signin successfully ...",
              icon: "success"
            });
          }
          else {
            Swal.fire({
              icon: "error",
              text: "invalid details....",
    
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

        {/* Login Box */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-lg p-10 w-11/12 max-w-5xl">
          {/* Left Image */}
          <div className="hidden md:flex justify-center w-1/2">
            <img
              src={groot1}
              alt="Login illustration"
              className="w-72"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 px-5">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Sign in to FreshCart</h2>
            <p className="text-gray-500 mb-6">
              Welcome back to FreshCart! Enter your email to get started.
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={inputvalue}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={inputvalue}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <Link to={"/forgotpassword"} className="text-green-600 hover:underline">
                  Forgot password? Reset It
                </Link>
              </div>

              <button onClick={signinbtn}

                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
              >
                Sign In
              </button>
            </div>

            <p className="text-sm text-center text-gray-500 mt-4">
              Don’t have an account?{" "}
              <Link to={"/signup"} className="text-green-600 font-medium hover:underline">
                Sign Up
              </Link>
            </p>
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

export default Signin
