import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBoxOpen, faThLarge, faImage, faInfoCircle, faPhone, faFileContract, faUserShield, faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  return (
    <div>
      <div className="container-fluid bg-light">
        <div className="row border-top px-xl-5">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light py-3 py-lg-0 px-0" style={{textAlign:"center"}}>
              
              {/* Toggler for Mobile */}
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                style={{margin: '0 auto'}}

              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navbar Links */}
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link to={"/"} className="nav-item nav-link active">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Home
                  </Link>

                  {/* Product Dropdown */}
             

                  {/* Categories Link (no dropdown) */}
                  <Link to={"/category"} className="nav-item nav-link">
                    <FontAwesomeIcon icon={faThLarge} className="mr-2" />
                    Product
                  </Link>

                  {/* Additional Links */}
                  <Link to={"/gallery"} className="nav-item nav-link">
                    <FontAwesomeIcon icon={faImage} className="mr-2" />
                    Gallery
                  </Link>
                  <Link to={"/aboutus"} className="nav-item nav-link">
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                    About Us
                  </Link>
                  <Link to={"/contact"} className="nav-item nav-link">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    Contact Us
                  </Link>
                  <Link to={"/privacy"} className="nav-item nav-link">
                    <FontAwesomeIcon icon={faUserShield} className="mr-2" />
                    Privacy Policy
                  </Link>
                  <Link to={"/blog"} className="nav-item nav-link">
                    <FontAwesomeIcon icon={faComments} className="mr-2" />
                    Blog
                  </Link>
                  <Link to={"/feedback"} className="nav-item nav-link">
  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
  Feedback
</Link>
<Link to={"/wishlist"} className="nav-item nav-link">
  <FontAwesomeIcon icon={faHeart} className="mr-2" />
  Wishlist
</Link>

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
