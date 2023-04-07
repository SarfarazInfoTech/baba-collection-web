import React from "react";
import Backtotop from "../../components/Backtotop";
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import Featured from "../../components/Featured";
import FeaturedProducts from "../../components/FeaturedProducts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Offer from "../../components/Offer";
import RecentProducts from "../../components/RecentProducts";
import Topbar from "../../components/Topbar";
import Vendor from "../../components/Vendor";

const Home = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Carousel />
      <Featured />
      <Categories />
      <FeaturedProducts />
      <Offer />
      <RecentProducts />
      <Vendor />
      <Footer />
      <Backtotop />
    </>
  );
};

export default Home;
