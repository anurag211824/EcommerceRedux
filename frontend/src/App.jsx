import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import CheckOut from "./components/Cart/CheckOut";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrdersDetailsPage from "./pages/OrdersDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right"/>
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path ="/login" element = {<Login/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/collections/:collection" element={<CollectionPage/>}></Route>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path ="/order-confirmation" element={<OrderConfirmationPage/>}/>
            <Route path = "/order/:id" element = {<OrdersDetailsPage/>}/>
            <Route path="/my-orders" element={<MyOrdersPage/>}/>
          </Route>
          {/* Admin Layout */}
          <Route>
             <Route path="/admin" element={<AdminLayout/>}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
