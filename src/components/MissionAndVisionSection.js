import React from 'react';
import '../assets/style.css';
import { Link } from "react-router-dom";
const MissionAndVisionSection = () => {
  return (
    <section className="custom-section">
      <div className="container custom-container">
        <div className="row">
          {/* Our Mission */}
          <div className="col-lg-8 col-md-12">
            <div className="custom-block mission-bg">
              <div className="missionandvision gap-3">
                {['Our Mission', 'Our Vision'].map((title, index) => (
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
          <Link className="d-flex justify-content-center align-items-center" to="/about">
            <button className="buttonone" type="button">Explore More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVisionSection;
