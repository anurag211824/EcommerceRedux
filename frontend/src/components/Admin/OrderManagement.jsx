import { useState } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      _id: "67540ced3376121b361a0ed0",
      user: { name: "Admin User" },
      totalPrice: 199.96,
      status: "Processing",
    },
    {
      _id: "67540d3ca67b4a70e434e092",
      user: { name: "Admin User" },
      totalPrice: 40,
      status: "Processing",
    },
    {
      _id: "675bf2c6ca77bd83eefd7a1b",
      user: { name: "Admin User" },
      totalPrice: 39.99,
      status: "Processing",
    },
    {
      _id: "675c24b09b8827304bd50cc1",
      user: { name: "Admin User" },
      totalPrice: 39.99,
      status: "Processing",
    },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Order Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-6 py-3">ORDER ID</th>
              <th className="px-6 py-3">CUSTOMER</th>
              <th className="px-6 py-3">TOTAL PRICE</th>
              <th className="px-6 py-3">STATUS</th>
              <th className="px-6 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
             orders.length > 0 ? (orders.map((order, index) => (
              <tr key={order._id} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-800">#{order._id}</td>
                <td className="px-6 py-4 text-sm">{order.user.name}</td>
                <td className="px-6 py-4 text-sm">${order.totalPrice.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm">
                  <select
                    className="border border-gray-300 rounded px-2 py-1"
                    value={order.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                  >
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
                    onClick={() => handleStatusChange(index, "Delivered")}
                  >
                    Mark as Delivered
                  </button>
                </td>
              </tr>
            ))) : (<tr colSpan={5} className="px-6 py-4 text-center text-gray-500">No orders found</tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
