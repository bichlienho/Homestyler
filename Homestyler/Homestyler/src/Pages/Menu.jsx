import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="/" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    Home 
                  </span>
                  Styler
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link to={"/"} className="nav-item nav-link active">
                    Home
                  </Link>
                  <div className="nav-item dropdown">
                    <a
                      href="/product/:id"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Product
                    </a>
                    {/* <div className="dropdown-menu rounded-0 m-0">
                      {Brand.map((items, i) => (
                        <Link
                          to={`/product/${items.id}`}
                          className="dropdown-item"
                        >
                          {items.name}
                        </Link>
                      ))}
                    </div> */}
                  </div>
                  <div className="nav-item dropdown">
                    <a
                      href="/category/:id"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Categories
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      {Category.map((items, i) => (
                        <Link
                          to={`/category/${items.id}`}
                          className="dropdown-item"
                        >
                          {items.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link to={"/contact"} className="nav-item nav-link">
                    Contact-Us
                  </Link>
                  <Link to={"/term"} className="nav-item nav-link">
                    Tems Of Service
                  </Link>
                  <Link to={"/privacy"} className="nav-item nav-link">
                    Privacy Policy
                  </Link>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <a href="/login" className="nav-item nav-link">
                    Login
                  </a>
                  {/* <a href="" className="nav-item nav-link">
                    Register
                  </a> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
