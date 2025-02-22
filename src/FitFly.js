// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import fitToFlyImage from './assets/img/servcies/fitofly.webp';
import fitToFlyImageTwo from './assets/img/servcies/fit2.webp';
import fitToFlyImageThree from './assets/img/servcies/fly3.webp';
import fitToFlyImageFour from './assets/img/servcies/fly4.webp';
import { Link } from "react-router-dom";













const FitFly = () => {
    return (
        <div>
            <section className="hero-section-fit text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Fit To Fly
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
                        <h1 className="mt-3 aboutmainheading">Ready to Take Off? Secure Your Fit to Fly Letter</h1>
                        <p>Planning an upcoming trip and need to verify your health status for travel? Our Fit to Fly Letter service
                            provides you with an official document confirming that you’re medically fit to travel. Many airlines and
                            destinations now require a Fit to Fly Letter, especially when travelers have pre-existing conditions or
                            recent health concerns.</p>


                        <h1 className="mt-3 aboutmainheading">What Is a Fit to Fly Letter?</h1>
                        <p>A Fit to Fly Letter is a medical document issued by a healthcare professional that confirms you’re in good
                            health and capable of flying safely. It can be essential if you’ve recently had a medical procedure, have a
                            chronic health condition, or are pregnant, as some airlines may request clearance from a doctor.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={fitToFlyImage} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>
                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={fitToFlyImageTwo} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>


                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Why Do You Need a Fit to Fly Letter?</h1>

                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Pre-existing Conditions:</b> If you have a chronic condition, such as heart disease or respiratory
                                issues, a Fit to Fly Letter ensures that you’re stable enough for air travel.</li>

                            <li><b>Recent Surgeries or Medical Procedures:</b> After surgery or significant medical treatments, some
                                travelers are advised to obtain clearance from a healthcare provider.</li>

                            <li><b>Pregnancy:</b> Airlines often require Fit to Fly letters for expectant mothers beyond a certain stage
                                of pregnancy.</li>
                        </ul>




                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>


                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                   

                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">What to Expect from Our Fit to Fly Service</h1>
                        <p>Our Fit to Fly Letter service provides you with a comprehensive health assessment and the necessary
                            documentation for your travel. Here’s what we offer:</p>

                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Quick Assessment:</b> We’ll review your medical history and perform any needed evaluations to
                                confirm your fitness for flying.</li>

                            <li><b>Clear Documentation:</b> You’ll receive an official Fit to Fly Letter, meeting airline and destination
                                requirements.
                            </li>

                            <li><b>Personalized Service:</b> Our team understands the specifics of travel health, so we ensure your
                                letter is tailored to your unique situation.</li>
                        </ul>




                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={fitToFlyImageFour} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>
                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                  



                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={fitToFlyImageThree} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>

                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Benefits of Getting a Fit to Fly Letter Before Travel</h1>
                        <p>A Fit to Fly Letter provides peace of mind, ensuring you’re prepared and have met all medical
                            requirements for your journey. Benefits include:</p>

                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Seamless Check-In:</b> Having your Fit to Fly Letter ready prevents delays and potential issues at
                                the airport.
                               </li>

                            <li><b>Confidence in Your Health:</b> Confirming your fitness to fly means you can relax and enjoy your
                            trip.
                            </li>

                            <li><b>Compliance with Airline Policies:</b> Many airlines have strict health policies, and a Fit to Fly Letter
                            helps ensure you meet them.</li>
                        </ul>

                        <p>Before your next journey, let us help you with a Fit to Fly Letter so you can travel with confidence and
                        focus on what matters—enjoying your trip. Book your Fit to Fly assessment with us today!</p>




                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FitFly;


