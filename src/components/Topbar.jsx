import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="container-fluid">
        {/* <div className="row bg-secondary  px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
              <a className="text-body mr-3" href>About</a>
              <a className="text-body mr-3" href>Contact</a>
              <a className="text-body mr-3" href>Help</a>
              <a className="text-body mr-3" href>FAQs</a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">Sign in</button>
                  <button className="dropdown-item" type="button">Sign up</button>
                </div>
              </div>
              <div className="btn-group mx-2">
                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">EUR</button>
                  <button className="dropdown-item" type="button">GBP</button>
                  <button className="dropdown-item" type="button">CAD</button>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">FR</button>
                  <button className="dropdown-item" type="button">AR</button>
                  <button className="dropdown-item" type="button">RU</button>
                </div>
              </div>
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <a href className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark" />
                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
              </a>
              <a href className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark" />
                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
              </a>
            </div>
          </div>
        </div> */}
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-3">
            <a href className="text-decoration-none">
              <span className="h2 text-uppercase text-primary bg-dark px-2">Baba </span>
              <span className="h2 text-uppercase text-dark bg-primary px-2 ml-n1">Collection</span>
            </a>
          </div>
          <div className="col-lg-5 col-6 text-right">
            <form>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-2 col-6 text-right">
            <h6 className="m-0"><i class="fas fa-map-marker"></i> Select Location</h6>
          </div>
          {/* <div className="col-lg-2 col-6 text-right">
            <p className="m-0 text-body">Become a seller</p>
            <p className="m-0 text-body">Become a vender</p>
          </div> */}
          
          <div className="col-lg-2 col-6 text-right">
          <p className="m-0"><i class="fas fa-user"></i> Create an account</p>
            <Link to="login"><h5 className="m-0">Login <i class="fas fa-sign-in-alt"></i> </h5></Link>
          </div>
        </div>
      </div>
  )
};

export default Topbar;
