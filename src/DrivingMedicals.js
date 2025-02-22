// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import drivingImg from './assets/img/servcies/driving.jpg';
import { Link } from "react-router-dom";


const DrivingMedicals = () => {
    return (
        <div>
            <section className="hero-section-driving text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Driver Medicals</h1>
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

            {/* Driver Medicals section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Driver Medicals</h1>
                        <p>At DriveThruMedics, we provide comprehensive driver medicals to ensure that individuals meet the necessary health requirements for safe driving. Whether you're a commercial driver, applying for a private vehicle license, or need medical clearance for your job, our experienced team is here to assist. Our services include assessments for both commercial drivers (such as truck, bus, and taxi drivers) and private drivers, ensuring they meet the health standards needed for safe vehicle operation. For those with existing health conditions, we offer specialized evaluations to ensure you meet the necessary safety standards. With convenient online booking, fast processing, and professional, confidential service, DriveThruMedics makes it easy to get the medical clearance you need to stay safe on the road. Book your driver medical today and drive with confidence.</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={drivingImg} alt="Driving Medicals" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrivingMedicals;
