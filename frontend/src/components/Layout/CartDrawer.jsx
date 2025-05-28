import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
 
  
  
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;
  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Flex container for drawer content */}
      <div className="flex flex-col h-full">
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleCartDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Cart Drawer Content (scrollable) */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {cart && cart?.products?.length > 0 ? (
            <CartContent cart={cart} userId={userId} guestId={guestId} />
          ) : (
            <p>Your Cart is empty</p>
          )}
        </div>

        {/* Checkout button (sticky at the bottom) */}
        <div className="p-4 bg-white border-t">
          {cart && cart?.products?.length > 0 && (
            <>
              <button
                className="w-full bg-black text-white py-2 rounded-md mb-2"
                onClick={() => handleCheckout}
              >
                Checkout
              </button>
              <p className="text-sm text-gray-500 tracking-tighter">
                Shipping, taxes, and discount codes calculated at checkout.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
