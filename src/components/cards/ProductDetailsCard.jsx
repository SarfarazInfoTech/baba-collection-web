import React from "react";
import Carousel from "react-material-ui-carousel";
import ReactStars from "react-rating-stars-component";

const ProductDetailsCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgb(20, 20, 20, 0.1)",
    activeColor: " #FFD333",
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };
  return (
    <div className="row px-xl-5">
      <div className="col-lg-5 mb-30">
        <Carousel height={"65vh"}>
          {product.images &&
            product.images.map((item, i) => (
              <img
                key={i}
                className="w-100 h-100"
                src={item.url}
                alt={`${i} Slide`}
              />
            ))}
        </Carousel>
      </div>
      <div className="col-lg-7 h-auto mb-30">
        <div className="h-100 bg-light p-30">
          <h3>{product.name}</h3>
          <div className="d-flex mb-3">
            <div className="text-primary mr-2">
              <ReactStars {...options} value={product.ratings} />
            </div>
            <small className="pt-2">({product.numOfReviews})</small>
          </div>
          <h3 className="font-weight-semi-bold mb-4">₹ {product.price}</h3>
          <p className={`mb-4 ${product.stock < 1 ? "text-danger" : null}`}>
            {product.stock < 1 ? <b>Out Of Stock</b> : product.description}
          </p>
          <div className="d-flex mb-3">
            <strong className="text-dark mr-3">Sizes:</strong>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-1"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-1">
                  XS
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-2"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-2">
                  S
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-3"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-3">
                  M
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-4"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-4">
                  L
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-5"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-5">
                  XL
                </label>
              </div>
            </form>
          </div>
          <div className="d-flex mb-4">
            <strong className="text-dark mr-3">Colors:</strong>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-1"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-1">
                  Black
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-2"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-2">
                  White
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-3"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-3">
                  Red
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-4"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-4">
                  Blue
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-5"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-5">
                  Green
                </label>
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center mb-4 pt-2">
            <div
              className="input-group quantity mr-3"
              style={{ width: "130px" }}
            >
              <div className="input-group-btn">
                <button className="btn btn-primary btn-minus">
                  <i className="fa fa-minus" />
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-secondary border-0 text-center"
                defaultValue={1}
              />
              <div className="input-group-btn">
                <button className="btn btn-primary btn-plus">
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
            <a href="/cart" className="btn btn-primary px-3">
              <i className="fa fa-shopping-cart mr-1" /> Add To Cart
            </a>
          </div>
          <div className="d-flex pt-2">
            <strong className="text-dark mr-2">Share on:</strong>
            <div className="d-inline-flex">
              <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
