import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Shuffle function to randomize the order of images
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ImageModal = ({ show, handleClose, image }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton className="bg-light">
      <Modal.Title>{image.alt || "Image Preview"}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center">
      <img src={image.src} className="img-fluid rounded mb-3" alt={image.alt} />
      <p className="text-muted">{image.description}</p>
    </Modal.Body>
    <Modal.Footer className="justify-content-center">
      <div className='text-center'>
        <table className='table mb-0'>
          <tbody>
            <tr>
              <td><Link to="/detail/72" className="btn btn-link">Sinks</Link></td>
              <td><Link to="/detail/57" className="btn btn-link">Cabinet</Link></td>
              <td><Link to="/detail/81" className="btn btn-link">Mirror</Link></td>
              <td><Link to="/detail/33" className="btn btn-link">Wall Light</Link></td>
            </tr>
            <tr>
              <td colSpan="4" className="text-center"><strong>Price: $4899</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal.Footer>
  </Modal>
);




const categories = {
  bath: [
    { src: "/assets/images/Couches/bannerbath/dd/2.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerbath/dd/3.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerbath/dd/4.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerbath/dd/6.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerbath/tt/1.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbath/tt/5.png", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbath/tt/8.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbath/tt/9.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbath/tt/10.jpg", alt: "Elegant Look Styles" },
  ],
  
  
  bedroom: [
    { src: "/assets/images/Couches/bannerbed/dd/3.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerbed/dd/4.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerbed/tt/1.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbed/tt/2.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbed/tt/5.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbed/tt/6.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbed/tt/10.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbed/dd/7.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerbed/dd/8.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerbed/tt/11.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerbed/dd/12.jpg", alt: "Contemporary Styles" },
  ],
  kitchen: [
    { src: "/assets/images/Couches/bannerkitchen/dd/1.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerkitchen/dd/3.png", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerkitchen/dd/6.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerkitchen/dd/7.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerkitchen/dd/8.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerkitchen/tt/2.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerkitchen/tt/4.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerkitchen/tt/5.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerkitchen/tt/9.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerkitchen/tt/10.jpg", alt: "Elegant Look Styles" },
  ],
  livingRoom: [
    { src: "/assets/images/Couches/bannerliving/dd/1.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerliving/dd/3.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerliving/dd/6.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerliving/dd/9.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerliving/dd/10.jpg", alt: "Contemporary Styles" },
    { src: "/assets/images/Couches/bannerliving/tt/2.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerliving/tt/4.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerliving/tt/5.jpg", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerliving/tt/7.png", alt: "Elegant Look Styles" },
    { src: "/assets/images/Couches/bannerliving/tt/8.jpeg", alt: "Elegant Look Styles" },
  ],
};

const CategorySection = ({ title, images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const shuffledImages = shuffleArray([...images]);

  const handleImageClick = (image) => {
    // Here you can also add product details if needed
    setSelectedImage({
      ...image,
      name: image.alt || "Product Name", // Set a default or use the image's alt as the name
      price: "$100", // Replace with the actual price if you have it
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container-fluid py-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">{title}</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {shuffledImages.map((image, index) => (
          <div className="col-md-3 col-sm-6 col-xs-12  mb-4" key={index}>
            <div
              className="hover-zoom"
              onClick={() => handleImageClick(image)}
              style={{ cursor: 'pointer', textAlign:'center' }}
            >
              <img src={image.src} className="img-fluid zoom-image" alt={image.alt} style={{marginBottom: '10px'}}/>
              <p className="text-center">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal show={showModal} handleClose={handleCloseModal} image={selectedImage} />
      )}
    </div>
  );
};


function Gaberlly() {
  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner" style={{ width: '100%', height: '100%' }}>
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
                <h4 className="text-light text-uppercase font-weight-medium mb-3">Gallery</h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4 hover-zoom">Design</h3>
              </div>
            </div>
          </div>
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

export default Gaberlly;