import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PayPalButton from "./PayPalButton";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Classic Jeans",
      size: "32",
      color: "Blue",
      price: 80,
      image: "https://picsum.photos/150?random=2",
    },
    {
      name: "Casual T-Shirt",
      size: "L",
      color: "White",
      price: 25,
      image: "https://picsum.photos/150?random=3",
    },
    {
      name: "Running Shoes",
      size: "9",
      color: "Gray",
      price: 95,
      image: "https://picsum.photos/150?random=4",
    },
  ],
  totalPrice: 120 + 80 + 25 + 95,
};

const CheckOut = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const [checkoutId, setCheckoutId] = useState(null);
  const handleCreateCheckOut = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };
  const handlePaymentSucesss = (details) => {
    console.log("Payment Sucessful", details);
    navigate("/order-confirmation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left-section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckOut}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              value="user@gmail.com"
              id="email"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input
                required
                type="text"
                id="firstName"
                className="w-full p-2 border rounded"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input
                required
                type="text"
                id="lastName"
                className="w-full p-2 border rounded"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700" htmlFor="city">
                City
              </label>
              <input
                required
                type="text"
                id="city"
                className="w-full p-2 border rounded"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="postalCode">
                Postal-Code
              </label>
              <input
                required
                type="text"
                id="postalCode"
                className="w-full p-2 border rounded"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full text-white bg-black py-3 rounded"
              >
                Continue to payment
              </button>
            ) : (
              <div className="text-lg mb-4">
                <h3>Pay with Paypal</h3>
                <PayPalButton
                  amount={100}
                  onSucess={handlePaymentSucesss}
                  onError={() => alert("PayMent Failed! try again")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* Right-section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4 ">Oder Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div className="text-md">
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size:{product.size}</p>
                  <p className="text-gray-500">Color:{product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
