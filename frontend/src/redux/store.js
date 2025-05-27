import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice.js";
import productReducer from "./slices/ProductSlice.js"
import cartReducer from "./slices/CartSlice"
import checkoutReducer from "./slices/CheckoutSlice.js"
import orderReducer from "./slices/OrderSlice.js"
import adminReducer from "./slices/AdminSlice.js"
const store = configureStore({
  reducer: {
    auth: authReducer,
    products:productReducer,
    cart:cartReducer,
    checkout:checkoutReducer,
    orders:orderReducer,
    admin:adminReducer,
  },
});

export default store;
