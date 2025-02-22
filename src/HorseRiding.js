// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import horseRidingImage from './assets/img/servcies/horsethree.webp';

import { Link } from "react-router-dom";








const HorseRiding = () => {
    return (
        <div>
            <section className="hero-section-horse text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Horse Riding
                        </h1>
                        {/* <ul className="list-unstyled d-flex flex-column align-items-start gap-1 mt-3">
                            <li><i className="bi bi-check-circle-fill"></i> Eye Test Included</li>
                            <li><i className="bi bi-check-circle-fill"></i> 40+ Clinics Nationwide</li>
                            <li><i className="bi bi-check-circle-fill"></i> GMC Registered Doctors</li>
                            <li><i className="bi bi-check-circle-fill"></i> 2000+ 5 Star Reviews</li>
                        </ul> */}
                        <Link className='mt-3' to="/booking-form">
                            <button class="buttonone" type="button">Book Now</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* horse Sports section */}

            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={horseRidingImage} alt="Horse Riding" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Therapeutic Benefits of Horseback Riding for Health and Fitness</h1>
                        <p>Horse riding offers a unique approach to physical and mental fitness, promoting balance, core strength, and improved coordination. For individuals recovering from injury or seeking a gentle form of exercise, horseback riding engages multiple muscle groups while enhancing flexibility. Additionally, the emotional connection between rider and horse can relieve stress and boost mental well-being, making it an effective therapy for holistic health.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorseRiding;


