import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // const active = location.pathname.split("/")[1];
  const active = location.pathname;
  const [show, setShow] = useState(false);
  const [subMenushow, setsubMenuShow] = useState(false);

  const menus = [
    {
      id: 1,
      item: "Womens",
      route: "/Products/Women",
    },
    {
      id: 2,
      item: "Mens",
      route: "/Products/Men",
    },
    {
      id: 3,
      item: "Kids",
      route: "/Products/Kid",
    },
    {
      id: 4,
      item: "Boys",
      route: "/Products/Boy",
    },
    {
      id: 5,
      item: "Girls",
      route: "/Products/Girl",
    },
    {
      id: 6,
      item: "Baby and Health",
      route: "/Products/Baby-Health",
    },
    {
      id: 7,
      item: "Beauty and Personal",
      route: "/Products/Beauty-Personal",
    },
    {
      id: 8,
      item: "Garments",
      route: "/Products/Garments",
    },
    {
      id: 9,
      item: "Footwear",
      route: "/Products/Footwear",
    },
    {
      id: 10,
      item: "Jewellery",
      route: "/Products/Jewellery",
    },
  ];
  const submenu = ``;
  return (
    <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-2 d-none d-lg-block">
          <a
            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
            style={{ height: "50px", padding: "0 30px" }}
            onClick={() => setShow(!show)}
          >
            <h6 className="text-dark m-0">
              <i className="fa fa-bars mr-2" />
              Categories
            </h6>
            <i className="fa fa-angle-down text-dark" />
          </a>
          <nav
            className={`${
              !show ? "collapse" : null
            } position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light`}
            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
          >
            <div className="navbar-nav w-100">
              <div
                className={`nav-item dropdown dropright ${
                  subMenushow ? "show" : null
                }`}
              >
                <a
                  className="nav-link dropdown-toggle"
                  onClick={() => setsubMenuShow(!subMenushow)}
                >
                  Dresses <i className="fa fa-angle-right float-right mt-1" />
                </a>
                <div
                  className={`dropdown-menu position-absolute rounded-0 border-0 m-0 ${
                    subMenushow ? "show" : null
                  }`}
                >
                  <a className="dropdown-item">Men's Dresses</a>
                  <a className="dropdown-item">Women's Dresses</a>
                  <a className="dropdown-item">Baby's Dresses</a>
                </div>
              </div>
              <a className="nav-item nav-link">Shirts</a>
              <a className="nav-item nav-link">Jeans</a>
              <a className="nav-item nav-link">Swimwear</a>
              <a className="nav-item nav-link">Sleepwear</a>
              <a className="nav-item nav-link">Sportswear</a>
              <a className="nav-item nav-link">Jumpsuits</a>
              <a className="nav-item nav-link">Blazers</a>
              <a className="nav-item nav-link">Jackets</a>
              <a className="nav-item nav-link">Shoes</a>
            </div>
          </nav>
        </div>
        <div className="col-lg-10">
          <nav
            className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0"
            style={{ height: "50px" }}
          >
            <a className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-uppercase text-dark bg-light px-2">
                Multi
              </span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                Shop
              </span>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                {menus.map(({ id, item, route }) => (
                  <a
                    key={id}
                    href={route}
                    className={`nav-item nav-link ${
                      active === route ? "active" : null
                    }`}
                  >
                    {item}
                  </a>
                ))}

                {/* <a
                  href="/contact"
                  className={`nav-item nav-link ${
                    active === "contact" ? "active" : null
                  }`}
                >
                  Contact
                </a> */}
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                <a className="btn px-0">
                  <i className="fas fa-heart text-primary" />
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{ paddingBottom: "2px" }}
                  >
                    0
                  </span>
                </a>
                <a className="btn px-0 ml-3" href="/cart">
                  <i className="fas fa-shopping-cart text-primary" />
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{ paddingBottom: "2px" }}
                  >
                    0
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
