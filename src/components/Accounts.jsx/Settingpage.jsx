import React from 'react'
import Navbar from '../../pages/Navbar'

import Accountsetting from './Accountsetting'
import Passwordsetting from './Passwordsetting'
import Deleteaccount from './Deleteaccount'
import Footer from '../../pages/Footer'
import Sidebar from './Sidebar'

function Settingpage() {
    return (
        <>
            <div>
                <Navbar />
                <div className="w-full min-h-screen flex bg-white">
                    {/* Sidebar (20%) */}
                    <div className="w-[20%]  border-r ">
                        <Sidebar/>
                    </div>

                    {/* Right Content (80%) */}
                    <div className="w-[80%] h-full px-16 py-10">
                        <Accountsetting />
                        {/* <Passwordsetting />
                        <Deleteaccount /> */}

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Settingpage
