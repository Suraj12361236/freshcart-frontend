


      // freshcart-dashboard.jsx
// React + Tailwind dashboard component (single-file)
// Usage:
// 1. Place this file in your React project (e.g. src/components/FreshcartDashboard.jsx)
// 2. Ensure Tailwind is configured and these packages are installed:
//    npm install recharts framer-motion lucide-react
// 3. Import and render <FreshcartDashboard /> inside your routes or App.jsx

import React, { useState } from "react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { motion } from "framer-motion";
import { ShoppingCart, Users, Package, Layers } from "lucide-react";

const stats = [
  { id: 1, icon: <ShoppingCart size={20} />, label: "Orders", value: "1,256", change: "+6.2%" },
  { id: 2, icon: <Users size={20} />, label: "Customers", value: "8,421", change: "+2.1%" },
  { id: 3, icon: <Package size={20} />, label: "Products", value: "1,049", change: "-0.8%" },
  { id: 4, icon: <Layers size={20} />, label: "Revenue", value: "₹12.4L", change: "+4.9%" },
];

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4200 },
  { name: "May", sales: 5500 },
  { name: "Jun", sales: 6200 },
  { name: "Jul", sales: 7000 },
  { name: "Aug", sales: 6800 },
  { name: "Sep", sales: 7500 },
  { name: "Oct", sales: 8200 },
];

const recentOrders = [
  { id: "#FD-1021", customer: "Rohit Sharma", date: "2025-10-20", amount: "₹1,299", status: "Delivered" },
  { id: "#FD-1022", customer: "Priya Verma", date: "2025-10-21", amount: "₹2,499", status: "Preparing" },
  { id: "#FD-1023", customer: "Amit Singh", date: "2025-10-22", amount: "₹699", status: "Out for delivery" },
  { id: "#FD-1024", customer: "Kavya Joshi", date: "2025-10-23", amount: "₹4,199", status: "Cancelled" },
];

export default function FreshcartDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <div className="flex">
        {/* SIDEBAR */}
        <aside className={`fixed z-20 inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white border-r shadow-sm` }>
          <div className="h-full flex flex-col">
            <div className="px-6 py-5 flex items-center gap-3 border-b">
              <div className="h-9 w-9 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">F</div>
              <div>
                <div className="text-lg font-semibold">Freshcart</div>
                <div className="text-sm text-slate-500">Admin Dashboard</div>
              </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1 overflow-auto">
              <a className="group flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3a1 1 0 01.894.553L12 5h4a1 1 0 011 1v9a1 1 0 01-1 1h-3v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4H5a1 1 0 01-1-1V6a1 1 0 011-1h4l1.106-1.447A1 1 0 0110 3z" /></svg>
                <span className="text-sm font-medium">Dashboard</span>
              </a>

              <a className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path d="M4 3a1 1 0 000 2h12a1 1 0 100-2H4zM3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM2 11a1 1 0 011-1h12a1 1 0 110 2H3a1 1 0 01-1-1zM3 15a1 1 0 100 2h12a1 1 0 100-2H3z"/></svg>
                <span className="text-sm font-medium">Products</span>
              </a>

              <a className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 16a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"/></svg>
                <span className="text-sm font-medium">Orders</span>
              </a>

              <a className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 00-1 1v1H4a1 1 0 000 2h5v1a1 1 0 102 0V6h5a1 1 0 100-2h-5V3a1 1 0 00-1-1z"/></svg>
                <span className="text-sm font-medium">Customers</span>
              </a>

            </nav>

            <div className="px-4 py-4 border-t">
              <button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
                <img src="https://i.pravatar.cc/40" alt="avatar" className="h-8 w-8 rounded-full" />
                <div className="text-left">
                  <div className="text-sm font-medium">Laxmi Yadav</div>
                  <div className="text-xs text-slate-500">Admin</div>
                </div>
              </button>
            </div>
          </div>
        </aside>

        {/* CONTENT AREA */}
        <div className="flex-1 md:pl-64 w-full">
          <header className="sticky top-0 z-10 bg-white border-b">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <button className="md:hidden p-2 rounded-md bg-gray-100" onClick={() => setSidebarOpen(v => !v)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                <h1 className="text-xl font-semibold">Overview</h1>
                <div className="ml-4 text-sm text-slate-500">Welcome back — here's what's happening with your store.</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 border rounded-lg px-3 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 14s2-2 6-2 6 2 6 2v2H2v-2z" /></svg>
                  <span className="text-sm">Hi, Laxmi</span>
                </div>
                <button className="p-2 rounded-md hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z" /></svg>
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100">
                  <img src="https://i.pravatar.cc/36" alt="me" className="h-8 w-8 rounded-full" />
                </button>
              </div>
            </div>
          </header>

          <main className="p-6">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map(s => (
                  <div key={s.id} className="bg-white p-4 rounded-2xl shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">{s.icon}</div>
                        <div>
                          <div className="text-sm text-slate-500">{s.label}</div>
                          <div className="text-lg font-semibold">{s.value}</div>
                        </div>
                      </div>
                      <div className={`text-sm font-medium ${s.change.startsWith("+") ? "text-green-600" : "text-rose-600"}`}>{s.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CHARTS & ORDERS */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-4 rounded-2xl shadow-sm border">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h2 className="text-lg font-semibold">Sales (last 12 months)</h2>
                      <p className="text-sm text-slate-500">Monthly revenue overview</p>
                    </div>
                    <div className="text-sm text-slate-500">Updated: Oct 26, 2025</div>
                  </div>

                  <div style={{ width: "100%", height: 260 }}>
                    <ResponsiveContainer width="100%" height={260}>
                      <AreaChart data={salesData} margin={{ top: 0, left: -10, right: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopOpacity={0.25} />
                            <stop offset="95%" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sales" stroke="#6366F1" fillOpacity={1} fill="url(#colorSales)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border">
                  <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
                  <div className="space-y-3">
                    {recentOrders.map(o => (
                      <div key={o.id} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                        <div>
                          <div className="text-sm font-medium">{o.customer}</div>
                          <div className="text-xs text-slate-500">{o.id} • {o.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{o.amount}</div>
                          <div className={`text-xs ${o.status === 'Delivered' ? 'text-green-600' : o.status === 'Cancelled' ? 'text-rose-600' : 'text-amber-600'}`}>{o.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TABLE */}
              <div className="mt-6 bg-white p-4 rounded-2xl shadow-sm border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Orders table</h3>
                  <div className="text-sm text-slate-500">Showing latest 10 orders</div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm divide-y">
                    <thead className="text-slate-500">
                      <tr>
                        <th className="py-3 text-left">Order</th>
                        <th className="py-3 text-left">Customer</th>
                        <th className="py-3 text-left">Date</th>
                        <th className="py-3 text-left">Amount</th>
                        <th className="py-3 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {recentOrders.map(r => (
                        <tr key={r.id} className="hover:bg-gray-50">
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

            </motion.div>
          </main>

          <footer className="p-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Freshcart · Built with ♥</footer>
        </div>
      </div>
    </div>
  );
}

  


