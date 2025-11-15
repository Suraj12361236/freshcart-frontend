import React from 'react'
import Sidebar from '../Accounts/Sidebar'
import Ordertable from '../Accounts/Ordertable'
import Navbar from '../../pages/Navbar'
import Footer from '../../pages/Footer'

function OrdersPage() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex bg-white">
        {/* Sidebar (20%) */}
        <div className="w-[20%] border-r ">
          <Sidebar />
        </div>

        {/* Right Content (80%) */}
        <div className="w-[80%] h-full px-16 py-10">
          <Ordertable />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OrdersPage
