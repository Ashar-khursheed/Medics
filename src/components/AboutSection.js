import React from 'react';
import '../assets/style.css'; // Make sure your CSS file path is correct
import aboutImage from '../assets/img/Aboutus/abouttwo.jpg'; // Adjust image path as per your structure
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section-two">
        {/* <div className="hero-overlay-two"></div> */}
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
            At DriveThruMedics, we are dedicated to transforming healthcare by making it more accessible, efficient, and personalized. Our mission is to provide top-quality medical services in a way that fits seamlessly into your busy life—whether it's at one of our convenient locations or delivered directly to your doorstep.
            </p>
            <p>
            With a focus on convenience, reliability, and compassion, we aim to provide healthcare that works around your schedule, not the other way around. Our team of experienced healthcare professionals is committed to ensuring that every visit is tailored to your specific needs, helping you achieve better health outcomes without the hassle of traditional medical visits.
            </p>
            
            <Link to="/contact">
              <button className="buttonone" type="button">Contact us</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container custom-container">
        <div className="row">
          {/* Our Mission */}
          <div className="col-lg-4 col-md-12">
            <div className="custom-block mission-bg">
              <div className="missionandvision gap-3">
                {['Our Mission'].map((title, index) => (
                  <div key={index} className="custom-block-content">
                    <h3 className="custom-title">{title}</h3>
                    <p className="custom-text">
                      At DriveThruMedics, our vision is to redefine healthcare accessibility by placing quality, convenience, and compassion at the heart of every service we offer. We aspire to be the trusted choice for personalized medical services—whether at our convenient locations or in the comfort of  your own home. By putting clients first in every interaction, we are committed to empowering healthier lives through seamless, on-demand healthcare that meets each individual’s unique needs
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="custom-block mission-bg">
              <div className="missionandvision gap-3">
                {[ 'Our Vision'].map((title, index) => (
                  <div key={index} className="custom-block-content">
                    <h3 className="custom-title">{title}</h3>
                    <p className="custom-text">
                      At DriveThruMedics, our vision is to redefine healthcare accessibility by placing quality, convenience, and compassion at the heart of every service we offer. We aspire to be the trusted choice for personalized medical services—whether at our convenient locations or in the comfort of  your own home. By putting clients first in every interaction, we are committed to empowering healthier lives through seamless, on-demand healthcare that meets each individual’s unique needs
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special Section with CTA */}
          <div className="col-lg-4 col-md-6">
            <div className="custom-block special-bg">
              <div className="custom-block-content">
                <div className="mainone">
                  <div>
                    <h3 className="custom-title">200K</h3>
                  </div>
                  <div>
                    <p className="custom-text">
                      Over 200,000 patients have trusted us for fast, reliable, and high-quality healthcare services, making us a trusted choice for on-the-go medical care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <Link className="d-flex justify-content-center align-items-center" to="/booking-form">
            <button className="buttonone" type="button">Explore More</button>
          </Link>
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
                <i className="bi bi-person-check-fill" style={{ fontSize: '3rem', color: '#004767' }}></i>
              </div>
              <h4 className="font-weight-bold">DRIVING</h4>
              <p className="text-muted">
              Ensure you meet the necessary health requirements for driving with our thorough and efficient driving medical services. We offer quick, reliable assessments to help you stay compliant and safe on the road.
              </p>
            </div>

            {/* Service 2 */}
            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-graph-up" style={{ fontSize: '3rem', color: '#004767' }}></i>
              </div>
              <h4 className="font-weight-bold">SPORT</h4>
              <p className="text-muted">
              Stay at the top of your game with our comprehensive sports medicals. We provide tailored assessments to ensure you're physically fit and ready for any sport, helping you prevent injuries and perform your best.
              </p>
            </div>

            {/* Service 3 */}
            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-people-fill" style={{ fontSize: '3rem', color: '#004767' }}></i>
              </div>
              <h4 className="font-weight-bold">TRAVEL</h4>
              <p className="text-muted">
              Prepare for your next adventure with our travel medicals. We offer health assessments and vaccinations to ensure you're safe and ready for international travel, giving you peace of mind wherever you go.
              </p>
            </div>
          </div>

          {/* Additional Services */}
          <div className="row d-flex flem-column justify-content-center mt-5">
            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-person-check-fill" style={{ fontSize: '3rem', color: '#004767' }}></i>
              </div>
              <h4 className="font-weight-bold">HEALTH AND WELLBEING</h4>
              <p className="text-muted">
              Prioritize your health with our comprehensive health and wellbeing services. From routine check-ups to personalized wellness plans, we help you maintain a balanced lifestyle and optimal health.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-graph-up" style={{ fontSize: '3rem', color: '#004767' }}></i>
              </div>
              <h4 className="font-weight-bold">TESTS</h4>
              <p className="text-muted">
              Get accurate and reliable results with our wide range of medical tests. From routine screenings to specialized diagnostics, we provide insights to help you stay on top of your health.
              </p>
            </div>

            {/* <div className="col-md-4 text-center">
              <div className="icon mb-3">
                <i className="bi bi-people-fill" style={{ fontSize: '3rem', color: '#2be3e0' }}></i>
              </div>
              <h4 className="font-weight-bold">Inclusive Community</h4>
              <p className="text-muted">
                Join a diverse and supportive community of footballers all striving to reach their full potential.
              </p>
            </div> */}
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
