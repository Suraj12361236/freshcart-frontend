import React, { useState } from 'react'
import groot3 from "../images/reset.jpg"
import axios from 'axios'
import Swal from 'sweetalert2'

function Forgotpassword() {

  let [forgot, setforgot] = useState({})
  let inputvalue = (e) => {
    setforgot({
      ...forgot, [e.target.name]: e.target.value
    })
  }
  let forgotbtn = () => {
    if (forgot.newpassword == forgot.confirmpassword) {
      axios.post("http://localhost:5001/forgotpassword", { forgot }).then((res) => {
        if (res.data.status) {
          Swal.fire({
            text: "password update...",
            icon: "success"
          });
        }
        else {
          Swal.fire({
            icon: "error",
            text: "failed to update password...",

          });
        }
      }).catch((err) => {
        console.log(err)
      })
    }

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

        {/* Forgot Password Box */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-lg p-10 w-11/12 max-w-5xl">
          {/* Left Illustration */}
          <div className="hidden md:flex justify-center w-1/2">
            <img
              src={groot3}
              alt="Forgot Password Illustration"
              className="w-72"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 px-5">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Forgot your password?
            </h2>
            <p className="text-gray-500 mb-6">
              Please enter the email address associated with your account and we
              will email you a link to reset your password.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                name='email'
                onChange={inputvalue}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="password"
                placeholder="Confirm password"
                name='confirmpassword'
                onChange={inputvalue}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="password"
                placeholder="New password"
                name='newpassword'
                onChange={inputvalue}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button onClick={forgotbtn}

                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
              >
                Reset Password
              </button>

              <button
                type="button"
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-all"
              >
                Back
              </button>
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

export default Forgotpassword
