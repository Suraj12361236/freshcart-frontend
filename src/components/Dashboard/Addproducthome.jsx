import React from 'react'



import Sidebar from './Sidebar'
import AddProduct from './Addproduct'







export default function Addproducthome() {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <div className=" flex-1 bg-gray-50 min-h-screen">
        <AddProduct/>
        
        </div>
      </div>

    </>
  )
}
