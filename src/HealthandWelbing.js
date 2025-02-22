// src/pages/HealthandWellbeing.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import dripsImg from './assets/img/servcies/drips.jpg';
import injectionImg from './assets/img/servcies/injection.webp';
import cuppingImg from './assets/img/servcies/cupping.jpg';
import massageImg from './assets/img/servcies/massage.jpg';
import chiropractorImg from './assets/img/servcies/Cyropractise.webp';
import acupunctureImg from './assets/img/servcies/Accupuncture.webp';
import { Link } from "react-router-dom";
const HealthandWellbeing = () => {
    return (
        <div>
            <section className="hero-section-wellbing">
                <div className="hero-overlay-two"></div>
                <div className="container">
                    <div className="hero-content-two text-center">
                        <h1 className="display-4 fw-bold about-heading">Health and Wellbeing</h1>
                    </div>
                </div>
            </section>

            {/* IV Drips section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">IV Drips</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={dripsImg} alt="IV Drips" className="img-fluid w-100" />
                    </div>
                </div>
            </div>

            {/* Vit B12 Injections section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={injectionImg} alt="Vit B12 Injections" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Vit B12 Injections</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Cupping services section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Cupping</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={cuppingImg} alt="Cupping Services" className="img-fluid" />
                    </div>
                </div>
            </div>

            {/* Sports massages section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={massageImg} alt="Sports Massages" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Sports Massages</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Chiropractic services section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Chiropractic</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={chiropractorImg} alt="Chiropractic Services" className="img-fluid w-100" />
                    </div>
                </div>
            </div>

            {/* Accupuncture services section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={acupunctureImg} alt="Accupuncture" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Accupuncture</h1>
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

export default HealthandWellbeing;
