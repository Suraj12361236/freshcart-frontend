import axios from 'axios'
import React, { useState } from 'react'
import Signin from '../Signin'
import Swal from 'sweetalert2'

function Accountsetting() {

    let [accountsetting, setaccountsetting] = useState({})

    let inputvalue = (e) => {
        setaccountsetting({
            ...accountsetting, [e.target.name]: e.target.value
        })
    }

    let accountsbtn = () => {
        axios.post("https://freshcart-backend-umber.vercel.app/accountsetting", { accountsetting }).then((res) => {
                        if (res.data.status) {
                            Swal.fire({
                                text: "account update...",
                                icon: "success"
                            });
                        }
                        else {
                            Swal.fire({
                                icon: "error",
                                text: "failed to update account...",
        
                            });
                        }
                    })
                }
            
        
    return (
        <>
            <div className="pb-5 bg-white flex items-start justify-left ">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Account Setting
                    </h1>

                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Account details
                    </h2>

                    <div className="space-y-5">
                        {/* first name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="jitu"
                                name='firstname'
                                onChange={inputvalue}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        {/* last name -------- */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="chauhan"
                                name='lastname'
                                onChange={inputvalue}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                name='email'
                                onChange={inputvalue}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                placeholder="Phone number"
                                name='phone'
                                onChange={inputvalue}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Button */}
                        <button
                            onClick={accountsbtn}
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
                        >
                            Save Details
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Accountsetting
