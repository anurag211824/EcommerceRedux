import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllOrders, updateOrderStatus } from "../../redux/slices/AdminOrderSlice";

const OrderManagement = () => {
 const dispatch = useDispatch()
 const naviagte = useNavigate()
 const {user}  = useSelector((state)=>state.auth)
 const {orders,loading,error} = useSelector((state)=>state.adminOrders)
 useEffect(()=>{
  if(!user || user.role !=="admin"){
    naviagte("/");
  }
  else{
    dispatch(fetchAllOrders())
  }
 },[dispatch,user,naviagte])

  const handleStatusChange = (orderId, newStatus) => {
   dispatch(updateOrderStatus({id:orderId,newStatus}))
  };
  if(loading){
    return <p>Loading.....</p>
  }
  if(error){
    return <p>Error:{error}</p>
  }
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
