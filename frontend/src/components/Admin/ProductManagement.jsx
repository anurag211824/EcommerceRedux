import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, fetchAdminProducts } from "../../redux/slices/AdminProductSlice";


const ProductManagement = () => {
  const dispatch = useDispatch()
  const {products,loading,error}  = useSelector((state)=>state.adminProducts)
  useEffect(()=>{
    dispatch(fetchAdminProducts())
  },[dispatch])
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you wnat to delete this product")) {
      console.log(productId);
      
      dispatch(deleteProduct(productId))
    }
  };
   if(loading){
    return <p>Loading.....</p>
  }
  if(error){
    return <p>Error:{error}</p>
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">SKU</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-medium">
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-6">{product._id}</td>
                  <td className="py-3 px-6">{product.name}</td>
                  <td className="py-3 px-6">{product.price}</td>
                  <td className="py-3 px-6">{product.sku}</td>
                  <td className="py-3 px-6 space-x-2">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
                      <Link to={`/admin/products/${product._id}/edit`}>
                        Edit
                      </Link>
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
