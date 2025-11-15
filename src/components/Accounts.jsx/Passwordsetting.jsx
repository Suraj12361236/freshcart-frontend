import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Passwordsetting() {

    let [password, setpassword] = useState({})

    let inputvalue = (e) => {
        setpassword({
            ...password, [e.target.name]: e.target.value
        })
    }

    let passwordbtn = () => {
        if (password.newpassword == password.confirmpassword) {
            axios.post("https://freshcart-backend-umber.vercel.app/password", { password }).then((res) => {
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
            })
        }
    }


    return (
        <>
            <div className="pt-10 pb-5 bg-white flex items-start justify-left pt-8">
                <div className="w-full max-w-md  ">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Password</h2>

                    <div className="space-y-5">
                        {/* e-mail---------- */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                E-mail
                            </label>

                            <input
                                type="e-mail"
                                placeholder="enter e-mail"
                                name='email'
                                onChange={inputvalue}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        {/* New Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                New Password
                            </label>

                            <input
                                type="password"
                                placeholder="****"
                                name='newpassword'
                                onChange={inputvalue}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Current Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="****"
                                name='confirmpassword'
                                onChange={inputvalue}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Forgot Password Link */}
                        <p className="text-sm text-gray-600">
                            Can’t remember your current password?{" "}
                            <a href="#" className="text-green-600 hover:underline font-medium">
                                Reset your password.
                            </a>
                        </p>

                        {/* Save Button */}
                        <button
                            onClick={passwordbtn}
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
                        >
                            Save Password
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Passwordsetting
