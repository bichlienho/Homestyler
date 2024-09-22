import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-gray py-5 border-top-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
            <div className="widget text-center">
              <a className="navbar-brand" href="/">
                <img 
                  className="logo_light"  
                  src="/assets/images/logo/1111.png" 
                  alt="logo" 
                  style={{ width: "170px", height: "auto" }} 
                />
              </a>
              <p>Coming to us you will always be satisfied.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
  <div className="widget">
    <h6 className="widget_title font-weight-bold mb-3">Useful Links</h6>
    <div className="row">
      <div className="col-6">
        <ul className="list-unstyled">
          <li><a href="/">Home</a></li>
          <li><a href="category">Product</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/sitemap">Site Map</a></li>
        </ul>
      </div>
      <div className="col-6">
        <ul className="list-unstyled">
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/feedback">Feedback</a></li>
          <li><a href="/wishlist">Wish List</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>


          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="widget">
              <h6 className="widget_title font-weight-bold mb-3">Information</h6>
              <p>
                We offer a variety of interior designs to provide our customers with exceptional experiences.
                If you encounter any issues, feel free to contact us via email or phone for support.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="widget">
              <h6 className="widget_title font-weight-bold mb-3">Contact Info</h6>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <i className="ti-location-pin mr-2"></i>
                  <p className="mb-0">62 Van Phuc Street, Ho Chi Minh City, Viet Nam</p>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="ti-email mr-2"></i>
                  <a href="mailto:mariabichlien23@gmail.com">mariabichlien23@gmail.com</a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="ti-mobile mr-2"></i>
                  <p className="mb-0">+84-0938-540-335</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row border-top pt-6">
        <div style={{ textAlign: 'center' }}>
    <p className="mb-0">© 2024 All Rights Reserved by Aptech _Techwiz</p>
</div>

        
        </div>
      </div>
    </footer>
  );
}

export default Footer;
