import React, { useEffect } from "react";
import { clearError, getProduct } from "../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./cards/ProductCard";
import Loading from "./Loading";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";

const FeaturedProducts = () => {
  const { keyword } = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct(keyword));
  }, [dispatch, keyword, error, alert]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid pt-5 pb-3">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Featured Products</span>
          </h2>
          <div className="row px-xl-5">
            {products &&
              products.map((product) => (
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                  <ProductCard product={product} key={product._id} />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;
