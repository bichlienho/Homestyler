import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css"; // Custom CSS for additional styling

function Header({ number }) {
  const [searchQuery, setSearchQuery] = useState(""); // Define state for search query
  const navigate = useNavigate(); // Hook to navigate to different routes

  // Function to handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (searchQuery.trim()) {
      // Only proceed if search query is not empty
      navigate(`/category/${searchQuery}`); // Navigate to the search results page with query
    }
  };

  return (
    <div className="header-container">
      <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
          {/* Logo */}
          <div className="col-lg-6 d-none d-lg-block">
            <a className="navbar-brand" href="/">
              <img
                className="logo_light"
                src="/assets/images/logo/1111.png"
                alt="logo"
                style={{ width: "170px", height: "auto" }}
              />
            </a>
          </div>

          {/* Search Bar */}
          <div className="col-lg-6 col-6 text-left">
            <form onSubmit={handleSearchSubmit}> {/* Add form submission handler */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search for products"
                  value={searchQuery}  // Bind the input value to the state
                  onChange={(e) => setSearchQuery(e.target.value)}  // Update state on input change
                />
                <div className="input-group-append">
                  <button type="submit" className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
