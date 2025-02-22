// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import hgvImg from './assets/img/servcies/hgvshort.webp';
import hgvImgTwo from './assets/img/servcies/hgvimages.jpg';

import { Link } from "react-router-dom";


const HgvMedicals = () => {
    return (
        <div>
            <section className="hero-section-hgv text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">HGV/LGV Medicals
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

            {/* Driver Medicals section */}
            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={hgvImg} alt="Ambulance Medicals" className="w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">HGV Medical Exams for Drivers</h1>
                        <p>To keep HGV drivers safe on the road, periodic medical exams are essential. These exams, also known
                            as D4 medicals, ensure that drivers meet the health and safety standards required for heavy goods
                            vehicle operation. DriveThruMedics offers convenient and affordable HGV medicals, helping drivers
                            maintain compliance with ease.</p>

                        <p>When Do I Need to Renew My HGV Medical?</p>
                        <p>HGV drivers are required to have regular medical assessments to maintain their license, based on the
                        following schedule:</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>




                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Kickstart Your Ambulance Career with Our C1 Medical for Student Paramedics</h1>
                        <p>Are you a student paramedic ready to take the next step toward working on an ambulance? If you’re
                            aiming to secure your commercial driving license, a C1 medical assessment is essential to prove you’re
                            medically fit to drive an ambulance. At DriveThruMedics, we specialize in C1/Group 2 medicals for
                            student paramedics and other commercial drivers.</p>


                        <h1 className="mt-3 aboutmainheading">Book Your C1 Medical and Start Your Paramedic Career</h1>
                        <p>Your C1 medical certificate is a vital step toward obtaining your commercial driver’s license and
                            beginning your career on the frontline of healthcare. At DriveThruMedics, we make the process smooth
                            and straightforward, getting you ready to join the ambulance service with confidence.</p>
                        <Link className="mt3" to="#">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={hgvImgTwo} alt="hgv Medicals" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HgvMedicals;
