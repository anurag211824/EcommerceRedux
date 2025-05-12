import { useState, useEffect } from "react";
const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // simulate fetching orders
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "12346",
          createdAt: new Date(),
          shippingAddress: { city: "Los Angeles", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 120,
          isPaid: false,
        },
        {
          _id: "12347",
          createdAt: new Date(),
          shippingAddress: { city: "Chicago", country: "USA" },
          orderItems: [
            {
              name: "Product 3",
              image: "https://picsum.photos/500/500?random=3",
            },
          ],
          totalPrice: 90,
          isPaid: true,
        },
        {
          _id: "12348",
          createdAt: new Date(),
          shippingAddress: { city: "Houston", country: "USA" },
          orderItems: [
            {
              name: "Product 4",
              image: "https://picsum.photos/500/500?random=4",
            },
          ],
          totalPrice: 150,
          isPaid: false,
        },
        {
          _id: "12349",
          createdAt: new Date(),
          shippingAddress: { city: "Phoenix", country: "USA" },
          orderItems: [
            {
              name: "Product 5",
              image: "https://picsum.photos/500/500?random=5",
            },
          ],
          totalPrice: 75,
          isPaid: true,
        },
        {
          _id: "12350",
          createdAt: new Date(),
          shippingAddress: { city: "Philadelphia", country: "USA" },
          orderItems: [
            {
              name: "Product 6",
              image: "https://picsum.photos/500/500?random=6",
            },
          ],
          totalPrice: 110,
          isPaid: false,
        },

       
      ];
      setOrders(mockOrders);
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My-orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-scroll">
        <table className="min-w-full text-left text-gray-500 ">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3 text-sm font-medium">Image</th>
              <th className="px-6 py-3 text-sm font-medium">Order-ID</th>
              <th className="px-6 py-3 text-sm font-medium">Created</th>
              <th className="px-6 py-3 text-sm font-medium">
                Shipping Address
              </th>
              <th className="px-6 py-3 text-sm font-medium">Items</th>
              <th className="px-6 py-3 text-sm font-medium">Price</th>
              <th className="px-6 py-3 text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="border-b cursor-pointer hover:bg-gray-50">
                  <td className="px-2 py-2 sm:px-6 sm:py-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4">{order._id}</td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4">
                    {order.shippingAddress.city
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4">
                    {order.orderItems.length}
                  </td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4">
                    ${order.totalPrice.toFixed(2)}
                  </td>
                  <td className={`px-2 py-2 sm:px-6 sm:py-4 ${order.isPaid ? "text-green-600" : "text-red-600"}`}
                  >
                    {order.isPaid ? "Paid" : "Pending"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-4">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
