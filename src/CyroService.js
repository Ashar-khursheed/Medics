// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import chiropractorImg from './assets/img/servcies/Cyropractise.webp';
import chiropractorImg2 from './assets/img/servcies/ciro1.webp';
import chiropractorImg3 from './assets/img/servcies/ciro2.webp';
import { Link } from "react-router-dom";























const CyroService = () => {
    return (
        <div>
            <section className="hero-section-ciro text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Chiropractic Services
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
                        <h1 className="mt-3 aboutmainheading">Realign, Restore, and Revitalize with Our Chiropractic Services</h1>
                        <p>If you're dealing with chronic pain, recovering from an injury, or just looking to maintain optimal health, our chiropractic care can help you feel better and function at your best. Our treatments are designed to support your spine, improve alignment, and relieve tension throughout the body.</p>
                        <h1 className="mt-3 aboutmainheading">What Is Chiropractic Care?</h1>
                        <p>Chiropractic care focuses on diagnosing and treating musculoskeletal issues, especially those affecting the spine. By realigning the spine, chiropractic adjustments help reduce pain, improve mobility, and enhance overall wellness.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={chiropractorImg} alt="Chiropractic Service" className="img-fluid w-100" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={chiropractorImg2} alt="Chiropractic Benefits" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Our Chiropractic Treatments</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Spinal Adjustments:</b> Gently realigns the spine to reduce nerve pressure, relieve pain, and restore balance to your body.</li>
                            <li><b>Soft Tissue Therapy:</b> Targets tight or sore muscles to improve circulation, release tension, and support recovery.</li>
                            <li><b>Joint Mobilization:</b> Gentle movements that restore flexibility and improve joint function, great for managing stiffness or chronic pain.</li>
                            <li><b>Rehabilitation Exercises:</b> Personalized routines to support long-term spine health, strengthen muscles, and prevent re-injury.</li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Benefits of Chiropractic Care</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Pain Relief:</b> Reduces chronic and acute pain without medications.</li>
                            <li><b>Improved Mobility:</b> Increases flexibility and range of motion.</li>
                            <li><b>Better Posture:</b> Realigns the spine to support a healthier posture.</li>
                            <li><b>Enhanced Wellness:</b> Boosts overall well-being by relieving physical stress.</li>
                        </ul>
                        <h1 className="mt-3 aboutmainheading">Feel the Difference with Chiropractic Care</h1>
                        <p>Our chiropractic team is here to help you realign and restore your health, so you can move, work, and live pain-free. Book your chiropractic session with us today!</p>

                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={chiropractorImg3} alt="Chiropractic Benefits Overview" className="img-fluid w-100" />
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CyroService;


