import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../../redux/slices/ProductSlice";
import { updateProduct } from "../../redux/slices/AdminProductSlice";
import axios from "axios"
const EditProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [],
  });
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);
  useEffect(() => {
    if (selectedProduct) {
      setProductData(selectedProduct);
    }
  }, [selectedProduct]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newProduct = { ...productData, [name]: value };
    setProductData(newProduct);
    console.log(newProduct);
    //setProductData((prev)=>({...prev,[name]:value}))
  };
  const handleImageUpload = async (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    console.log("Selected file:", files);

    formData.append("image", files);
    try {
      setUploading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: data.imageUrl, altText: "" }],
      }));
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({id,productData}))
    navigate("/admin/products")
  };
    if(loading){
    return <p>Loading.....</p>
  }
  if(error){
    return <p>Error:{error}</p>
  }
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block font-semibold mb-2">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>
        {/* Price */}
        <div className="mb-6">
          <label htmlFor="price" className="block font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Count in Stock */}
        <div className="mb-6">
          <label htmlFor="countInStock" className="block font-semibold mb-2">
            Count In Stock
          </label>
          <input
            type="number"
            name="countInStock"
            id="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* SKU */}
        <div className="mb-6">
          <label htmlFor="sku" className="block font-semibold mb-2">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            id="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Sizes */}
        <div className="mb-6">
          <label htmlFor="sizes" className="block font-semibold mb-2">
            Sizes (comma-seprated)
          </label>
          <input
            type="text"
            name="sizes"
            id="sizes"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Colors */}
        <div className="mb-6">
          <label htmlFor="colors" className="block font-semibold mb-2">
            Colors (comma-seprated)
          </label>
          <input
            type="text"
            name="colors"
            id="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Image Upload */}
        <div className="mb-6">
          <label htmlFor="image" className="block font-semibold mb-2">
            Upload Image
          </label>
          <input
            className="w-full border border-gray-700 rounded-md p-2"
            type="file"
            onChange={handleImageUpload}
          />
          {uploading && <p>Uploading Image</p>}
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                  src={image.url}
                  alt={image.altText || "Product Image"}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors cursor-pointer"
          type="submit"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
