import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearError, getProduct } from "../../actions/ProductAction";
import Backtotop from "../../components/Backtotop";
import Breadcrumb from "../../components/Breadcrumb";
import ProductCard from "../../components/cards/ProductCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Topbar from "../../components/Topbar";

const Products = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [PriceMin, setPriceMin] = useState(100);
  const [PriceMax, setPriceMax] = useState(130000);
  const { keyword } = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  const priceRanges = [
    { label: "100 ₹ - 500 ₹", value: "100-500" },
    { label: "500 ₹ - 1000 ₹", value: "500-1000" },
    { label: "1000 ₹  - 2000 ₹", value: "1000-2000" },
    { label: "2000 ₹  - 3000 ₹", value: "2000-3000" },
    { label: "4000 ₹ - 5000 ₹", value: "4000-5000" },
  ];

  const filteredProducts =
    products &&
    products.filter((product) => {
      if (!selectedPriceRange) return true;
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      if (maxPrice) {
        return (
          product.price >= parseInt(minPrice) &&
          product.price <= parseInt(maxPrice)
        );
      } else {
        return product.price >= parseInt(minPrice);
      }
    });

  useEffect(() => {
    const [minPrice, maxPrice] = selectedPriceRange.split("-");
    setPriceMax(maxPrice);
    setPriceMin(minPrice);
  }, [selectedPriceRange, filteredProducts]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct(keyword, CurrentPage, PriceMin, PriceMax));
  }, [dispatch, keyword, error, alert, CurrentPage, PriceMin, PriceMax]);

  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb item1="Home" item2="Shop" item3="Shop List" />
      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid">
          <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <div className="col-lg-3 col-md-4">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Filter by price</span>
              </h5>
              <div className="bg-light p-4 mb-30">
                <form>
                  {priceRanges &&
                    priceRanges.map((priceRange) => (
                      <div
                        key={priceRange.value}
                        className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
                      >
                        <input
                          type="checkbox"
                          id={priceRange.value}
                          name={priceRange.value}
                          value={priceRange.value}
                          checked={selectedPriceRange === priceRange.value}
                          onChange={(event) =>
                            setSelectedPriceRange(event.target.value)
                          }
                          className="custom-control-input"
                        />
                        <label
                          htmlFor={priceRange.value}
                          className="custom-control-label"
                        >
                          {priceRange.label}
                        </label>
                        <span className="badge border font-weight-normal">
                          {selectedPriceRange === priceRange.value &&
                            products &&
                            products.length + " Items"}
                        </span>
                      </div>
                    ))}
                </form>
              </div>
              {/* Color Start */}
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Filter by color</span>
              </h5>
              <div className="bg-light p-4 mb-30">
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      defaultChecked
                      id="color-all"
                    />
                    <label className="custom-control-label" htmlFor="price-all">
                      All Color
                    </label>
                    <span className="badge border font-weight-normal">
                      1000
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="color-1"
                    />
                    <label className="custom-control-label" htmlFor="color-1">
                      Black
                    </label>
                    <span className="badge border font-weight-normal">150</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="color-2"
                    />
                    <label className="custom-control-label" htmlFor="color-2">
                      White
                    </label>
                    <span className="badge border font-weight-normal">295</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="color-3"
                    />
                    <label className="custom-control-label" htmlFor="color-3">
                      Red
                    </label>
                    <span className="badge border font-weight-normal">246</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="color-4"
                    />
                    <label className="custom-control-label" htmlFor="color-4">
                      Blue
                    </label>
                    <span className="badge border font-weight-normal">145</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="color-5"
                    />
                    <label className="custom-control-label" htmlFor="color-5">
                      Green
                    </label>
                    <span className="badge border font-weight-normal">168</span>
                  </div>
                </form>
              </div>
              {/* Color End */}
              {/* Size Start */}
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Filter by size</span>
              </h5>
              <div className="bg-light p-4 mb-30">
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      defaultChecked
                      id="size-all"
                    />
                    <label className="custom-control-label" htmlFor="size-all">
                      All Size
                    </label>
                    <span className="badge border font-weight-normal">
                      1000
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-1"
                    />
                    <label className="custom-control-label" htmlFor="size-1">
                      XS
                    </label>
                    <span className="badge border font-weight-normal">150</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-2"
                    />
                    <label className="custom-control-label" htmlFor="size-2">
                      S
                    </label>
                    <span className="badge border font-weight-normal">295</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-3"
                    />
                    <label className="custom-control-label" htmlFor="size-3">
                      M
                    </label>
                    <span className="badge border font-weight-normal">246</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-4"
                    />
                    <label className="custom-control-label" htmlFor="size-4">
                      L
                    </label>
                    <span className="badge border font-weight-normal">145</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-5"
                    />
                    <label className="custom-control-label" htmlFor="size-5">
                      XL
                    </label>
                    <span className="badge border font-weight-normal">168</span>
                  </div>
                </form>
              </div>
              {/* Size End */}
            </div>
            {/* Shop Sidebar End */}
            {/* Shop Product Start */}
            <div className="col-lg-9 col-md-8">
              <div className="row pb-3">
                <div className="col-12 pb-1">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <button className="btn btn-sm btn-light">
                        <i className="fa fa-th-large" />
                      </button>
                      <button className="btn btn-sm btn-light ml-2">
                        <i className="fa fa-bars" />
                      </button>
                    </div>
                    <div className="ml-2">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-light dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Sorting
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            Latest
                          </a>
                          <a className="dropdown-item" href="#">
                            Popularity
                          </a>
                          <a className="dropdown-item" href="#">
                            Best Rating
                          </a>
                        </div>
                      </div>
                      <div className="btn-group ml-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-light dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Showing
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            10
                          </a>
                          <a className="dropdown-item" href="#">
                            20
                          </a>
                          <a className="dropdown-item" href="#">
                            30
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {filteredProducts && filteredProducts.length === 0 ? (
                  <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                    <h4> No Product Found!</h4>
                  </div>
                ) : (
                  filteredProducts &&
                  filteredProducts.map((product) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 pb-1"
                      key={product._id}
                    >
                      <ProductCard product={product} key={product._id} />
                    </div>
                  ))
                )}
                <div className="col-12">
                  <nav>
                    <ul className="pagination justify-content-center">
                      {resultPerPage < productCount && (
                        <Pagination
                          activePage={CurrentPage}
                          itemsCountPerPage={resultPerPage}
                          totalItemsCount={
                            filteredProducts && productCount ? productCount : 0
                          }
                          hideFirstLastPages={true}
                          onChange={(e) => setCurrentPage(e)}
                          nextPageText="Next"
                          prevPageText="Previous"
                          lastPageText="Last"
                          firstPageText="1st"
                          itemClass="page-item"
                          linkClass="page-link"
                          activeClass="active"
                          activeLinkClass="active"
                          hideDisabled={true}
                        />
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <Backtotop />
    </>
  );
};

export default Products;
