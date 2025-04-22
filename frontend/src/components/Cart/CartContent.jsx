import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Product 1",
      size: "M",
      color: "Red",
      price: 29.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Product 2",
      size: "M",
      color: "Blue",
      price: 29.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 3,
      name: "Product 3",
      size: "M",
      color: "Black",
      price: 29.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
  ];
  return (
    <div>
      {cartProducts.map((product) => {
        const { productId, name, size, color, quantity, image ,price} = product;
        return (
          <div
            key={productId}
            className="flex items-start justify-between py-4 border-b">
            <div className="flex items-start">
              <img
                src={image}
                alt={name}
                className="w-20 h-24 object-cover mr-4 rounded"
              />
              <div>
                <h3>{name}</h3>
                <p className="text-sm text-gray-500">
                  size:{size} | color:{color}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
                <p>$ {price.toLocaleString()}</p>
                <button>
                    <RiDeleteBin3Line className="h-6 w-6 text-gray-700 hover:text-red-500" />
                </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartContent;
