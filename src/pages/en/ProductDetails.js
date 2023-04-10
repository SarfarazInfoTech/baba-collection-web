import React, { useEffect, useState } from "react";
import Backtotop from "../../components/Backtotop";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SlideItems from "../../components/SlideItems";
import Topbar from "../../components/Topbar";
import { getProductDetails } from "../../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Carousel from "react-material-ui-carousel";

const ProductDetails = () => {
  const [active, setActive] = useState("Description");
  const { id } = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  // useEffect(() => {
  //   function getRandomItem(arr) {
  //     const randomIndex = Math.floor(Math.random() * arr.length);
  //     const item = arr[randomIndex];
  //     return item;
  //   }
  //   const array = [1, 2, 3, 0];
  //   const result = getRandomItem(array);
  //   console.log(result);
  // }, []);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);

  const options = {
    edit: false,
    color: "rgb(20, 20, 20, 0.1)",
    activeColor: "#FFD333",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };

  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb item1="Home" item2="Shop" item3="Shop Detail" />
      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid pb-5">
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
                    <ReactStars {...options} />
                  </div>
                  <small className="pt-2">({product.numOfReviews})</small>
                </div>
                <h3 className="font-weight-semi-bold mb-4">
                  ₹ {product.price}
                </h3>
                <p className="mb-4">{product.description}</p>
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
                  <button className="btn btn-primary px-3">
                    <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                  </button>
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
          <div className="row px-xl-5">
            <div className="col">
              <div className="bg-light p-30">
                <div className="nav nav-tabs mb-4">
                  <a
                    className={`nav-item nav-link text-dark ${
                      active === "Description" ? "active" : null
                    }`}
                    data-toggle="tab"
                    onClick={() => setActive("Description")}
                  >
                    Description
                  </a>
                  <a
                    className={`nav-item nav-link text-dark ${
                      active === "Information" ? "active" : null
                    }`}
                    data-toggle="tab"
                    onClick={() => setActive("Information")}
                  >
                    Information
                  </a>
                  <a
                    className={`nav-item nav-link text-dark ${
                      active === "Reviews" ? "active" : null
                    }`}
                    data-toggle="tab"
                    onClick={() => setActive("Reviews")}
                  >
                    Reviews ({product.numOfReviews})
                  </a>
                </div>
                <div className="tab-content">
                  <div
                    className={`tab-pane fade  ${
                      active === "Description" ? "active show" : null
                    }`}
                    id="tab-pane-1"
                  >
                    <h4 className="mb-3">Product Description</h4>
                    <p>
                      Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                      sea. Consetetur vero aliquyam invidunt duo dolores et duo
                      sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                      consetetur invidunt sed sed et, lorem duo et eos elitr,
                      sadipscing kasd ipsum rebum diam. Dolore diam stet rebum
                      sed tempor kasd eirmod. Takimata kasd ipsum accusam
                      sadipscing, eos dolores sit no ut diam consetetur duo
                      justo est, sit sanctus diam tempor aliquyam eirmod nonumy
                      rebum dolor accusam, ipsum kasd eos consetetur at sit
                      rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                      sanctus eirmod takimata dolor ea invidunt.
                    </p>
                    <p>
                      Dolore magna est eirmod sanctus dolor, amet diam et eirmod
                      et ipsum. Amet dolore tempor consetetur sed lorem dolor
                      sit lorem tempor. Gubergren amet amet labore sadipscing
                      clita clita diam clita. Sea amet et sed ipsum lorem elitr
                      et, amet et labore voluptua sit rebum. Ea erat sed et diam
                      takimata sed justo. Magna takimata justo et amet magna et.
                    </p>
                  </div>
                  <div
                    className={`tab-pane fade  ${
                      active === "Information" ? "active show" : null
                    }`}
                    id="tab-pane-2"
                  >
                    <h4 className="mb-3">Additional Information</h4>
                    <p>
                      Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                      sea. Consetetur vero aliquyam invidunt duo dolores et duo
                      sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                      consetetur invidunt sed sed et, lorem duo et eos elitr,
                      sadipscing kasd ipsum rebum diam. Dolore diam stet rebum
                      sed tempor kasd eirmod. Takimata kasd ipsum accusam
                      sadipscing, eos dolores sit no ut diam consetetur duo
                      justo est, sit sanctus diam tempor aliquyam eirmod nonumy
                      rebum dolor accusam, ipsum kasd eos consetetur at sit
                      rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                      sanctus eirmod takimata dolor ea invidunt.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">
                            Sit erat duo lorem duo ea consetetur, et eirmod
                            takimata.
                          </li>
                          <li className="list-group-item px-0">
                            Amet kasd gubergren sit sanctus et lorem eos
                            sadipscing at.
                          </li>
                          <li className="list-group-item px-0">
                            Duo amet accusam eirmod nonumy stet et et stet
                            eirmod.
                          </li>
                          <li className="list-group-item px-0">
                            Takimata ea clita labore amet ipsum erat justo
                            voluptua. Nonumy.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">
                            Sit erat duo lorem duo ea consetetur, et eirmod
                            takimata.
                          </li>
                          <li className="list-group-item px-0">
                            Amet kasd gubergren sit sanctus et lorem eos
                            sadipscing at.
                          </li>
                          <li className="list-group-item px-0">
                            Duo amet accusam eirmod nonumy stet et et stet
                            eirmod.
                          </li>
                          <li className="list-group-item px-0">
                            Takimata ea clita labore amet ipsum erat justo
                            voluptua. Nonumy.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade  ${
                      active === "Reviews" ? "active show" : null
                    }`}
                    id="tab-pane-3"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="mb-4">
                          {product.numOfReviews} review for {product.name}
                        </h4>
                        <div className="media mb-4">
                          <img
                            src="img/user.jpg"
                            alt="Image"
                            className="img-fluid mr-3 mt-1"
                            style={{ width: "45px" }}
                          />
                          <div className="media-body">
                            <h6>
                              John Doe
                              <small>
                                {" "}
                                - <i>01 Jan 2045</i>
                              </small>
                            </h6>
                            <div className="text-primary mb-2">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half-alt" />
                              <i className="far fa-star" />
                            </div>
                            <p>
                              Diam amet duo labore stet elitr ea clita ipsum,
                              tempor labore accusam ipsum et no at. Kasd diam
                              tempor rebum magna dolores sed sed eirmod ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4 className="mb-4">Leave a review</h4>
                        <small>
                          Your email address will not be published. Required
                          fields are marked *
                        </small>
                        <div className="d-flex my-3">
                          <p className="mb-0 mr-2">Your Rating * :</p>
                          <div className="text-primary">
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <form>
                          <div className="form-group">
                            <label htmlFor="message">Your Review *</label>
                            <textarea
                              id="message"
                              cols={30}
                              rows={5}
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Your Email *</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <input
                              type="submit"
                              defaultValue="Leave Your Review"
                              className="btn btn-primary px-3"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Shop Detail End */}
      {/* Products Start */}
      <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">You May Also Like</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col">
            {/* Scroll X */}
            <div className="owl-carousel related-carousel">
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-1.jpg"
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
                  <a className="h6 text-decoration-none text-truncate" href="">
                    Product Name Goes Here
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-2.jpg"
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
                  <a className="h6 text-decoration-none text-truncate" href="">
                    Product Name Goes Here
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-3.jpg"
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
                  <a className="h6 text-decoration-none text-truncate" href="">
                    Product Name Goes Here
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-4.jpg"
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
                  <a className="h6 text-decoration-none text-truncate" href="">
                    Product Name Goes Here
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-5.jpg"
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
                  <a className="h6 text-decoration-none text-truncate" href="">
                    Product Name Goes Here
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Backtotop />
    </>
  );
};

export default ProductDetails;
