// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import bloodTestImage from './assets/img/servcies/bloodtest.webp';
import bloodTestImage2 from './assets/img/servcies/blood2.webp';
import bloodTestImage3 from './assets/img/servcies/blood3.webp';
import { Link } from "react-router-dom";



























const BloodTests = () => {
    return (
        <div>
            <section className="hero-section-blood text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Blood Tests

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
                        <h1 className="mt-3 aboutmainheading">Comprehensive Blood Test Services</h1>
                        <p>Our blood test services offer a convenient, accurate way to gain insight into your health. From routine check-ups to specialized tests, we cover a wide range of health markers to help you stay informed and proactive about your well-being.</p>
                        <h1 className="mt-3 aboutmainheading">What Blood Tests Do We Offer?</h1>
                        <p>We offer a variety of blood tests designed to give you a detailed view of your health status. Early detection and regular monitoring can help you take charge of your well-being.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={bloodTestImage} alt="Blood Test Service" className="img-fluid w-100" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={bloodTestImage2} alt="Blood Test Options" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Our Blood Test Options</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Routine Health Check-Up:</b> Includes full blood count, cholesterol levels, blood sugar, and more for general health assessment.</li>
                            <li><b>Hormone Tests:</b> Essential for checking thyroid function, reproductive health, or hormone imbalances.</li>
                            <li><b>Vitamin and Mineral Screening:</b> Assess your levels of vitamin B12, vitamin D, iron, and other critical nutrients.</li>
                            <li><b>Allergy Testing:</b> Identify specific allergens for food sensitivities, environmental allergies, and more.</li>
                            <li><b>Liver and Kidney Function:</b> Detect early signs of liver or kidney issues to keep your health on track.</li>
                            <li><b>Comprehensive Metabolic Panel (CMP):</b> Covers blood glucose, electrolytes, and fluid balance for a full metabolic health picture.</li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Why Choose Us for Your Blood Tests?</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Fast, Reliable Results:</b> Quick turnaround times with accurate, trusted laboratory analyses.</li>
                            <li><b>Convenient Appointments:</b> Schedule a time that works best for you for an easy, stress-free experience.</li>
                            <li><b>Clear Explanations:</b> Receive detailed results with guidance, so you understand each marker and what it means for your health.</li>
                        </ul>
                        <h1 className="mt-3 aboutmainheading">Proactive Health, Made Easy</h1>
                        <p>With our comprehensive blood testing services, you can stay on top of your health and detect potential issues early. Book your blood test today to start making informed choices for a healthier tomorrow.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={bloodTestImage3} alt="Comprehensive Blood Test Overview" className="img-fluid w-100" />
                    </div>
                </div>
            </div>





        </div>
    );
};

export default BloodTests;


