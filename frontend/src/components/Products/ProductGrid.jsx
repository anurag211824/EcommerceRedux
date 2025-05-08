import {Link} from "react-router-dom"
import PropTypes from "prop-types";

const ProductGrid = ({ products }) => {
  return (
    <div className="max-w-[1350px] mx-auto gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images[0]?.url ?? "fallback-image-url.jpg"}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          altText: PropTypes.string,
        })
      ),
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};



export default ProductGrid;