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
import ForgotPassword from "../pages/password/ForgotPassword";
import UpdateProfile from "../pages/profile/UpdateProfile";
import Login from "../pages/users/Login";
import Signup from "../pages/users/Signup";
import ShopDetails from "../pages/vender/ShopDetails";
import VendorRegistration from "../pages/vender/VendorRegistration";

const authProtectedRoutes = [
  { path: "/edit-profile", component: <UpdateProfile /> },
  { path: "/order-history", component: <OrderHistory /> },
  { path: "/help-center", component: <OrderHistory /> },
  { path: "/Checkout", component: <Checkout /> },
  { path: "/thankyou", component: <Thankyou /> },
];

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Signup /> },
  { path: "/products", component: <Products /> },
  { path: "/Products/:keyword", component: <Products /> },
  { path: "/Product/:id", component: <ProductDetails /> },
  // { path: "/ProductDetails", component: <ProductDetails /> },
  { path: "/ShopDetails", component: <ShopDetails /> },
  { path: "/Cart", component: <Cart /> },
  { path: "/Contact", component: <Contact /> },
  { path: "/About", component: <About /> },
  { path: "/VendorRegistration", component: <VendorRegistration /> },
  { path: "/password/forgot", component: <ForgotPassword /> },
];

export { authProtectedRoutes, publicRoutes };
