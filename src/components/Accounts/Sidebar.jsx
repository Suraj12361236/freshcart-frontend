import React from 'react'
import { FaRegClipboard, FaCog, FaMapMarkerAlt, FaCreditCard, FaBell, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Sidebar() {


    return (
        <>
            <div className="w-full h-full px-10 py-12">

                {/* Active Tab */}
                <Link to={"/OrdersPage"}>
                    <div className="flex items-center gap-3 bg-[#002C2D] text-white px-2 py-3 rounded-xl cursor-pointer mb-6">
                        <FaRegClipboard size={16} />
                        <span className="font-medium">Your Orders</span>
                    </div>
                </Link>
                {/* Menu Items */}
                <div className="space-y-6 text-gray-700 ">
                    <Link to={"/Settingpage"}>
                        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md py-2">
                            <FaCog size={16} />
                            <span>Settings</span>
                        </div>
                    </Link>
                    <Link to={"/Passworddashboard"}>
                        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md py-2">
                            <FaMapMarkerAlt size={16} />
                            <span>Passwordsetting</span>
                        </div>
                    </Link>

                    <Link to={"/Deleteaccountdashboard"}>
                        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-md py-2">
                            <FaCreditCard size={16} />
                            <span>Delete account</span>
                        </div>
                    </Link>
                </div>

                {/* Divider */}
                <hr className="my-2" />

                {/* Log out */}
                <Link to={"/"}>
                <div className="flex items-center gap-3 text-gray-900 cursor-pointer hover:bg-gray-50 rounded-md py-2">
                    <FaSignOutAlt size={16} />
                    <span>Log out</span>
                </div>
                </Link>
            </div>
        </>
    )
}

export default Sidebar
