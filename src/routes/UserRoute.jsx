import React from "react";
import About from "../pages/en/About";
import Cart from "../pages/en/Cart";
import Checkout from "../pages/en/Checkout";
import Contact from "../pages/en/Contact";
import Home from "../pages/en/Home";
import ProductDetails from "../pages/en/ProductDetails";
import Products from "../pages/en/Products";
import Thankyou from "../pages/en/Thankyou";
import OrderHistory from "../pages/orders/OrderHistory";
import UpdateProfile from "../pages/profile/UpdateProfile";
import Login from "../pages/users/Login";
import Signup from "../pages/users/Signup";
import ShopDetails from "../pages/vender/ShopDetails";
import VendorRegistration from "../pages/vender/VendorRegistration";

{
  /* <Routes>
  <Route path="/Admin-Login" element={<AdminLogin />} />
  <Route path="/Admin-Signup" element={<AdminSignup />} />
  <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
</Routes> */
}

const authProtectedRoutes = [
  { path: "/edit-profile", component: <UpdateProfile /> },
  { path: "/order-history", component: <OrderHistory /> },
  { path: "/help-center", component: <OrderHistory /> },
];

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Signup /> },
  { path: "/products", component: <Products /> },
  { path: "/Products/:keyword", component: <Products /> },
  { path: "/Product/:id", component: <Products /> },
  { path: "/ProductDetails", component: <ProductDetails /> },
  { path: "/ShopDetails", component: <ShopDetails /> },
  { path: "/Checkout", component: <Checkout /> },
  { path: "/Cart", component: <Cart /> },
  { path: "/Contact", component: <Contact /> },
  { path: "/About", component: <About /> },
  { path: "/thankyou", component: <Thankyou /> },
  { path: "/VendorRegistration", component: <VendorRegistration /> },
];

export { authProtectedRoutes, publicRoutes };
