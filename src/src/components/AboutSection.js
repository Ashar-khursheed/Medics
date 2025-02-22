import React from 'react';
import '../assets/style.css'; // Make sure your CSS file path is correct
import aboutImage from '../assets/img/Aboutus/abouttwo.jpg'; // Adjust image path as per your structure

const AboutSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section-two">
        <div className="hero-overlay-two"></div>
        <div className="container">
          <div className="hero-content-two text-center">
            <h1 className="display-4 fw-bold about-heading">About us</h1>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <div className="container about-section mt-5 mb-5">
        <div className="row justify-content-center align-items-center mt-3 doctorsrow">
          <div className="col-lg-6 col-md-10 doctors-image">
            <img src={aboutImage} alt="Doctors" className="img-fluid" />
          </div>

          <div className="col-lg-6 col-md-10 text-start">
            <h5 className="location-heading d-flex justify-content-center">About Drive Thru Medics</h5>
            <h1 className="mt-3 aboutmainheading">Services Designed To Meet Your Needs</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.


            </p>
            <Link to="#">
              <button className="buttonone" type="button">Contact us</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex flex-column justify-content-center align-items-center text-center mt-5">
            <h5 className="services-heading d-flex justify-content-center">About Drive Thru Medics</h5>
            <h1 className="mt-3 aboutmainheading">Services Designed To Meet Your Needs</h1>
          </div>

          <div className="row mt-5">
            {/* Service 1 */}
            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-person-check-fill" style={{ fontSize: '3rem', color: '#2be3e0' }}></i>
              </div>
              <h4 className="font-weight-bold">DRIVING</h4>
              <p className="text-muted">
                Our coaches bring years of experience, helping you sharpen your skills with personalized training plans.
              </p>
            </div>

            {/* Service 2 */}
            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-graph-up" style={{ fontSize: '3rem', color: '#2be3e0' }}></i>
              </div>
              <h4 className="font-weight-bold">SPORT</h4>
              <p className="text-muted">
                Our proven methods lead to real improvements in both performance and confidence on the pitch.
              </p>
            </div>

            {/* Service 3 */}
            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-people-fill" style={{ fontSize: '3rem', color: '#2be3e0' }}></i>
              </div>
              <h4 className="font-weight-bold">TRAVEL</h4>
              <p className="text-muted">
                Join a diverse and supportive community of footballers all striving to reach their full potential.
              </p>
            </div>
          </div>

          {/* Additional Services */}
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-person-check-fill" style={{ fontSize: '3rem', color: '#2be3e0' }}></i>
              </div>
              <h4 className="font-weight-bold">HEALTH AND WELLBEING</h4>
              <p className="text-muted">
                Our coaches bring years of experience, helping you sharpen your skills with personalized training plans.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-graph-up" style={{ fontSize: '3rem', color: '#2be3e0' }}></i>
              </div>
              <h4 className="font-weight-bold">TESTS</h4>
              <p className="text-muted">
                Our proven methods lead to real improvements in both performance and confidence on the pitch.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-people-fill" style={{ fontSize: '3rem', color: '#2be3e0' }}></i>
              </div>
              <h4 className="font-weight-bold">Inclusive Community</h4>
              <p className="text-muted">
                Join a diverse and supportive community of footballers all striving to reach their full potential.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row text-center mt-5 mb-5">
            <Link to="#">
              <button className="buttonone" type="button">View All Services</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
