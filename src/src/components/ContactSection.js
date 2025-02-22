import React from 'react';
import '../assets/style.css'; // Make sure to import your styles
import docimg from '../assets/img/contact/contactimg2.jpg';
const ContactSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section-contact">
        <div className="hero-overlay-two"></div>
        <div className="container">
          <div className="hero-content-two text-center">
            <h1 className="display-4 fw-bold contact-heading">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Bootstrap Contact Us Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            {/* Contact Info Column */}
            <div className="col-lg-6 col-md-12">
              <h1 className="mt-3 aboutmainheading">Get In Touch</h1>
              <p className="lead text-muted">
                Have any questions? We'd love to hear from you! Whether you’re interested in training programs
                or just want to connect, feel free to reach out.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3">
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: '1.5rem', color: '#2BE3E0' }}></i>
                  <span className="ms-2">123 Football Avenue, Sports City, UK</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone-fill" style={{ fontSize: '1.5rem', color: '#2BE3E0' }}></i>
                  <span className="ms-2">+44 123 456 7890</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem', color: '#2BE3E0' }}></i>
                  <span className="ms-2">contact@drivethrumedics.com</span>
                </li>
              </ul>
              <p className="mt-4">
                You can also follow us on social media for the latest updates and training tips.
              </p>
            </div>

            {/* Contact Form Column */}
            <div className="col-lg-6 col-md-12 text-center">
              <img className="contactimg" src={docimg} alt="Contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mt-5 mb-5">
        <div className="container">
          <header className="form-header">
            <h1 className="mt-3 aboutmainheading text-center">Get In Touch</h1>
            <p id="description" className="text-center">
              Thank you for taking the time to help us improve the platform
            </p>
          </header>
          <div className="form-wrap">
            <form id="survey-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="name-label" htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" className="form-control" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <label id="last-name-label" htmlFor="last-name">Last Name</label>
                  <input type="text" className="form-control" id="last-name" placeholder="Your Last Name" required />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <label id="phone" htmlFor="phone">Phone</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" required />
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="email-label" htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" required />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Leave Message</label>
                    <textarea id="comments" className="form-control" name="comment" placeholder="Enter your comment here..."></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mt-4">
                  <button className="buttonone" type="submit">Submit Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
