// src/pages/Sports.js
import React from 'react';
import './assets/style.css'; // Assuming you have styles specific to this page
import { Link } from "react-router-dom";
// Importing images
import motorsportImage from './assets/img/servcies/motosports.webp';
import boxingImage from './assets/img/servcies/boxing-gloves-for-speed-bag-training.jpg';
import scubaImage from './assets/img/servcies/scuba.jpg';
import horseRidingImage from './assets/img/servcies/horsethree.webp';
import skyDivingImage from './assets/img/servcies/skydiving.jpg';

const Sports = () => {
    return (
        <div>
            {/* Main Banner Section */}
            <section className="hero-section-sports">
                <div className="hero-overlay-two"></div>
                <div className="container">
                    <div className="hero-content-two text-center">
                        <h1 className="display-4 fw-bold about-heading">Sports Services</h1>
                    </div>
                </div>
            </section>

            {/* Motorsports Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Motorsport</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={motorsportImage} alt="Motorsport" className="img-fluid w-100" />
                    </div>
                </div>
            </div>

            {/* Boxing Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={boxingImage} alt="Boxing" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Boxing</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scuba Diving Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Scuba Diving</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={scubaImage} alt="Scuba Diving" className="img-fluid" />
                    </div>
                </div>
            </div>

            {/* Horse Riding Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={horseRidingImage} alt="Horse Riding" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Horse Riding</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sky Diving Section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Sky Diving</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={skyDivingImage} alt="Sky Diving" className="img-fluid w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;
