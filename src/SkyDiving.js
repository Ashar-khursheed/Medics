// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import skyDivingImage from './assets/img/servcies/skydiving.jpg';
import skyDivingImageTwo from './assets/img/servcies/skyddd.webp';


import { Link } from "react-router-dom";








const SkyDiving = () => {
    return (
        <div>
            <section className="hero-section-sky text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Sky Diving Medical
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
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Skydiving Medical Assessment</h1>
                        <p>Dreaming of soaring through the skies? Before you jump, a Skydiving Medical Assessment ensures
                        you're physically prepared for the adrenaline rush and unique pressures of high-altitude diving.</p>


                        <h1 className="mt-3 aboutmainheading">Why Get a Skydiving Medical?</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Safety in Extreme Conditions:</b>Skydiving puts unique stress on your heart and lungs, so a
                            health check is essential to keep you safe.</li>

                            <li><b>Meet Skydiving Standards:</b>Ensure you meet fitness standards required by diving organizations
                            so you’re cleared for take-off.</li>

                            <li><b>Optimize Your Dive:</b>Know your body is ready for the altitude changes, excitement, and thrill of the jump</li>
                            
                        </ul>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={skyDivingImage} alt="Sky Diving" className="img-fluid w-100" />
                    </div>
                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={skyDivingImageTwo} alt="Sky Diving" className="img-fluid w-100" />
                    </div>


                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Quick, Clear, Ready for the Skies</h1>
                        <p>Our efficient and professional medical check will get you ready to take that leap! Book your skydiving
                        medical today and get cleared for an adventure of a lifetime.</p>                        
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkyDiving;


