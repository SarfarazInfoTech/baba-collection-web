import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgb(20, 20, 20, 0.1)",
    activeColor: "#FFD333",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };
  return (
    <div className="product-item bg-light mb-4">
      <div
        className="product-img position-relative overflow-hidden"
        style={{ height: "300px" }}
      >
        <img
          className="img-fluid w-100 h-100"
          src={product.images[0].url}
          alt=""
        />
        <div className="product-action">
          <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
          </a>
          <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
          </a>
          <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
          </a>
          <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
          </a>
        </div>
      </div>
      <div className="text-center py-4">
        <a className="h6 text-decoration-none d-inline-block text-truncate " style={{maxWidth: "300px"}} href={`/${product._id}`}>
          {product.name}
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <h5>₹ {product.price}</h5>
          <h6 className="text-muted ml-2">
            <del>{product.price - 100}₹</del>
          </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
          <ReactStars {...options} />
          <small>({product.numOfReviews})</small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
