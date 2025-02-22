// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import boxingImage from './assets/img/servcies/boxing-gloves-for-speed-bag-training.jpg';
import boxingImageTwo from './assets/img/servcies/boxingthree.jpg';
import { Link } from "react-router-dom";




const BoxingSport = () => {
    return (
        <div>
            <section className="hero-section-boxingsports text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Boxing Medical
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

            {/* Boxing Sports section */}

            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={boxingImage} alt="Boxing" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Boxing Medical Exams to Get You Fight-Ready</h1>
                        <p>Whether you’re aiming for amateur competitions or a pro debut, a boxing medical is often required before
                            you can step into the ring. At DriveThruMedics, we offer detailed, affordable medical exams that meet
                            England Boxing standards. Our dedicated doctors are here to ensure you’re ready to compete safely and
                            confidently.</p>


                        <h1 className="mt-3 aboutmainheading">Why Do You Need a Boxing Medical?</h1>
                        <p>Boxing medicals are designed to check that athletes are in peak health, protecting both competitors and
                            their opponents. This assessment helps ensure you’re prepared for the demands of training, sparring,
                            and matches, with a focus on several key areas:</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start gap-4">
                        <ul className="custom-bullets mt-3 gap-4">
                            <li> <b>Cardiovascular Health</b> – Evaluates heart health and stamina for safe, intense physical exertion.</li>
                            <li> <b>Neurological Exam</b> – Checks for any neurological conditions that could pose risks in the ring.</li>
                            <li> <b>Musculoskeletal Health</b> – Ensures that joints and muscles are fit for the rigors of boxing.</li>
                            <li> <b>Overall Physical Fitness –</b> – Confirms general wellness to support agility and endurance.</li>
                        </ul>

                        <h1 className="mt-3 aboutmainheading">Why Choose DriveThruMedics?</h1>


                        <p>With locations across the UK, we make it easy to book a boxing medical close to you. Our clinics offer
                            flexible scheduling and competitive pricing, so you can get the exam you need without breaking the bank.
                            Our experienced, GMC-registered doctors are here to support you through every step, giving you the
                            peace of mind to focus on your sport.</p>

                        <p>Get fight-ready today—book your boxing medical with DriveThruMedics and step into the ring with
                        confidence!</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>


                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={boxingImageTwo} alt="Taxi Medicals" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxingSport;
