/// Freshcart Sellers Page — Exact match with detailed seller rows
// Features added as requested:
// - Sellers: BigBasket, Swiggy Instamart, Online Grocery Mart + examples
// - Columns: checkbox (before logo), logo, Seller Name (company + ID), Email, Phone, Products Count, Rating, Verified Icon, Status Badge, Since, Actions
// - Responsive, Tailwind classes, Lucide icons
// - Mock data and utility components included

import React, { useState } from 'react';
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Star,
  CheckCircle,
  MoreHorizontal
} from 'lucide-react';

const sellersSeed = [
  {
    id: 'S-1001',
    name: 'BigBasket',
    company: 'BigBasket Retail Pvt Ltd',
    logo: 'https://via.placeholder.com/48?text=BB',
    email: 'support@bigbasket.com',
    phone: '+91 98765 43210',
    status: 'Active',
    verified: true,
    rating: 4.6,
    products: 1240,
    since: '2019-03-12'
  },
  {
    id: 'S-1002',
    name: 'Swiggy Instamart',
    company: 'Swiggy Instamart Pvt Ltd',
    logo: 'https://via.placeholder.com/48?text=SI',
    email: 'instamart@swiggy.in',
    phone: '+91 91234 55667',
    status: 'Pending',
    verified: false,
    rating: 4.2,
    products: 890,
    since: '2020-07-05'
  },
  {
    id: 'S-1003',
    name: 'Online Grocery Mart',
    company: 'OGM Online Pvt Ltd',
    logo: 'https://via.placeholder.com/48?text=OG',
    email: 'hello@oggmart.com',
    phone: '+91 90123 44556',
    status: 'Disabled',
    verified: false,
    rating: 3.8,
    products: 432,
    since: '2018-11-21'
  },
  {
    id: 'S-1004',
    name: 'Green Farm',
    company: 'Green Farm Produce',
    logo: 'https://via.placeholder.com/48?text=GF',
    email: 'contact@greenfarm.com',
    phone: '+91 99812 34567',
    status: 'Active',
    verified: true,
    rating: 4.9,
    products: 320,
    since: '2021-01-30'
  }
];

function RatingStars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} size={14} />
      ))}
      {half && <Star size={14} />}
      {Array.from({ length: total - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e${i}`} size={14} className="opacity-30" />
      ))}
      <span className="text-xs text-slate-500 ml-2">{value.toFixed(1)}</span>
    </div>
  );
}

export default function FreshcartSellers() {
  const [sellers, setSellers] = useState(sellersSeed);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);

  const filtered = sellers.filter((s) => {
    const q = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.company.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      s.phone.includes(q) ||
      s.id.toLowerCase().includes(q)
    );
  });

  const toggle = (id) => {
    setSelected((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  };

  const toggleAll = (checked) => {
    if (checked) setSelected(filtered.map((s) => s.id));
    else setSelected([]);
  };

  const deleteSeller = (id) => {
    if (!confirm('Delete seller ' + id + ' ?')) return;
    setSellers((p) => p.filter((s) => s.id !== id));
    setSelected((p) => p.filter((x) => x !== id));
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-white shadow p-4 border-r">
        <div className="text-xl font-bold mb-4">FreshCart</div>
        <nav className="space-y-3 text-gray-600">
          <div className="hover:text-green-600">Dashboard</div>
          <div className="hover:text-green-600">Products</div>
          <div className="hover:text-green-600">Orders</div>
          <div className="text-green-600 font-semibold">Sellers</div>
        </nav>
      </aside>

      <div className="flex-1">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white p-4 border-b">
          <h2 className="text-lg font-semibold">Sellers</h2>

          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-lg px-3 py-1">
              <Search size={16} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search sellers by name, id or email"
                className="ml-2 outline-none text-sm"
              />
            </div>

            <button className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-md">
              <Plus size={16} /> Add Seller
            </button>
          </div>
        </header>

        <main className="p-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600">Showing {filtered.length} sellers</div>
              <div className="flex items-center gap-2">
                <select className="border rounded px-2 py-1 text-sm">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Disabled</option>
                </select>
                <button className="px-3 py-1 border rounded text-sm">Export</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-gray-500 bg-gray-50">
                  <tr>
                    <th className="p-3"><input type="checkbox" onChange={(e) => toggleAll(e.target.checked)} checked={selected.length === filtered.length && filtered.length > 0} /></th>
                    <th className="p-3 text-left">Seller</th>
                    <th className="p-3 text-left">Contact</th>
                    <th className="p-3 text-left">Products</th>
                    <th className="p-3 text-left">Rating</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Since</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((s) => (
                    <tr key={s.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 align-middle text-center">
                        <input type="checkbox" checked={selected.includes(s.id)} onChange={() => toggle(s.id)} />
                      </td>

                      <td className="p-3 flex items-center gap-3">
                        <img src={s.logo} alt={s.name} className="w-12 h-12 rounded-md object-cover" />
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="font-medium">{s.name}</div>
                            {s.verified && <CheckCircle size={16} className="text-green-600" />}
                          </div>
                          <div className="text-xs text-slate-500">{s.company} • <span className="font-mono">{s.id}</span></div>
                        </div>
                      </td>

                      <td className="p-3">
                        <div className="text-sm">{s.email}</div>
                        <div className="text-xs text-slate-500">{s.phone}</div>
                      </td>

                      <td className="p-3">
                        <div className="font-semibold">{s.products}</div>
                        <div className="text-xs text-slate-500">items</div>
                      </td>

                      <td className="p-3"><RatingStars value={s.rating} /></td>

                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${s.status === 'Active' ? 'bg-green-100 text-green-800' : s.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-rose-100 text-rose-800'}`}>
                          {s.status}
                        </span>
                      </td>

                      <td className="p-3">{s.since}</td>

                      <td className="p-3 flex items-center gap-2">
                        <button title="View" className="p-2 rounded hover:bg-gray-100"><Eye size={16} /></button>
                        <button title="Edit" className="p-2 rounded hover:bg-gray-100"><Pencil size={16} /></button>
                        <button title="Delete" onClick={() => deleteSeller(s.id)} className="p-2 rounded hover:bg-gray-100 text-rose-600"><Trash2 size={16} /></button>
                        <button className="p-2 rounded hover:bg-gray-100"><MoreHorizontal size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination small (static) */}
            <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
              <div>Showing 1 to {filtered.length} of {sellers.length} entries</div>
              <div className="space-x-2">
                <button className="px-3 py-1 border rounded hover:bg-gray-100">Prev</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
