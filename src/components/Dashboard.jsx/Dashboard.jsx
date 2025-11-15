import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Bell, Lightbulb } from "lucide-react";

const data = [
  { name: "Jan", income: 30, expense: 80 },
  { name: "Feb", income: 40, expense: 30 },
  { name: "Mar", income: 28, expense: 40 },
  { name: "Apr", income: 50, expense: 80 },
  { name: "May", income: 42, expense: 32 },
  { name: "Jun", income: 67, expense: 45 },
  { name: "Jul", income: 100, expense: 38 },
];

const pieData = [
  { name: "Shippings", value: 32.98, color: "#22c55e" },
  { name: "Refunds", value: 11.0, color: "#facc15" },
  { name: "Order", value: 14.87, color: "#ef4444" },
  { name: "Income", value: 12.0, color: "#2563eb" },
];

const recentOrders = [
  { id: "#001", customer: "John Doe", date: "Nov 10, 2025", amount: "$120.00", status: "Delivered" },
  { id: "#002", customer: "Jane Smith", date: "Nov 09, 2025", amount: "$85.00", status: "Pending" },
  { id: "#003", customer: "Mark Lee", date: "Nov 08, 2025", amount: "$220.00", status: "Cancelled" },
  { id: "#004", customer: "Sara Khan", date: "Nov 07, 2025", amount: "$150.00", status: "Delivered" },
];

function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="bg-[url('/src/images/dashboardslider.jpg')] bg-cover bg-center bg-no-repeat w-full p-8 rounded-2xl flex justify-between items-center h-64">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome back! FreshCart
          </h1>
          <p className="text-gray-700 mt-2">
            FreshCart is simple & clean design for developer and designer.
          </p>
          <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg">
            Create Product
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-8">
          <h2 className="text-gray-500 text-sm">Earnings</h2>
          <p className="text-3xl font-bold mt-2">$93,438.78</p>
          <p className="text-sm text-gray-400 mt-1">Monthly revenue</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-8">
          <h2 className="text-gray-500 text-sm">Orders</h2>
          <p className="text-3xl font-bold mt-2">42,339</p>
          <p className="text-sm text-gray-400 mt-1">35+ new sales</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-8">
          <h2 className="text-gray-500 text-sm">Customers</h2>
          <p className="text-3xl font-bold mt-2">39,354</p>
          <p className="text-sm text-gray-400 mt-1">30+ new in 2 days</p>
        </div>
      </div>

      {/* Revenue Chart + Total Sales Section */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-2xl shadow-md w-full">
        {/* Left Chart */}
        <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">Revenue</h2>
              <p className="text-sm text-gray-500">(+63%) than last year</p>
            </div>
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="incomeColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expenseColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#facc15" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#22c55e"
                fill="url(#incomeColor)"
                strokeWidth={3}
              />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#facc15"
                fill="url(#expenseColor)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="flex justify-center gap-6 text-sm mt-2">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span> Total Income
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span> Total Expense
            </div>
          </div>
        </div>

        {/* Right Pie Chart */}
        <div className="w-full md:w-1/3 bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center relative">
          <h2 className="text-lg font-semibold mb-2">Total Sales</h2>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute text-center top-[45%]">
            <p className="text-gray-500 text-sm">Total Sales</p>
            <p className="text-2xl font-bold">9600</p>
          </div>

          <div className="mt-4 text-sm space-y-1">
            {pieData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.name} ${item.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 📊 Sales Overview + 🔔 Notifications (Flex Layout) */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sales Overview */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-6">Sales Overview</h2>
          <div className="space-y-4">
            {[
              { title: "Total Revenue", percent: 80, color: "bg-green-500" },
              { title: "Total Profit", percent: 60, color: "bg-blue-500" },
              { title: "Total Expenses", percent: 40, color: "bg-red-500" },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                  <span>{item.title}</span>
                  <span>{item.percent}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className={`${item.color} h-2.5 rounded-full`}
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition">
            <div className="text-yellow-500 text-3xl">
              <Bell />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800 text-lg">
                Start your day with New Notification.
              </h2>
              <p className="text-gray-600 text-sm">
                You have{" "}
                <span className="text-blue-600 font-medium">
                  2 new notification
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition">
            <div className="text-green-600 text-3xl">
              <Lightbulb />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800 text-lg">
                Monitor your Sales and Profitability
              </h2>
              <p className="text-gray-600 text-sm">
                You have{" "}
                <span className="text-blue-600 font-medium">
                  View Performance
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 📋 Orders Table Section */}
      <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Orders Table</h3>
          <div className="text-sm text-slate-500">Showing latest 10 orders</div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y">
            <thead className="text-slate-500  border-gray-300">
              <tr>
                <th className="py-3 text-left">Order</th>
                <th className="py-3 text-left">Customer</th>
                <th className="py-3 text-left">Date</th>
                <th className="py-3 text-left">Amount</th>
                <th className="py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {recentOrders.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 border-gray-300">
                  <td className="py-3">{r.id}</td>
                  <td className="py-3">{r.customer}</td>
                  <td className="py-3">{r.date}</td>
                  <td className="py-3">{r.amount}</td>
                  <td className="py-3">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
