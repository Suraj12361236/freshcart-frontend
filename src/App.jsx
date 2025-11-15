import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Forgotpassword from './components/Forgotpassword'
import Home from './components/Home'
import FreshcartDashboard from './pages/Dashboard'


import FreshcartSellers from './pages/Sellers'
import CustomersPage from './pages/Customers'
import OrderList from './pages/Order-list'
import Dashboardhome from './components/Dashboard.jsx/Dashboardhome'
import Producthome from './components/Producthome'
import Addproducthome from './components/Dashboard.jsx/Addproducthome'
import Sellershome from './components/Dashboard.jsx/Sellershome'
import Customers from './components/Dashboard.jsx/Customer'
import Wishlist from './components/Wishlist'
import CartPage from './components/Cart'
import Productdetails from './components/Productdetails'
import OrdersPage from './components/Accounts.jsx/Order'
import Settingpage from './components/Accounts.jsx/Settingpage'
import Passwordsetting from './components/Accounts.jsx/Passwordsetting'
import Accountsetting from './components/Accounts.jsx/Accountsetting'
import Passworddashboard from './components/Accounts.jsx/passworddashboard'
import Deleteaccountdashboard from './components/Accounts.jsx/Deleteacountdashboard'
import Checkout from './pages/Checkout'
import Customershome from './components/Dashboard.jsx/Customershome'
import AddProduct from './components/Dashboard.jsx/Addproduct'
import Orderlisthome from './pages/Orderlisthome'
import Dashboardproducts from './components/Dashboard.jsx/Dashboardproduct'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Forgotpassword' element={<Forgotpassword />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/FreshcartDashboard' element={<FreshcartDashboard />} />

          <Route path='/AddProduct' element={<AddProduct />} />
          <Route path='/FreshcartSellers' element={<FreshcartSellers />} />
          <Route path='/CustomersPage' element={<CustomersPage />} />
          <Route path='/OrderList' element={<OrderList />} />
          <Route path='/Dashboardhome' element={<Dashboardhome />} />
          <Route path='/Producthome' element={<Producthome />} />
          <Route path='/Addproducthome' element={<Addproducthome />} />
          <Route path='/Sellershome' element={<Sellershome />} />
          <Route path='/Customers' element={<Customers />} />
          <Route path='/Wishlist' element={<Wishlist />} />
          <Route path='/Productdetails' element={<Productdetails />} />
          <Route path='/CartPage' element={<CartPage />} />
          <Route path='/OrdersPage' element={<OrdersPage />} />
          <Route path='/Settingpage' element={<Settingpage />} />
          <Route path='/Passworddashboard' element={<Passworddashboard />} />
          <Route path='/Deleteaccountdashboard' element={<Deleteaccountdashboard />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Customershome' element={<Customershome />} />
          <Route path='/Orderlisthome' element={<Orderlisthome />} />
          <Route path='/Dashboardproducts' element={<Dashboardproducts />} />







        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
