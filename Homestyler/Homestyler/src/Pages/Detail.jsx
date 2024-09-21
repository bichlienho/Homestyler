import React from "react";
import { useParams } from "react-router-dom";
import Prodetail from "../json/data.json";

function Detail({ handleAdd }) {
  const { id } = useParams();
  const item = Prodetail.categories
    .flatMap(category => category.subcategories)
    .flatMap(subcategory => subcategory.items)
    .find(product => product.id === parseInt(id));

   
  if (!item) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <div>
      <div className="container-fluid bg-secondary mb-5 py-4">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="font-weight-semi-bold text-uppercase mb-3 text-white">Shop Detail</h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a className="text-white" href="/">Home</a>
            </p>
            <p className="m-0 px-2 text-white">-</p>
            <p className="m-0 text-white">Shop Detail</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-5 pb-5">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner border">
                {item.images && item.images.length > 0 ? (
                  item.images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                      <img className="d-block w-100 h-100" src={image} alt={`Image ${index + 1}`} />
                    </div>
                  ))
                ) : (
                  <div className="carousel-item active">
                    <img className="d-block w-100 h-100" src={item.imageUrl} alt="Image" />
                  </div>
                )}
              </div>
              <a className="carousel-control-prev" href="#product-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#product-carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="col-lg-7 pb-5" style={{textAlign:'center'}}>
            <h3 className="font-weight-semi-bold">{item.name}</h3>
            <h3 className="font-weight-semi-bold mb-4">{item.price}</h3>
            <p className="mb-4">{item.description}</p>
            <div className="mb-4">
              <span className="text-dark font-weight-medium mr-3">Location: {item.location}</span>
              <span className="text-dark font-weight-medium mr-3">Rating: {item.rating}</span>
              <span className="text-dark font-weight-medium mr-3">Availability: {item.availability}</span>
              <span className="text-dark font-weight-medium">Category Type: {item.categoryType}</span>
            </div>
            {item.file && (
              <div>
                <button  onClick={() => handleAdd(item)} className="btn btn-sm btn-primary">
                  Add To Wish List
                </button>
                <a
                  download={`${item.name}.doc`}
                  className="btn btn-sm btn-primary"
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Product Information
                </a>
              </div>

            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
