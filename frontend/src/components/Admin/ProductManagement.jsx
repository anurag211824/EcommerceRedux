import { Link } from "react-router-dom";
const products = [
  {
    _id: 1,
    name: "Printed Resort Shirt",
    price: "$29.99",
    sku: "PRNT-RES-004",
  },
  { _id: 2, name: "Chino Pants", price: "$55", sku: "BW-005" },
  { _id: 3, name: "Cargo Pants", price: "$50", sku: "BW-008" },
  {
    _id: 4,
    name: "Long-Sleeve Thermal Tee",
    price: "$27.99",
    sku: "LST-THR-009",
  },
  { _id: 5, name: "Pleated M_idi Skirt", price: "$55", sku: "BW-W-004" },
  { _id: 6, name: "Graphic Print Tee", price: "$30", sku: "TW-W-006" },
  { _id: 7, name: "Ribbed Long-Sleeve Top", price: "$55", sku: "TW-W-007" },
  {
    _id: 8,
    name: "Slim-Fit Stretch Shirt",
    price: "$29.99",
    sku: "SLIM-SH-002",
  },
  { _id: 9, name: "Cargo Joggers", price: "$45", sku: "BW-002" },
  { _id: 10, name: "Off-Shoulder Top", price: "$45", sku: "TW-W-004" },
  {
    _id: 11,
    name: "Slim-Fit Easy-Iron Shirt",
    price: "$34.99",
    sku: "SLIM-EIR-005",
  },
  { _id: 12, name: "Tapered Sweatpants", price: "$35", sku: "BW-003" },
];

const ProductManagement = () => {
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you wnat to delete this product")) {
      console.log(productId, "product getting deleted");
    }
  };
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
