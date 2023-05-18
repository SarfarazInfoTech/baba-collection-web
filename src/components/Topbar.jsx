import React from "react";
import { Link } from "react-router-dom";
import { userSession } from "../session/history";
import SearchProduct from "./search/SearchProduct";

const Topbar = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-3">
          <a className="text-decoration-none" href="/">
            <span className="h2 text-uppercase text-primary bg-dark px-2">
              Baba{" "}
            </span>
            <span className="h2 text-uppercase text-dark bg-primary px-2 ml-n1">
              Collection
            </span>
          </a>
        </div>
        <div className="col-lg-5 col-6 text-right">
          <SearchProduct />
        </div>
        <div className="col-lg-2 col-6 text-right">
          <h6 className="m-0">
            {/* <i className="fas fa-map-marker"></i> Location */}
          </h6>
        </div>

        <div className="col-lg-2 col-6 text-right">
          {userSession ? (
            <p className="m-0">
              <i className="fas fa-user"></i> {JSON.parse(userSession).name}
            </p>
          ) : (
            <Link to="/login">
              <h5 className="m-0">
                Login <i className="fas fa-sign-in-alt"></i>
              </h5>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
