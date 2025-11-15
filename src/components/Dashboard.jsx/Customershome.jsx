import React from 'react'
import Sidebar from './Sidebar'
import Customers from './Customer'

function Customershome() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className=" flex-1 bg-gray-50 min-h-screen">
               <Customers />
                </div>
            </div>

        </>
    )
}

export default Customershome
