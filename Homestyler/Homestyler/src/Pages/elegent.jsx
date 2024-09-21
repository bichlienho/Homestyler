import React from "react";
import { Link } from "react-router-dom";
import './home.css';

// Sample data for different categories
const categories = {
  bath: [
    { src: "/assets/images/Couches/bannerbath/tt/1.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerbath/tt/5.png", alt: "" },
    { src: "/assets/images/Couches/bannerbath/tt/8.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerbath/tt/9.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerbath/tt/10.jpg", alt: "" },
  ],
  bedroom: [
    { src: "/assets/images/Couches/bannerbed/tt/1.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerbed/tt/2.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerbed/tt/5.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerbed/tt/6.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerbed/tt/10.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerbed/tt/11.jpg", alt: "" },
  ],
  kitchen: [
    { src: "/assets/images/Couches/bannerkitchen/tt/2.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerkitchen/tt/4.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerkitchen/tt/5.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerkitchen/tt/9.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerkitchen/tt/10.jpg", alt: "" },
  ],
  livingRoom: [
    { src: "/assets/images/Couches/bannerliving/tt/2.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerliving/tt/4.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerliving/tt/5.jpg", alt: "" },
    { src: "/assets/images/Couches/bannerliving/tt/7.png", alt: "" },
    { src: "/assets/images/Couches/bannerliving/tt/8.jpeg", alt: "" },
  ],
};

// Shuffle function to randomize the order of images
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Component for rendering a category section
const CategorySection = ({ title, images }) => {
  const shuffledImages = shuffleArray([...images]);
  
  return (

  




    <div className="container-fluid py-5">
  

      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">{title}</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {shuffledImages.map((image, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Link to="/shop" className="hover-zoom">
              <img src={image.src} className="img-fluid zoom-image" alt={image.alt} />
              <p className="text-center">{image.alt}</p>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

function Elegant() {
  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide">

        <div className="carousel-inner" style={{ width: '100%', height: '700px' }}>
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <img
              src="/assets/images/banner/banner1gelly.jpg"
              className="d-block w-100"
              alt="Banner 1"
              style={{ height: '100%', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 transition-all">
                <h4 className="text-light text-uppercase font-weight-medium mb-3">Gaberlly</h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4 hover-zoom">Design</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
  
     
      <div className="row px-xl-5 pb-3">
    <div className="col-md-6">
      <Link to="/elegant" className="btn btn-primary w-100">Elegant Look Styles</Link>
    </div>
    <div className="col-md-6">
      <Link to="/contem" className="btn btn-primary w-100">Contemporary Styles</Link>
    </div>
  </div>

      {/* Category Sections */}
      <CategorySection title="Bath Room Design" images={categories.bath} />
      <CategorySection title="Bedroom Styles" images={categories.bedroom} />
      <CategorySection title="Kitchen Designs" images={categories.kitchen} />
      <CategorySection title="Living Room Ideas" images={categories.livingRoom} />
    </div>
  );
}

export default Elegant;
