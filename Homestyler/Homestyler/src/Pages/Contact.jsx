import React, { useState } from "react";
import "./contact.css"; // Custom styles for additional refinement

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(true); // Set submission state to true
    event.target.reset(); // Reset the form after submission
  };

  return (
    <div>
      {/* Contact Details Section */}
      <div className="container py-5">
        <div className="row">
          {/* Contact Details */}
          <div className="col-md-6">
            <div className="contact-details">
              <h2>Contact Information</h2>
              <div className="detail-item mb-4">
                <h5><i className="fas fa-map-marker-alt me-2"></i> Address</h5>
                <p>62 Van Phuc Street, Ho Chi Minh City, Viet Nam</p>
              </div>
              <div className="detail-item mb-4">
                <h5><i className="fas fa-envelope me-2"></i> Email</h5>
                <p>
                  <a href="mailto:mariabichlien23@gmail.com" className="text-decoration-none">
                    mariabichlien23@gmail.com
                  </a>
                </p>
              </div>
              <div className="detail-item mb-4">
                <h5><i className="fas fa-phone me-2"></i> Phone</h5>
                <p>+ 84-0938-540-33</p>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="col-md-6">
            <div className="info-section">
              <h2>Information</h2>
              <p className="lead">
                We offer a variety of interior designs to provide our customers with exceptional experiences. If you encounter any issues, feel free to contact us via email or phone for support.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row py-12">
          <div className="col-md-6 offset-md-3">
            <form id="contactForm" onSubmit={handleSubmit}>
              <h3 className="text-center">Support</h3>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Product Name Needing Support"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  id="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div>
                <button className="btn btn-primary w-100" type="submit">
                  Send Message
                </button>
              </div>
            </form>
            {isSubmitted && (
              <div className="alert alert-success mt-3 text-center">
                Message sent successfully!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="container-fluid py-5 bg-light">
        <h3 className="text-center mb-4">Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.81834291167957!2d106.71053227948329!3d10.845957015698625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f05f2302f9f%3A0x8d252d2bb56b804c!2sFPT%20Arena%20Multimedia!5e0!3m2!1svi!2s!4v1700713957518!5m2!1svi!2s"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
