import React from 'react';
import '../assets/style.css';
import { Link } from "react-router-dom";
const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row mb-5 d-flex align-items-center">
          <div className="col-lg-7">
            <h1 className="mt-3 medicalservice">
              Follow Easy Process Get The Drive Thru Medic Services
            </h1>
          </div>
          <div className="col-lg-5 para">
            <p>

              Experience seamless healthcare with our simple process—book an appointment, drive to your location, and receive expert medical services without the hassle.
            </p>
          </div>
        </div>
        <hr />
        <div className="row text-center mt-5">
          {[
            { number: '200K', text: 'Join the growing number of patients who trust our convenient and efficient Drive Thru Medic services for their healthcare needs.' },
            { number: '1500 +', text: 'Access a wide range of medical tests, all performed quickly and conveniently, ensuring you get the results you need, right at your doorstep.' },
            { number: '9.9%', text: 'Our customers love the convenience and quality of our services, with a 9.9% satisfaction rate, proving that we are committed to delivering the best in healthcare.' },
            { number: '24/7 Availibility', text: 'We’re here whenever you need us—offering around-the-clock access to medical services, ensuring you’re never left without the care you deserve.' }
          ].map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4 text-center">
              <h2 className="countheading">{item.number}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
