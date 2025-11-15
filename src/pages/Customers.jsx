import React from "react";
import { Search, Bell, MoreVertical, ChevronDown, LayoutDashboard, ShoppingBag, List, Users, Star, Settings } from "lucide-react";

export default function CustomersPage() {
  const customers = [
    { id: 1, name: "Bonnie Howe", email: "bonniehowe@gmail.com", phone: "-", purchase: "17 May, 2023 at 3:18pm", spent: "$49.00", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Judy Nelson", email: "judynelson@gmail.com", phone: "435-239-6436", purchase: "27 April, 2023 at 2:47pm", spent: "$490.00", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "John Mattox", email: "johnmattox@gmail.com", phone: "347-424-9526", purchase: "27 April, 2023 at 2:47pm", spent: "$29.00", avatar: "https://i.pravatar.cc/40?img=3" },
    { id: 4, name: "Wayne Rossman", email: "waynerossman@gmail.com", phone: "-", purchase: "27 April, 2023 at 2:47pm", spent: "$39.00", avatar: "https://i.pravatar.cc/40?img=4" },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-green-600">FreshCart</h1>

        <nav className="space-y-2">
          <a className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"><LayoutDashboard size={20}/> Dashboard</a>
          <div className="mt-4 text-xs text-gray-400">Store Managements</div>
          <a className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"><ShoppingBag size={20}/> Products</a>
          <a className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"><List size={20}/> Categories</a>
          <div className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
            <span className="flex items-center gap-3"><List size={20}/> Orders</span>
            <ChevronDown size={18}/>
          </div>
          <a className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"><Users size={20}/> Sellers</a>
          <a className="flex items-center gap-3 p-2 bg-green-100 text-green-600 rounded-lg cursor-pointer"><Users size={20}/> Customers</a>
          <a className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"><Star size={20}/> Reviews</a>
        </nav>

        <div className="mt-4 text-xs text-gray-400">Site Settings</div>
        <a className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"><Settings size={20}/> Coming Soon</a>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3 w-1/3">
            <Search className="absolute ml-3 text-gray-500" size={18}/>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-9 border rounded-lg outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer" />
            <img src="https://i.pravatar.cc/40?img=6" alt="profile" className="w-10 h-10 rounded-full cursor-pointer" />
          </div>
        </div>

        {/* Search Customers*/}
        <input
          type="text"
          placeholder="Search Customers"
          className="w-full p-3 mb-6 border rounded-lg outline-none"
        />

        {/* Table */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-4"><input type="checkbox" /></th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Purchase Date</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Spent</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cust) => (
                <tr key={cust.id} className="border-t hover:bg-gray-50 transition-all">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4 flex items-center gap-3 font-medium">
                    <img src={cust.avatar} className="w-10 h-10 rounded-full object-cover" />
                    {cust.name}
                  </td>
                  <td className="p-4">{cust.email}</td>
                  <td className="p-4">{cust.purchase}</td>
                  <td className="p-4">{cust.phone}</td>
                  <td className="p-4">{cust.spent}</td>
                  <td className="p-4 text-right cursor-pointer"><MoreVertical /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}