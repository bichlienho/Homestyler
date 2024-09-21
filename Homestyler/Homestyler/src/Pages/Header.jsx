import React from "react";
import { Link } from "react-router-dom";


function Header({ number }) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a class="navbar-brand" href="/">
              <img class="logo_light "  src="assets/images/logo/logo1_1.jpg" alt="logo" />

            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3  text-right">
            {/* <a href="" className="btn border">
              {/* <i className="fas fa-heart text-primary"></i> */}
              {/* <span className="badge">0</span> *
            </a> */}
            <Link to={"/cart"} className="btn border">
              <i className="fas fa-shopping-cart text-primary"></i>
              <span className="badge">{number}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
