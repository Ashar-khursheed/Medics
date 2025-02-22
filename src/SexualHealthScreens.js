// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import sexualHealthImage from './assets/img/servcies/sexual.jpg';
import sexualHealthImage2 from './assets/img/servcies/sexu2.webp';
import sexualHealthImage3 from './assets/img/servcies/sexu3.webp';


import { Link } from "react-router-dom";























const SexualHealthScreens = () => {
    return (
        <div>
            <section className="hero-section-sexual text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Sexual Health Screening 

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
                        <h1 className="mt-3 aboutmainheading">Confidential Sexual Health Screening</h1>
                        <p>Taking charge of your sexual health is a key part of overall wellness. Our private and discreet sexual health screening services offer comprehensive tests to help you stay informed, healthy, and confident.</p>
                        <h1 className="mt-3 aboutmainheading">What is a Sexual Health Screen?</h1>
                        <p>A sexual health screen tests for various infections that can affect your wellbeing. Early detection and treatment are important, as many sexually transmitted infections (STIs) may not show symptoms but can still impact your health over time.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={sexualHealthImage2} alt="Sexual Health Screening Service" className="img-fluid w-100" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={sexualHealthImage} alt="Benefits of Sexual Health Screening" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Our Sexual Health Screening Services</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Comprehensive STI Panels:</b> Covers common infections, including chlamydia, gonorrhea, and HIV, giving you a thorough picture of your sexual health.</li>
                            <li><b>Targeted Screening:</b> Test for specific concerns, like syphilis, herpes, or hepatitis, based on your needs and health history.</li>
                            <li><b>Quick & Confidential Results:</b> Get fast, reliable results with full confidentiality, allowing you to take action if necessary.</li>
                            <li><b>Advice & Follow-Up:</b> Our team provides guidance based on your results and can offer next steps, including treatment options and further support.</li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Why Choose Us for Sexual Health Screening?</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Discreet and Private Service:</b> We prioritize your privacy at every step.</li>
                            <li><b>Comprehensive Options:</b> Tailored screening based on individual needs and concerns.</li>
                            <li><b>Professional Support:</b> Caring, knowledgeable staff ready to answer questions and provide support.</li>
                        </ul>
                        <h1 className="mt-3 aboutmainheading">Take Charge of Your Health</h1>
                        <p>Knowing your sexual health status brings peace of mind and supports your wellbeing. Book your screening today for a confidential, easy experience with results you can trust.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={sexualHealthImage3} alt="Confidential Sexual Health Screening Overview" className="img-fluid w-100" />
                    </div>
                </div>
            </div>




        </div>
    );
};

export default SexualHealthScreens;


