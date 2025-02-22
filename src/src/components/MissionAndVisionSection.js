import React from 'react';
import '../assets/style.css';
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
                      Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.
                      Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.
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
                      Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <Link className="d-flex justify-content-center align-items-center" to="#">
            <button className="buttonone" type="button">Explore More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVisionSection;
