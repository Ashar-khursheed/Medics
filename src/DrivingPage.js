// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import drivingImg from './assets/img/servcies/driving.jpg';
import ambulanceImg from './assets/img/servcies/ambulancetwo.webp';
import taxiImg from './assets/img/servcies/taxi.jfif';
import hgvImg from './assets/img/servcies/hgccc2.webp';
import { Link } from "react-router-dom";
const DrivingPage = () => {
    return (
        <div>
            <section className="hero-section-driving">
                <div className="hero-overlay-two"></div>
                <div className="container">
                    <div className="hero-content-two text-center">
                        <h1 className="display-4 fw-bold about-heading">Taxi Medical</h1>
                    </div>
                </div>
            </section>

            {/* Driver Medicals section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Taxi Medical Exams for Drivers</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={drivingImg} alt="Driving Medicals" className="img-fluid" />
                    </div>
                </div>
            </div>

            {/* Ambulance Medicals section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={ambulanceImg} alt="Ambulance Medicals" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Ambulance Medicals</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Taxi Medicals section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Taxi Medicals</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={taxiImg} alt="Taxi Medicals" className="img-fluid" />
                    </div>
                </div>
            </div>

            {/* HGV/LGV Medicals section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={hgvImg} alt="HGV/LGV Medicals" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">HGV/LGV Medicals</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s...</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrivingPage;
