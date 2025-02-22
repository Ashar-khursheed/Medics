// src/components/AppointmentSection.js

import React from 'react';
import '../assets/style.css'; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";
import bookingImg from '../assets/img/bookingimg.png'; // Adjust the path based on your folder structure

const AppointmentSection = () => {
  return (
    <section className="appointment-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 bookingcolone gap-3 mb-5">
            <h5 className="location-heading d-flex justify-content-left">Book An Appointment</h5>
            <h1 className="location-heading-two d-flex text-start">
              Refresh and Recharge Your Body Schedule Your Appointment Today
            </h1>
            <p className="text-start">
            Refresh and recharge your body—schedule your appointment today for a healthier tomorrow.







            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/about" className="learnmorebtn">Learn More</Link>
              <Link to="/booking-form" className="reservationbtn">Make Reservation</Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img className="dostorsimg" src={bookingImg} alt="book now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
