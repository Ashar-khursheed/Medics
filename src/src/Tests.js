// src/pages/Tests.js
import React from 'react';
import './assets/style.css'; // Assuming you have styles specific to this page

// Importing images
import sexualHealthImage from './assets/img/servcies/sexual.jpg';
import bloodTestImage from './assets/img/servcies/bloodtest.webp';
import alcoholTestImage from './assets/img/servcies/alcohol.jpg';
import ecgImage from './assets/img/servcies/ecg.png';
import exerciseEcgImage from './assets/img/servcies/ecgtwo.jpg';

const Tests = () => {
    return (
        <div>
            {/* Main Banner Section */}
            <section className="hero-section-tests">
                <div className="hero-overlay-two"></div>
                <div className="container">
                    <div className="hero-content-two text-center">
                        <h1 className="display-4 fw-bold about-heading">Tests</h1>
                    </div>
                </div>
            </section>

            {/* Sexual Health Screens Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Sexual Health Screens</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={sexualHealthImage} alt="Sexual Health Screens" className="img-fluid w-100" />
                    </div>
                </div>
            </div>

            {/* All Blood Tests Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={bloodTestImage} alt="All Blood Tests" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">All Blood Tests</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Alcohol and Drug Tests Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Alcohol and Drug Tests</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={alcoholTestImage} alt="Alcohol and Drug Tests" className="img-fluid" />
                    </div>
                </div>
            </div>

            {/* Normal ECG Services Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={ecgImage} alt="Normal ECG" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Normal ECG</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Exercise ECG Services Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Exercise ECG</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={exerciseEcgImage} alt="Exercise ECG" className="img-fluid w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tests;
