import React from 'react'
import Sidebar from './Dashboard.jsx/Sidebar'
import Dashboardproducts from './Dashboard.jsx/Dashboardproduct'

function Producthome() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className=" flex-1 bg-gray-50 min-h-screen">
                <Dashboardproducts />
                </div>
            </div>
        </>
    )
}

export default Producthome
