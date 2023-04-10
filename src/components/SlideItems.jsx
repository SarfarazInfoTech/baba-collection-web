import React, { useState } from "react";
import Loading from "./Loading";

const SlideItems = ({ product, loading }) => {
  const [images, setImages] = useState(product.images);
  console.log(product.images, loading);

  return (
    <>
      <div className="col-lg-5 mb-30">
        <div
          id="product-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner bg-light">
            <div className="carousel-item active">
              <img className="w-100 h-100" src={{}} alt="Image" />
            </div>
            <div className="carousel-item">
              <img className="w-100 h-100" src={{}} alt="Image" />
            </div>
            <div className="carousel-item">
              <img className="w-100 h-100" src={{}} alt="Image" />
            </div>
            <div className="carousel-item">
              <img className="w-100 h-100" src={{}} alt="Image" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#product-carousel"
            data-slide="prev"
          >
            <i className="fa fa-2x fa-angle-left text-dark" />
          </a>
          <a
            className="carousel-control-next"
            href="#product-carousel"
            data-slide="next"
          >
            <i className="fa fa-2x fa-angle-right text-dark" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SlideItems;
