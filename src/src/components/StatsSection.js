import React from 'react';
import '../assets/style.css';
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
              Lorem ipsum dolor sit amet consectetur nibh in et a sem vivamus sed nunc arcu aliquam sed suscipit ut ultricies.
            </p>
          </div>
        </div>
        <hr />
        <div className="row text-center mt-5">
          {[
            { number: '200K', text: 'Lorem ipsum dolor sit amet consectetur nibh in et a sem vivamus sed nunc arcu aliquam sed suscipit ut ultricies.' },
            { number: '1500 +', text: 'Lorem ipsum dolor sit amet consectetur nibh in et a sem vivamus sed nunc arcu aliquam sed suscipit ut ultricies.' },
            { number: '9.9%', text: 'Lorem ipsum dolor sit amet consectetur nibh in et a sem vivamus sed nunc arcu aliquam sed suscipit ut ultricies.' },
            { number: '9.9%', text: 'Lorem ipsum dolor sit amet consectetur nibh in et a sem vivamus sed nunc arcu aliquam sed suscipit ut ultricies.' }
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
