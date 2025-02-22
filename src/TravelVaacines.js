// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import travelVaccinesImage from './assets/img/servcies/vaccines.jpg';
import travelVaccinesImagetwo from './assets/img/servcies/travel2.webp';
import travelVaccinesImagethree from './assets/img/servcies/travel3.webp';


import { Link } from "react-router-dom";














const TravelVaacines = () => {
    return (
        <div>
            <section className="hero-section-travel text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Travel Vaacines
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

            {/* Fit to fly Sports section */}

            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Stay Protected with Our Travel Vaccination Services</h1>
                        <p>Planning an international trip? Travel vaccines are essential to protect yourself from infections and
                            ensure a healthy, worry-free journey. We offer a comprehensive range of vaccines tailored to your
                            destination, travel plans, and health needs.</p>


                        <h1 className="mt-3 aboutmainheading">What Are Travel Vaccines?</h1>
                        <p>Travel vaccines protect you from diseases that may be common in certain regions but rare at home.
                            These vaccinations help your immune system recognize and fight off specific infections, giving you the
                            confidence to travel safely.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={travelVaccinesImage} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>
                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={travelVaccinesImagetwo} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>


                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Our Travel Vaccination Services</h1>

                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Hepatitis A & B:</b> Protection against these liver infections, commonly contracted through
                                contaminated food and water.</li>


                            <li><b>Typhoid:</b> A must for areas with poor sanitation; protects you from typhoid fever, often spread
                                through food and drink.</li>

                            <li><b>Yellow Fever:</b> Required for certain countries; protects against a viral disease spread by
                                mosquitoes in tropical areas.</li>

                            <li><b>Japanese Encephalitis:</b> Recommended for extended stays in rural areas in Asia; prevents
                                mosquito-borne brain infection.</li>
                        </ul>




                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">




                

                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Why Choose Us for Travel Vaccines?</h1>


                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Destination-Specific Advice:</b>Our team advises you on the vaccines you need based on where
                                you're going.
                             
                            </li>

                            <li><b> Quick and Convenient Appointments: </b> Schedule your vaccinations with ease, ensuring you’re
                            prepared before departure.
                            </li>

                            <li><b>Record-Keeping:</b> We’ll provide you with all the necessary documentation, including vaccine
                            certificates for entry requirements.</li>
                        </ul>

                        <p>Protect yourself before you go abroad. Book your travel vaccines with us today to ensure a healthy,
                        enjoyable adventure!</p>




                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={travelVaccinesImagethree} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default TravelVaacines;


