// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import taxiImg from './assets/img/servcies/taxi.jfif';
import taxiImgtwo from './assets/img/servcies/taxitwo.jpg'
import { Link } from "react-router-dom";


const TaxiMedical = () => {
    return (
        <div>
            <section  className="hero-section-taxi text-white" >
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Taxi Medicals</h1>
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
            <div className="container servicess-section mt-5 mb-5" id="taxi-section">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start gap-2">
                        <h1 className="mt-3 aboutmainheading">Taxi Medical Exams for Drivers</h1>
                        <p>If you’re a taxi driver needing a medical exam to prove your fitness to drive, DriveThruMedics offers a
                            straightforward solution. Local councils require these assessments to ensure drivers meet essential
                            health and safety standards. We provide affordable taxi medical exams across the UK to help you meet
                            licensing requirements with ease and efficiency.</p>
                        <h1 className="mt-3 aboutmainheading">What’s Involved in a Taxi Medical?</h1>
                        <p>Our assessments are completed by GMC-registered doctors and are designed to meet the Group 2
                            medical standards required for licensed drivers. Typically, your exam will include:</p>
                        <ul className="custom-bullets mt-3 gap-2">
                            <li>A review of your medical history</li>
                            <li>Physical assessments such as height, weight, blood pressure, and heart rate</li>
                            <li>A vision check to assess sharpness and peripheral vision</li>
                            <li>ID verification, including proof of address</li>
                        </ul>

                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={taxiImg} alt="Taxi Medicals" className="img-fluid" />
                    </div>
                </div>





                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={taxiImgtwo} alt="Taxi Medicals" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start gap-4">
                        <h1 className="mt-3 aboutmainheading">Why Choose DriveThruMedics?</h1>
                        <p>With a fee of just £15, our taxi medical exams are competitively priced, and we offer flexible
                            appointments, including evenings and weekends. With clinics in key cities across the country, we make it
                            convenient for you to get the assessment you need, wherever you’re located. Our service works with
                            various councils, so you can be confident that our exams meet council standards.</p>
                        <p>Choose DriveThruMedics for a quick, reliable, and affordable taxi medical that keeps you safely on the
                        road.</p>
                        <Link className="mt3" to="/bookingform">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaxiMedical;
