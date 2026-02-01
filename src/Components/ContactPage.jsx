import React from "react";
import { FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section 
      className="py-5 mt-5 py-md-5 bg-light min-vh-100 d-flex align-items-center"
      style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}
    >
      <div className="container">
        {/* Social Icons Section */}
        <div className="mb-5 text-center">
          <h2 className="display-5 fw-bold mb-4 py-3">Connect With Us</h2>

          <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center">
            {/* WhatsApp */}
            <div className="col">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card h-100 shadow border-0 text-center transition-all hover-lift rounded-4 p-4">
                  <FaWhatsapp className="display-1 text-success mb-3" />
                  <h5 className="card-title fw-semibold mb-1">+91 75209 65082</h5>
                  <p className="text-muted small mb-0">WhatsApp</p>
                </div>
              </a>
            </div>

            {/* Instagram */}
            <div className="col">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card h-100 shadow border-0 text-center transition-all hover-lift rounded-4 p-4">
                  <FaInstagram className="display-1 text-danger mb-3" />
                  <h5 className="card-title fw-semibold mb-1">@AetherTalk</h5>
                  <p className="text-muted small mb-0">Instagram</p>
                </div>
              </a>
            </div>

            {/* Telegram */}
            <div className="col">
              <a
                href="#" // Update if you have real link
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card h-100 shadow border-0 text-center transition-all hover-lift rounded-4 p-4">
                  <FaTelegram className="display-1 text-primary mb-3" />
                  <h5 className="card-title fw-semibold mb-1">Aether Talk</h5>
                  <p className="text-muted small mb-0">Telegram</p>
                </div>
              </a>
            </div>

            {/* Twitter / X */}
            <div className="col">
              <a
                href="#" // Update if you have real link
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card h-100 shadow border-0 text-center transition-all hover-lift rounded-4 p-4">
                  <FaTwitter className="display-1 text-info mb-3" />
                  <h5 className="card-title fw-semibold mb-1">Shoes Factory</h5>
                  <p className="text-muted small mb-0">X / Twitter</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="text-center">
          <h2 className="display-5 fw-bold mb-3">Contact Us For More Info</h2>
          <p className="lead text-muted mb-4">
            Subscribe with your email to get latest updates, offers and more.
          </p>

          <form 
            onSubmit={(e) => e.preventDefault()} // Replace with real handler later
            className="mx-auto"
            style={{ maxWidth: "500px" }}
          >
            <div className="input-group input-group-lg">
              <input
                type="email"
                className="form-control rounded-pill rounded-end-0 ps-4"
                placeholder="Enter your email address"
                aria-label="Email address"
                required
              />
              <button 
                className="btn contact-btn rounded-pill rounded-start-0 px-5 fw-medium"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Optional custom CSS for hover effect */}
      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.12) !important;
        }
      `}</style>
    </section>
  );
};

export default ContactPage;