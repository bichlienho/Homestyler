import React from "react";
import Slide from "../Component/Slide"; // Assuming you have Slide component with videos for interior design
import Trendy from "../json/Trendy.json"; // Adjust name from Trandy to Trendy for clarity
import Featured from "../json/Featured.json"; // Assuming a JSON file for featured collections
import { Link } from "react-router-dom";
import './home.css';

function Home({ handleAdd }) {
  return (
    <div>
      {/* Carousel Section */}
      <div className="container-fluid p-0">
        <div className="row">
          <Slide />
        </div>
      </div>

      {/* Highlight Features Section */}
      <div className="container-fluid py-5">
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="d-flex flex-column align-items-center border py-4">
              <i className="fas fa-couch fa-3x text-primary mb-3"></i>
              <h5 className="font-weight-semi-bold">Elegant Designs</h5>
              <p>Crafted with attention to detail and luxurious materials.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="d-flex flex-column align-items-center border py-4">
              <i className="fas fa-palette fa-3x text-primary mb-3"></i>
              <h5 className="font-weight-semi-bold">Customizable Themes</h5>
              <p>
              Adjust colors to each room to reflect your personal style.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="d-flex flex-column align-items-center border py-4">
              <i className="fas fa-tools fa-3x text-primary mb-3"></i>
              <h5 className="font-weight-semi-bold">Professional Installation</h5>
              <p>Expert team ensuring a seamless setup of your dream home.       </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="d-flex flex-column align-items-center border py-4">
              <i className="fas fa-headset fa-3x text-primary mb-3"></i>
              <h5 className="font-weight-semi-bold">24/7 Customer Support</h5>
              <p>
              We're here to help at every step of the process when you contact us.</p>
            </div>
          </div>
        </div>
      </div>

 {/* Best Seller Section */}
 <div className="container-fluid py-5">
  <div className="text-center mb-4">
    <h2 className="section-title px-5">
      <span className="px-2">Design Styles</span>
    </h2>
  </div>
  <div className="row px-xl-5 pb-3">
    <div className="col-md-6">
      <Link to="/elegant" className="btn btn-primary w-100">Elegant Look Styles</Link>
    </div>
    <div className="col-md-6">
      <Link to="/contem" className="btn btn-primary w-100">Contemporary Styles</Link>
    </div>
  </div>
</div>

<div className="container-fluid py-5">
  <div className="row px-xl-5 pb-3">
    <div className="col-md-3">
      <Link to="/gallery" className="hover-zoom">
        <img src="/assets/images/banner/hot2.jpeg" className="img-fluid zoom-image" alt="Elegant Look" />
        <p className="text-center">Living Room</p>
      </Link>
    </div>
    <div className="col-md-3">
      <Link to="/gallery" className="hover-zoom">
        <img src="/assets/images/banner/hot1.jpg" className="img-fluid zoom-image" alt="Contemporary" />
        <p className="text-center">Kitchen</p>
      </Link>
    </div>
    <div className="col-md-3">
      <Link to="/gallery" className="hover-zoom">
        <img src="/assets/images/banner/hot4.jpg" className="img-fluid zoom-image" alt="Modern" />
        <p className="text-center">Bedroom</p>
      </Link>
    </div>
    <div className="col-md-3">
      <Link to="/gallery" className="hover-zoom">
        <img src="/assets/images/banner/hot3.jpg" className="img-fluid zoom-image" alt="Classic" />
        <p className="text-center">Bathroom</p>
      </Link>
    </div>
  </div>
</div>






{/* Offers Section */}

<div className="container-fluid py-5 bg-secondary">
  
  <div className="row px-xl-5">
    <div className="col-md-6 pb-4">
      <div className="position-relative text-center text-md-right text-white py-5 px-5">
        <img
          src="/assets/images/banner/bbb1.jpg"
          alt="Offer"
          className="img-fluid mb-4 banner-img"
          style={{ maxWidth: '50%', height: 'auto' }}
        />
        <h5 className="text-uppercase text-primary mb-3">Exclusive 20% Off</h5>
        <h1 className="mb-4 font-weight-semi-bold">Luxury Living Room</h1>
        {/* <Link to="/category" className="btn btn-outline-light">Shop Now</Link> */}
      </div>
    </div>
    <div className="col-md-6 pb-4">
      <div className="position-relative text-center text-md-left text-white py-5 px-5">
        <img
          src="/assets/images/banner/b1.webp"
          alt="Offer"
          className="img-fluid mb-4 banner-img"
          style={{ maxWidth: '53%', height: 'auto' }}
        />
        <h5 className="text-uppercase text-primary mb-3">20% Discount</h5>
        <h1 className="mb-4 font-weight-semi-bold">Stylish Bedroom</h1>
        {/* <Link to="/gallery" className="btn btn-outline-light">Shop Now</Link> */}
      </div>
    </div>
  </div>
</div>

{/* Featured Collection Section */}
<div className="container-fluid py-5">
  <div className="text-center mb-4">
    <h2 className="section-title px-5">
      <span className="px-2">Featured Collections</span>
    </h2>
  </div>
  <div className="row px-xl-5 pb-3">
    {Featured.map((item, i) => (
      <div className="col-lg-4 col-md-6 pb-1" key={i}>
        <div className="card border-0 mb-4">
          <Link to={`/detail/${item.id}`} className="position-relative overflow-hidden">
            <video className="img-fluid w-100" src={item.image} controls autoPlay muted loop />
          </Link>
          <div className="card-body text-center">
            <h5 className="font-weight-semi-bold">{item.name}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


     
    </div>
  );
}

export default Home;
