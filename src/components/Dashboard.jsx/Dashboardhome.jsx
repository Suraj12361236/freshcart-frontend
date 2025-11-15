
import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'




export default function Dashboardhome() {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <div className=" flex-1 bg-gray-50 min-h-screen">
          <Dashboard/>
        </div>
      </div>

    </>
  )
}
