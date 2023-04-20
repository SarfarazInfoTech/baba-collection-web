import React from "react";

const ShopDetails = () => {
  return (
    <>
      <div className="black shop-details-page">
        <div className="container-fluid">
          <div className="row py-lg-3">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="shop-banner">
                    <img
                      src="http://mandeclan.shop/public/images/store_cover_photo/01_01_2022_03_01_192.webp"
                      alt="dd"
                    />
                  </div>
                </div>
                <div className="col-md-7 mx-1">
                  <h4 className="text-primary">
                    Bombaywala Departmental Store
                  </h4>
                  <p className="p1">
                    <i className="fas fa-map-marker-alt" /> Bardi, Nagpur,
                    Maharashtra, INDIA.
                  </p>
                  <div
                    className="row row1"
                    style={{
                      margin: "auto",
                      marginTop: 20,
                      paddingTop: 20,
                      borderRadius: 3,
                      paddingBottom: 15,
                    }}
                  >
                    <div className="col-md-4 col-xs-3">
                      <b>
                        <i className="fas fa-star" /> 3.5
                      </b>
                      <p>2+ Rating</p>
                    </div>
                    <div className="col-md-4 col-xs-5">
                      <b>11:00 am to 09:00 pm</b>
                      <p>Open &amp; Close Time</p>
                    </div>
                    <div className="col-md-1 col-xs-1 whishlist">
                      <div>
                        <a href="http://mandeclan.shop/customer-login">
                          <button
                            type="button"
                            className="btn btn-outline-light unlike heart_like"
                            id="heart_like_8"
                            data={8}
                            store_id={8}
                            store_user_id={86897}
                          >
                            <i className="far fa-heart" /> <span>Like</span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-details-div pt-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="">
                <div className="">
                  <ul className="nav nav-tabs">
                    <li>
                      <a
                        href="#overview"
                        data-toggle="tab"
                        className="active show"
                      >
                        Overview
                      </a>
                    </li>
                    <li>
                      <a href="http://mandeclan.shop/order/bombaywala-departmental-store-fashion-bardi?category=8">
                        Order Now
                      </a>
                    </li>
                    <li>
                      <a href="#reviews" data-toggle="tab">
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a href="#photos" data-toggle="tab">
                        Photo Gallery
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="tabs">
                  <div
                    className="tab-pane overview active show"
                    id="overview"
                    tabIndex={-1}
                  >
                    {/*  */}
                    <div className="contact-info">
                      <ul>
                        <li className="contactno">
                          {" "}
                          <i
                            className="fa fa-phone-square"
                            aria-hidden="true"
                          />{" "}
                          +919922539268
                        </li>
                        <li className="email contactno">
                          <i className="fa fa-envelope" aria-hidden="true" />{" "}
                          ramesh@gmail.com
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="shop-open">
                          <h5>Open Now</h5>{" "}
                          <span className="p1">
                            11:00 am - 09:00 pm (Today)
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h5>Address</h5>
                        <p className="current-address">
                          <img src="http://mandeclan.shop/public/frontend/img/placeholder (1).png" />
                          N.M.C. Complex(J.B), 1, Mangalwari, Koradi Colony,
                          Nagpur, Maharashtra 440001, India Bardi, Nagpur,
                          Maharashtra, INDIA
                        </p>
                      </div>
                      <div className="col-md-12">
                        <h5>Description</h5>
                        <p>
                          Bombaywala Departmental Stores in Nagpur. Readymade
                          Garment Retailers with Address, Contact Number,
                          Photos, Maps. View Bombaywala Departmental Stores,
                          Nagpur on Justdial.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane reviews" id="reviews">
                    {/*  */}
                    <div className="card card1">
                      <h4>Reviews</h4>
                      <div className="div1">
                        <div className="row">
                          <div className="col-md-2 col-xs-2">
                            <div className="img">
                              <span className="textcolor">S</span>
                            </div>
                          </div>
                          <div className="col-md-10 col-xs-10">
                            <div
                              className="reviews-rating"
                              style={{ pointerEvents: "none" }}
                            >
                              <h5>sunita shende</h5>
                              <ul>
                                <li>
                                  <span
                                    className="badge badge-success"
                                    style={{ fontSize: 12 }}
                                  >
                                    <i
                                      style={{ fontSize: 11 }}
                                      className="fas fa-star"
                                    />
                                    3
                                  </span>
                                </li>
                                <li className="stars">
                                  <i className="fa fa-star" />
                                </li>
                                <li className="stars">
                                  <i className="fa fa-star" />
                                </li>
                                <li className="stars">
                                  <i className="fa fa-star" />
                                </li>
                              </ul>
                            </div>
                            <p>
                              It is absolutely amazing product it fits as custom
                              made
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="div1">
                        <div className="row">
                          <div className="col-md-2 col-xs-2">
                            <div className="img">
                              <span className="textcolor">S</span>
                            </div>
                          </div>
                          <div className="col-md-10 col-xs-10">
                            <div
                              className="reviews-rating"
                              style={{ pointerEvents: "none" }}
                            >
                              <h5>sushant sonekar</h5>
                              <ul>
                                <li>
                                  <span
                                    className="badge badge-success"
                                    style={{ fontSize: 12 }}
                                  >
                                    <i
                                      style={{ fontSize: 11 }}
                                      className="fas fa-star"
                                    />
                                    4
                                  </span>
                                </li>
                                <li className="stars">
                                  <i className="fa fa-star" />
                                </li>
                                <li className="stars">
                                  <i className="fa fa-star" />
                                </li>
                                <li className="stars">
                                  <i className="fa fa-star" />
                                </li>
                                <li className="stars">
                                  <i className="fa fa-star" />
                                </li>
                              </ul>
                            </div>
                            <p>
                              Everything is perfect i ordered size 'M' and am
                              very happy with this product , colour looks
                              slightly brown but it's ok. it's warmer than
                              expected.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                  <div className="tab-pane photos" id="photos">
                    {/*  */}
                    <section>
                      <div className="demo-gallery">
                        <ul id="lightgallery" className="list-unstyled row">
                          <li
                            className="col-xs-4 col-sm-3 col-md-4 col-mb-12"
                            data-responsive="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_52_211.jpg"
                            data-src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_52_211.jpg"
                            data-sub-html="<h4>image heading</p>"
                          >
                            <a href="">
                              <div className="img-div">
                                <img
                                  className="img-responsive"
                                  src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_52_211.jpg"
                                />
                              </div>
                            </a>
                          </li>
                          <li
                            className="col-xs-4 col-sm-3 col-md-4 col-mb-12"
                            data-responsive="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_52_401.jpg"
                            data-src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_52_401.jpg"
                            data-sub-html="<h4>image heading</p>"
                          >
                            <a href="">
                              <div className="img-div">
                                <img
                                  className="img-responsive"
                                  src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_52_401.jpg"
                                />
                              </div>
                            </a>
                          </li>
                          <li
                            className="col-xs-4 col-sm-3 col-md-4 col-mb-12"
                            data-responsive="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_52_541.jpg"
                            data-src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_52_541.jpg"
                            data-sub-html="<h4>image heading</p>"
                          >
                            <a href="">
                              <div className="img-div">
                                <img
                                  className="img-responsive"
                                  src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_52_541.jpg"
                                />
                              </div>
                            </a>
                          </li>
                          <li
                            className="col-xs-4 col-sm-3 col-md-4 col-mb-12"
                            data-responsive="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_53_081.jpg"
                            data-src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_53_081.jpg"
                            data-sub-html="<h4>image heading</p>"
                          >
                            <a href="">
                              <div className="img-div">
                                <img
                                  className="img-responsive"
                                  src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_02_53_081.jpg"
                                />
                              </div>
                            </a>
                          </li>
                          <li
                            className="col-xs-4 col-sm-3 col-md-4 col-mb-12"
                            data-responsive="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_03_01_451.jpg"
                            data-src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_03_01_451.jpg"
                            data-sub-html="<h4>image heading</p>"
                          >
                            <a href="">
                              <div className="img-div">
                                <img
                                  className="img-responsive"
                                  src="http://mandeclan.shop/public/images/store_photo_gallery/19_01_2022_03_01_451.jpg"
                                />
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="nearby-restaurants">
                <div className="card">
                  <div className="card-header">
                    <h5>Nearby Shop</h5>
                  </div>
                  <div className="card-body">
                    <div className="list-of-shops row">
                      <div className="col-md-12">
                        <div className="card card1">
                          <div className="shop-div row margin0">
                            <a href="http://mandeclan.shop/profile/shreeshivam-wedding-fashion-&-lifestyle-clothing-shop-fashion-bardi">
                              <div className="img">
                                <img
                                  src="http://mandeclan.shop/public/images/store_cover_photo/01_01_2022_03_28_102.webp"
                                  alt="dd"
                                />
                              </div>
                            </a>
                            <div className="content-div col-xs-9 padding0">
                              <h5 className="shop-name">
                                Shreeshivam Wedding Fashion &amp; L ...
                              </h5>
                              <p className="p1">Bardi, Nagpur</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card card1">
                          <div className="shop-div row margin0">
                            <a href="http://mandeclan.shop/profile/bombaywala-departmental-store-fashion-bardi">
                              <div className="img">
                                <img
                                  src="http://mandeclan.shop/public/images/store_cover_photo/01_01_2022_03_01_192.webp"
                                  alt="dd"
                                />
                              </div>
                            </a>
                            <div className="content-div col-xs-9 padding0">
                              <h5 className="shop-name">
                                Bombaywala Departmental Store
                              </h5>
                              <p className="p1">Bardi, Nagpur</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
