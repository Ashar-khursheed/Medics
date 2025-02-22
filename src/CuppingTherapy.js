// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import cuppingImg from './assets/img/servcies/cupping.jpg';
import cuppingImgTwo from './assets/img/servcies/cup2.webp';

import cuppingImgThree from './assets/img/servcies/cup3.webp';


import { Link } from "react-router-dom";

















const CuppingTherapy = () => {
    return (
        <div>
            <section className="hero-section-cup text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Cupping Therapy Service
                        </h1>
                        {/* <ul className="list-unstyled d-flex flex-column align-items-start gap-1 mt-3">
                            <li><i className="bi bi-check-circle-fill"></i> Eye Test Included</li>
                            <li><i className="bi bi-check-circle-fill"></i> 40+ Clinics Nationwide</li>
                        </ul> */}
                        <Link className='mt-3' to="/booking-form">
                            <button class="buttonone" type="button">Book Now</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Iv drip to fly Sports section */}

            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Cupping Therapy Service</h1>
                        <p>Looking for a holistic approach to wellness? Our Cupping Therapy Service offers both wet and dry
                            cupping options to help you relax, recover, and rejuvenate.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={cuppingImg} alt="Vitamin B12 Injections" className="img-fluid w-100" />
                    </div>
                </div>




                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={cuppingImgTwo} alt="Vitamin B12 Benefits" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">What is Cupping Therapy?</h1>


                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Promotes Relaxation:</b> Cupping creates a gentle suction on the skin, enhancing blood flow and
                                relieving tension in muscles.</li>
                            <li><b>Detoxifies the Body:</b> The therapy helps draw out toxins and improve circulation, promoting
                                overall health.
                            </li>


                        </ul>

                        <h1 className="mt-3 aboutmainheading">Types of Cupping Offered:</h1>

                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Dry Cupping:</b> A popular method where cups are applied to the skin without any incisions. Ideal
                                for muscle tension relief and relaxation.</li>
                            <li><b>Wet Cupping:</b> Involves slight incisions on the skin followed by suction. This method helps remove
                                stagnant blood and toxins, aiding in faster recovery.
                            </li>


                        </ul>

                    </div>
                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">

                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading"> Experience the Benefits
                        </h1>

                        <p>Whether you're an athlete looking to enhance performance or simply seeking relief from stress, our
                            cupping therapy can help. Book your session today and discover the rejuvenating effects of cupping!
                            4o mini</p>
                        
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={cuppingImgThree} alt="Vitamin B12 Health Support" className="img-fluid w-100" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CuppingTherapy;


