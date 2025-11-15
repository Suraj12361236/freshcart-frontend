import React from 'react'
import Navbar from '../../pages/Navbar'

import Passwordsetting from './Passwordsetting'
import Footer from '../../pages/Footer'
import Sidebar from './Sidebar'

export default function Passworddashboard() {
    return (
        <>
            <div>
                <Navbar />
                <div className="w-full min-h-screen flex bg-white">
                    {/* Sidebar (20%) */}
                    <div className="w-[20%]  border-r ">
                        <Sidebar />
                    </div>

                    {/* Right Content (80%) */}
                    <div className="w-[80%] h-full px-16 py-10">
                        <Passwordsetting />
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}
