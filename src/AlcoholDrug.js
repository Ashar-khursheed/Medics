// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import alcoholTestImage from './assets/img/servcies/alcohol.jpg';
import alcoholTestImage2 from './assets/img/servcies/d2.webp';
import alcoholTestImage3 from './assets/img/servcies/d3.webp';


import { Link } from "react-router-dom";



























const AlcoholDrug = () => {
    return (
        <div>
            <section className="hero-section-drug text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Alcohol and Drug Testing

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
                        <h1 className="mt-3 aboutmainheading">Confidential Alcohol and Drug Testing</h1>
                        <p>Our alcohol and drug testing services provide a quick, reliable, and discreet way to check for substances, whether for personal peace of mind, workplace compliance, or health assessments.</p>
                        <h1 className="mt-3 aboutmainheading">What is Alcohol and Drug Testing?</h1>
                        <p>Alcohol and drug testing involves analyzing samples (e.g., urine, blood, or saliva) to detect recent or ongoing substance use. These tests are often essential for safety in certain workplaces, compliance with regulations, or personal health monitoring.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={alcoholTestImage2} alt="Alcohol and Drug Testing Service" className="img-fluid w-100" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={alcoholTestImage3} alt="Alcohol and Drug Testing Options" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Our Alcohol and Drug Testing Services</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Pre-Employment & Workplace Testing:</b> Ensuring a safe, compliant, and productive work environment.</li>
                            <li><b>Personal Testing:</b> Confidential testing for individuals who want to check their status without involving employers.</li>
                            <li><b>Rapid Results:</b> Fast, accurate results with various testing options to fit your needs.</li>
                            <li><b>DOT-Compliant Testing:</b> For transportation and safety-sensitive industries, meeting all Department of Transportation (DOT) standards.</li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Why Choose Our Alcohol and Drug Testing?</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Quick & Discreet:</b> We respect your privacy, delivering results efficiently with confidentiality.</li>
                            <li><b>Reliable Results:</b> Trusted testing methods for accuracy you can rely on.</li>
                            <li><b>Professional Guidance:</b> Supportive staff available to discuss results and next steps if needed.</li>
                        </ul>
                        <h1 className="mt-3 aboutmainheading">Take Control of Health & Compliance</h1>
                        <p>Our professional alcohol and drug testing services help you maintain safety, meet standards, and make informed decisions. Schedule a test today for accurate, confidential results and peace of mind.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={alcoholTestImage} alt="Confidential Alcohol and Drug Testing Overview" className="img-fluid w-100" />
                    </div>
                </div>
            </div>





        </div>
    );
};

export default AlcoholDrug;


