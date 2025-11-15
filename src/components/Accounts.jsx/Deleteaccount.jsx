import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Deleteaccount() {

    let [email, setemail] = useState("")

    let emailvalue = (e) => {
        setemail(e.target.value)
    }


    let go=useNavigate()
    let deleteaccount = () => {
        Swal.fire({
            text: "Delete Your Account ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0aad0a",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post("https://freshcart-backend-umber.vercel.app/deleteaccount", { "deleteemail": email }).then((res) => {
                    if (res.data.status) {
                        Swal.fire({
                            text: "Acoount Deleted!",
                            icon: "success"
                        });
                        go("/Signup")
                    }
                    else {
                        Swal.fire({
                            icon: "error",
                            text: "Email invalid..",
                        });
                    }
                })
            }
        });
    }

    return (
        <>
            <div className="pt-10 pb-5 bg-white flex items-start justify-left border-t border-gray-200 pt-8">
                <div className="w-full max-w-2xl ">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Delete Account
                    </h2>

                    <p className="text-gray-700 mb-2">
                        Would you like to delete your account?
                    </p>
                    <div className='mb-2'>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            name='email'
                            onChange={emailvalue}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <p className="text-gray-600 mb-6">
                        This account contains <span className="font-semibold">12 orders</span>.
                        Deleting your account will remove all the order details associated with it.
                    </p>

                    <button onClick={deleteaccount}
                        className="border border-red text-red-600 font-semibold py-2 px-6 rounded-md hover:bg-red-50 transition duration-200"
                    >
                        I want to delete my account
                    </button>
                </div>
            </div>
        </>
    )
}

export default Deleteaccount
