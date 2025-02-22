// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import massageImg from './assets/img/servcies/massage.jpg';
import massageImgTwo from './assets/img/servcies/sp2.webp';
import { Link } from "react-router-dom";
import massageImgThree from './assets/img/servcies/sp3.webp';





















const SportsMassage = () => {
    return (
        <div>
            <section className="hero-section-sp text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Sports Massage
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
                        <h1 className="mt-3 aboutmainheading">Relieve, Recover, Recharge with Our Sports Massage Services</h1>
                        <p>Whether you're an athlete pushing your limits or simply feeling muscle tension from day-to-day activities, our sports massage service is here to help you recover faster, boost performance, and reduce injury risk.</p>
                        <h1 className="mt-3 aboutmainheading">What Is a Sports Massage?</h1>
                        <p>Sports massage is a targeted, therapeutic massage focused on the muscles used in physical activity. It’s designed to ease tension, improve flexibility, and enhance circulation, making it ideal for anyone seeking relief and recovery.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={massageImg} alt="Sports Massage Service" className="img-fluid w-100" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={massageImgTwo} alt="Sports Massage Benefits" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                       

                        <h1 className="mt-3 aboutmainheading">Types of Sports Massage We Offer</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Pre-Event Massage:</b> Get muscles warmed up and flexible before a big event. This light and dynamic massage promotes blood flow and prepares you for peak performance.</li>
                            <li><b>Post-Event Massage:</b> A must for recovery, this deep, slow massage helps ease muscle soreness, reduces lactic acid build-up, and speeds up recovery post-competition or workout.</li>
                            <li><b>Maintenance Massage:</b> Regularly scheduled to keep muscles in top condition, this massage helps prevent injuries and maintains flexibility, so you’re always ready to perform at your best.</li>
                            <li><b>Rehabilitation Massage:</b> A targeted treatment for injury recovery, focused on easing muscle stiffness, breaking down scar tissue, and promoting healing so you can get back to what you love sooner.</li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Benefits of Sports Massage</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Reduce Muscle Tension & Pain:</b> Releases knots and reduces soreness.</li>
                            <li><b>Improve Flexibility:</b> Helps muscles stay limber and resilient.</li>
                            <li><b>Enhance Circulation:</b> Increases blood flow, speeding up recovery.</li>
                            <li><b>Prevent Injury:</b> Regular sessions keep your body in alignment and ready for action.</li>
                        </ul>
                        <h1 className="mt-3 aboutmainheading">Feel the Difference with Our Sports Massage Service</h1>
                        <p>Our tailored sports massages provide just what your body needs—recovery, relaxation, and readiness to
                        take on new challenges. Book your session with us today!</p>

                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={massageImgThree} alt="Sports Massage Benefits Overview" className="img-fluid w-100" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SportsMassage;


