// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import motorsportImage from './assets/img/servcies/motosports.webp';

import { Link } from "react-router-dom";


const MotorSports = () => {
    return (
        <div>
            <section className="hero-section-motorsports text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Motor Sports
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

            {/* Motor Sports section */}

            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Get Ready for the Track with Motorsport Medicals</h1>
                        <p>When it’s time to hit the track, a Motorsport Medical is a crucial step in ensuring you’re fit and race-ready.
                            At DriveThruMedics we provide comprehensive and affordable medical assessments for motorsport
                            enthusiasts, meeting the requirements set by the Motor Sports Association (MSA) in the UK. With clinics
                            across the country, from Manchester</p>
                        <h1 className="mt-3 aboutmainheading">What is an MSA Motorsport Medical?</h1>
                        <p>An MSA Motorsport Medical is a detailed health check required for anyone pursuing a motorsport license,
                            covering both national and international MSA race licenses. This assessment is designed to confirm that
                            drivers meet the essential health standards needed for safe and competitive racing.</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={motorsportImage} alt="Motorsport" className="img-fluid w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotorSports;
