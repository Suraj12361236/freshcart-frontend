import React from "react";
import { Search, MoreVertical, Bell, ChevronDown, LayoutDashboard, ShoppingBag, List, Users, Star, Settings } from "lucide-react";

export default function OrderListPage() {
  const orders = [
    {
      id: "#FC001",
      image: "https://via.placeholder.com/48",
      orderName: "Fresh Organic Apples",
      customer: "Bonnie Howe",
      dateTime: "27 April, 2023 at 2:47pm",
      payment: "Paid",
      status: "Delivered",
      amount: "$49.00",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: "#FC002",
      image: "https://via.placeholder.com/48",
      orderName: "Daily Milk Bread",
      customer: "Judy Nelson",
      dateTime: "22 March, 2023 at 4:20pm",
      payment: "COD",
      status: "Pending",
      amount: "$29.00",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: "#FC003",
      image: "https://via.placeholder.com/48",
      orderName: "Amul Cheese Pack",
      customer: "John Mattox",
      dateTime: "19 March, 2023 at 9:10am",
      payment: "Paid",
      status: "Canceled",
      amount: "$19.00",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ];

  const statusStyles = {
    Delivered: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Canceled: "bg-red-100 text-red-600",
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-72">
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18}/>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-9 border rounded-lg outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer" />
            <img src="https://i.pravatar.cc/40?img=6" className="w-10 h-10 rounded-full" />
          </div>
        </div>

        {/* Order Table */}
        <h2 className="text-xl font-bold mb-4">Order List</h2>

        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Order Name</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Status</th>
                <th className="p-4">Amount</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50 transition-all">
                  <td className="p-4"><img src={order.image} className="w-12 h-12 rounded-lg" /></td>
                  <td className="p-4 font-medium">{order.orderName}</td>
                  <td className="p-4 flex items-center gap-3 font-medium">
                    <img src={order.avatar} className="w-10 h-10 rounded-full" />
                    {order.customer}
                  </td>
                  <td className="p-4 text-gray-600">{order.dateTime}</td>
                  <td className="p-4">{order.payment}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 font-semibold">{order.amount}</td>
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