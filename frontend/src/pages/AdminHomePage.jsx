import { Link } from "react-router-dom";
const AdminHomePage = () => {
const orders = [
  {
    _id: 123123,
    user: {
      name: "Jhon Doe",
    },
    totalPrice: 110,
    status: "Processing",
  },
  {
    _id: 123124,
    user: {
      name: "Jane Smith",
    },
    totalPrice: 250,
    status: "Shipped",
  },
  {
    _id: 123125,
    user: {
      name: "Alice Johnson",
    },
    totalPrice: 75,
    status: "Delivered",
  },
  {
    _id: 123126,
    user: {
      name: "Bob Brown",
    },
    totalPrice: 300,
    status: "Cancelled",
  },
  {
    _id: 123127,
    user: {
      name: "Charlie Davis",
    },
    totalPrice: 180,
    status: "Processing",
  },
];

  return <div className="max-w-8xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Admin DashBoard</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-xl fontn-semibold">Revenue</h2>
            <p className="text-2xl">$10000</p>
        </div>
         <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-xl fontn-semibold">Total Orders</h2>
            <p className="text-2xl">200</p>
            <Link to="/admin/orders" className="text-blue-500 hover:underline">Mange Orders</Link>
        </div>
         <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-xl fontn-semibold">Revenue</h2>
            <p className="text-2xl">$10000</p>
            <Link to="/admin/products" className="text-blue-500 hover:underline">Mange Orders</Link>
        </div>
    </div>
    <div className="mt-6">
     <h2 className="text-2xl fomt-bold mb-4">Recent Orders</h2>
     <div className="overflow-x-auto">
      <table className="min-w-full text-left text-gray-500">
        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
                <th className="px-4 py-3">Order Id</th>
                <th className="px-4 py-3">User Id</th>
                <th className="px-4 py-3">Total Price</th>
                <th className="px-4 py-3">Status</th>
            </tr>
        </thead>
        <tbody>
            {orders.length >0 ? (
                orders.map((order)=>(
                    <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer">
                           <td className="p-4">{order._id}</td>
                        <td className="p-4">{order.user.name}</td>
                        <td className="p-4">{order.totalPrice}</td>
                        <td className="p-4">{order.status}</td>
                    </tr>
                ))
            ):(
                <tr>
                    <td colSpan={4} className="p-4 text-center text-gray-500">N</td>
                </tr>
            )}
        </tbody>
      </table>
     </div>
    </div>
  </div>;
};

export default AdminHomePage;
