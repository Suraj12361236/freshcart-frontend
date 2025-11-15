import React from 'react'



function Ordertable() {
    const orders = [
        {
            img: "https://via.placeholder.com/50",
            title: "Haldiram's Nagpur Aloo Bhujia",
            qty: "400g",
            order: "#14899",
            date: "March 5, 2023",
            items: 1,
            status: "Processing",
            amount: "$15.00",
        },
        {
            img: "https://via.placeholder.com/50",
            title: "Nutri Choise Biscuit",
            qty: "2 Pkt",
            order: "#14658",
            date: "July 9, 2023",
            items: 2,
            status: "Completed",
            amount: "$45.00",
        },
        {
            img: "https://via.placeholder.com/50",
            title: "Cadbury Dairy Milk 5 Star Bites",
            qty: "202 g",
            order: "#13778",
            date: "Oct 03, 2023",
            items: 4,
            status: "Completed",
            amount: "$99.00",
        },
        {
            img: "https://via.placeholder.com/50",
            title: "Onion Flavour Potato",
            qty: "100 g",
            order: "#13746",
            date: "March 5, 2023",
            items: 1,
            status: "Completed",
            amount: "$12.00",
        },
        {
            img: "https://via.placeholder.com/50",
            title: "Salted Instant Popcorn",
            qty: "500 g",
            order: "#13566",
            date: "July 9, 2023",
            items: 2,
            status: "Cancel",
            amount: "$6.00",
        },
        {
            img: "https://via.placeholder.com/50",
            title: "Blueberry Greek Yogurt",
            qty: "500 g",
            order: "#12094",
            date: "Oct 03, 2023",
            items: 4,
            status: "Completed",
            amount: "$18.00",
        },
    ];
    return (
        <div className="w-[80%] mx-auto p-5">
            <h1 className="text-3xl font-semibold mb-5">Your Orders</h1>


            <div className="w-full border rounded-lg overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-100 text-gray-600 font-semibold text-sm">
                        <tr>
                            <th className="py-4 px-4">Product</th>
                            <th className="py-4 px-4">Order</th>
                            <th className="py-4 px-4">Date</th>
                            <th className="py-4 px-4">Items</th>
                            <th className="py-4 px-4">Status</th>
                            <th className="py-4 px-4">Amount</th>
                        </tr>
                    </thead>


                    <tbody>
                        {orders.map((o, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-4 px-4 flex items-center gap-4">
                                    <img src={o.img} className="w-12 h-12 object-contain" />
                                    <div>
                                        <p className="font-medium">{o.title}</p>
                                        <p className="text-sm text-gray-500">{o.qty}</p>
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-gray-700">{o.order}</td>
                                <td className="py-4 px-4 text-gray-700">{o.date}</td>
                                <td className="py-4 px-4 text-gray-700">{o.items}</td>
                                <td className="py-4 px-4">
                                    <span
                                        className={`px-3 py-1 text-xs rounded-full font-semibold ${o.status === "Completed"
                                            ? "bg-green-100 text-green-600"
                                            : o.status === "Processing"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {o.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4 font-medium">{o.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ordertable
