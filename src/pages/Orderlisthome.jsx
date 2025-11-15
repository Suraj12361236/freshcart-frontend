import React from 'react'
import Sidebar from '../components/Dashboard.jsx/Sidebar'
import OrderListPage from './Order-list'

function Orderlisthome() {
  return (
    <>
        <div className="flex">
        <Sidebar/>
        <div className=" flex-1 bg-gray-50 min-h-screen">
        <OrderListPage/>
        
        </div>
      </div>
    </>
  )
}

export default Orderlisthome
