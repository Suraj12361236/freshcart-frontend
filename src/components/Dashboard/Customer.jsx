import React, { useState } from "react";

const customersData = [
  {
    name: "Bonnie Howe",
    email: "bonniehowe@gmail.com",
    date: "17 May, 2023 at 3:18pm",
    phone: "-",
    spent: "$49.00",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Judy Nelson",
    email: "judynelson@gmail.com",
    date: "27 April, 2023 at 2:47pm",
    phone: "435-239-6436",
    spent: "$490.00",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "John Mattox",
    email: "johnmattox@gmail.com",
    date: "27 April, 2023 at 2:47pm",
    phone: "347-424-9526",
    spent: "$29.00",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Wayne Rossman",
    email: "waynerossman@gmail.com",
    date: "27 April, 2023 at 2:47pm",
    phone: "-",
    spent: "$39.00",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Rhonda Pinson",
    email: "rhondapinson@gmail.com",
    date: "18 March, 2023 at 2:47pm",
    phone: "304-471-8451",
    spent: "$213.00",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    name: "Richard Shelton",
    email: "richardshelton@jourrapide.com",
    date: "12 March, 2023 at 9:47am",
    phone: "313-887-8495",
    spent: "$19.00",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
  },
];

export default function Customers() {
  const [search, setSearch] = useState("");

  const filtered = customersData.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-10 gap-3">
          <div>
            <h1 className="text-3xl font-bold">Customers</h1>
            <p className="text-gray-500">
              Dashboard / <span className="text-green-500 font-medium">Customers</span>
            </p>
          </div>

          <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600">
            + Add New Customer
          </button>
        </div>

        {/* Search box */}
        <div className="bg-white rounded-xl p-5 w-2xl mb-6">
          <input
            type="text"
            placeholder="Search Customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm text-left"> 
            <thead className="bg-gray-100 text-gray-600 ">
              <tr>
                <th className="py-3 px-4">
                  <input type="checkbox" />
                </th>
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Email</th>
                <th className="py-3 px-4 font-semibold">Purchase Date</th>
                <th className="py-3 px-4 font-semibold">Phone</th>
                <th className="py-3 px-4 font-semibold">Spent</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((c, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-300  hover:bg-gray-50 transition text-gray-700"
                >
                  <td className="py-3 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{c.name}</span>
                  </td>
                  <td className="py-3 px-4">{c.email}</td>
                  <td className="py-3 px-4">{c.date}</td>
                  <td className="py-3 px-4">{c.phone}</td>
                  <td className="py-3 px-4 font-semibold">{c.spent}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4 text-gray-600 border-t border-gray-300 ">
            <p>
              Showing {filtered.length} of {customersData.length} entries
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-400  rounded-md hover:bg-gray-100">
                Previous
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border  border-gray-400 rounded-md hover:bg-gray-100">
                2
              </button>
              <button className="px-4 py-2 border border-gray-400  rounded-md hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
