// src/pages/Travel.js
import React from 'react';
import './assets/style.css'; // Assuming you have styles specific to this page
import { Link } from "react-router-dom";
// Importing images
import fitToFlyImage from './assets/img/servcies/fitofly.webp';
import travelVaccinesImage from './assets/img/servcies/vaccines.jpg';

const Travel = () => {
    return (
        <div>
            {/* Main Banner Section */}
            <section className="hero-section-travel">
                <div className="hero-overlay-two"></div>
                <div className="container">
                    <div className="hero-content-two text-center">
                        <h1 className="display-4 fw-bold about-heading">Travel Services</h1>
                    </div>
                </div>
            </section>

            {/* Fit to Fly Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Fit to Fly</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={fitToFlyImage} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>
                </div>
            </div>

            {/* Travel Vaccines Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={travelVaccinesImage} alt="Travel Vaccines" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Travel Vaccines</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;
