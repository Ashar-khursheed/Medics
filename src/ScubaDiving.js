// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import scubaImage from './assets/img/servcies/scuba.jpg';
import scubaImageTwo from './assets/img/servcies/scuba2.webp';
import scubaImageThree from './assets/img/servcies/scubathree.webp';
import scubaImageFour from './assets/img/servcies/scubafour.webp';

import { Link } from "react-router-dom";






const ScubaDiving = () => {
    return (
        <div>
            <section className="hero-section-scuba text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Scuba Diving
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
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Get Ready to Dive with a Scuba Diving Medical</h1>
                        <p>For anyone eager to explore the depths of the ocean, a scuba diving medical ensures you’re fit and
                            ready for underwater adventure. At DriveThruMedics, we provide comprehensive scuba diving medicals
                            that meet the standards required by organizations like the Professional Association of Diving Instructors
                            (PADI), so you can dive safely and confidently.</p>

                        <h1 className="mt-3 aboutmainheading">GWhy is a Scuba Diving Medical Important?</h1>
                        <p>Scuba diving presents unique physical challenges due to pressure, depth, and underwater conditions.
                            The medical exam is designed to check for any health concerns that might interfere with safe diving.
                            Whether you’re aiming to become a certified instructor or simply diving for fun, the scuba diving medical
                            helps identify potential risks, ensuring you’re in optimal health for the dive.</p>



                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={scubaImage} alt="Scuba Diving" className="img-fluid" />
                    </div>
                </div>




                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={scubaImageTwo} alt="Taxi Medicals" className="img-fluid w-100" />
                    </div>

                    <div className="col-lg-6 col-md-10 text-start gap-4">
                        <h1 className="mt-3 aboutmainheading">When Do You Need a Scuba Diving Medical?</h1>

                        <ul className="custom-bullets mt-3 gap-4">
                            <li> <b>Before Starting:</b> – If you’re new to diving or working towards certification, an initial medical exam is
                                typically required.</li>
                            <li> <b>Renewals:</b> – Some certifications and dive schools may also require periodic renewals to ensure
                                continued fitness for diving.</li>

                        </ul>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>

                </div>


                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start gap-4">
                        <h1 className="mt-3 aboutmainheading">What’s Included in a Scuba Diving Medical?</h1>

                        <p>Our comprehensive scuba diving medical exam covers everything you need to meet diving health
                            standards:</p>
                        <ul className="custom-bullets mt-3 gap-4">
                            <li> <b>Medical History Review</b> – – Going over your past health records to check for any conditions that might affect diving.</li>
                            <li> <b>Physical Examination –</b> – Assessing height, weight, blood pressure, and other key indicators.</li>
                            <li> <b>Cardiovascular and Respiratory Checks–</b> – Ensuring strong heart and lung function for
                                underwater endurance.</li>
                            <li> <b>Vision Test</b>– Verifying visual acuity, which is essential for safe diving.</li>
                            <li> <b>Additional Testing</b> – As required by PADI or other diving organizations.</li>

                        </ul>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>


                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={scubaImageThree} alt="Taxi Medicals" className="img-fluid w-100" />
                    </div>

                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                   <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={scubaImageFour} alt="Taxi Medicals" className="img-fluid w-100" />
                    </div>


                    <div className="col-lg-6 col-md-10 text-start gap-4">
                        <h1 className="mt-3 aboutmainheading">Why Choose DriveThruMedics?</h1>

                        <p>We make scuba diving medicals simple and affordable. Our clinics are available nationwide, with flexible
                            scheduling to suit you. For only £20, you’ll have a complete medical assessment that’s recognized by
                            leading dive organizations, ensuring you’re fit for the challenges of the underwater world.</p>


                        <h1 className="mt-3 aboutmainheading">Book Your Scuba Diving Medical Today!</h1>

                        <p>Ready to start your underwater journey? Book a scuba diving medical with [Your Company Name] and
                        dive with confidence!</p>

                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ScubaDiving;


