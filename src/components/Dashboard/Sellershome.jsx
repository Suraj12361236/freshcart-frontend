import React from 'react'
import Sellers from './Sellers'
import Sidebar from './Sidebar'

function Sellershome() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className=" bg-gray-50 min-h-screen">
                 <Sellers />
                </div>
            </div>
        </>
    )
}

export default Sellershome
