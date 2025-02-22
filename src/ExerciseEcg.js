// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import exerciseEcgImage from './assets/img/servcies/ecgtwo.jpg';
import exerciseEcgImage2 from './assets/img/servcies/exe2.webp';
import exerciseEcgImage4 from './assets/img/servcies/exe5.webp';


import { Link } from "react-router-dom";






























const ExerciseEcg = () => {
    return (
        <div>
            <section className="hero-section-exe text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Exercise ECG

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
                        <h1 className="mt-3 aboutmainheading">Exercise ECG Test</h1>
                        <p>Our Exercise ECG (Electrocardiogram) test is a powerful tool to assess heart health and monitor how well it responds under physical stress. Often called a “stress test,” this evaluation helps identify potential issues that might not be visible while at rest.</p>
                        <h1 className="mt-3 aboutmainheading">What Does an Exercise ECG Involve?</h1>
                        <p>Heart Monitoring Under Exercise: This test records your heart's electrical activity while walking or jogging on a treadmill.</p>
                        <p>Blood Pressure and Rhythm Tracking: Throughout the test, we monitor blood pressure and heart rhythm to ensure comprehensive insights.</p>
                        <p>Gradual Intensity: The treadmill speed and incline gradually increase, simulating how your heart performs during different levels of exertion.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={exerciseEcgImage2} alt="Exercise ECG Service" className="img-fluid w-100" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={exerciseEcgImage} alt="Exercise ECG Test Options" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Why Take an Exercise ECG?</h1>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Identify Hidden Cardiac Issues:</b> Some heart problems only emerge under physical stress, so the Exercise ECG helps pinpoint these.</li>
                            <li><b>Assess Cardiovascular Health:</b> Especially beneficial for those with risk factors like high blood pressure, chest pain, or a family history of heart disease.</li>
                            <li><b>Prepare for Physical Activity:</b> For anyone considering a new fitness program, this test can help ensure your heart is ready for increased activity.</li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Safe, Expert-Led Testing</h1>
                        <p>Our skilled professionals guide you through the Exercise ECG test, ensuring comfort and safety. Results are analyzed to give you and your doctor a clear picture of your cardiovascular health, helping you make informed choices about exercise and lifestyle.</p>
                        <h1 className="mt-3 aboutmainheading">Get Your Heart Health Check Today</h1>
                        <p>Book your Exercise ECG appointment today and take a step towards a healthier, more active life.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={exerciseEcgImage4} alt="Exercise ECG Overview" className="img-fluid w-100" />
                    </div>
                </div>
            </div>






        </div>
    );
};

export default ExerciseEcg;


