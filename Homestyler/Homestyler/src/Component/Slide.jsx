import React from "react";


function Slide() {
  return (
    <div className="col-lg-12">
      <div id="header-carousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* Video 1 */}
            <video className="img-fluid video-clear" autoPlay muted loop>
              <source src="/assets/videos/vd1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 transition-all">
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  Modern Living Room
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4 hover-zoom">
                  Home Styler
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
