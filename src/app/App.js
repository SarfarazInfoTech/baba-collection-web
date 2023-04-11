import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/en/Home";
import Products from "../pages/en/Products";
import ProductDetails from "../pages/en/ProductDetails";
import Checkout from "../pages/en/Checkout";
import Contact from "../pages/en/Contact";
import Cart from "../pages/en/Cart";
import About from "../pages/en/About";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminSignup from "../pages/admin/AdminSignup";
import AdminDashboard from "../pages/admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* End-User */}
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="Products/:keyword" element={<Products />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/Product/:id" element={<ProductDetails />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

        {/* Admin-user */}
        <Route path="/Admin-Login" element={<AdminLogin />} />
        <Route path="/Admin-Signup" element={<AdminSignup />} />
        <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
