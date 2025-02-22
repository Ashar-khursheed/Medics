// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import ambulanceImg from './assets/img/servcies/ambulancetwo.webp';
import ambulanceImgtwo from './assets/img/servcies/amb.jpg';
import { Link } from "react-router-dom";


const AmbulanceMedical = () => {
    return (
        <div>
            <section className="hero-section-amb text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Ambulance Medical</h1>
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
                        <img src={ambulanceImg} alt="Ambulance Medicals" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Kickstart Your Ambulance Career with Our C1 Medical for Student Paramedics</h1>
                        <p>Are you a student paramedic ready to take the next step toward working on an ambulance? If you’re
                            aiming to secure your commercial driving license, a C1 medical assessment is essential to prove you’re
                            medically fit to drive an ambulance. At DriveThruMedics, we specialize in C1/Group 2 medicals for
                            student paramedics and other commercial drivers.</p>


                        <h1 className="mt-3 aboutmainheading">Why Do Student Paramedics Need a C1 Medical?</h1>
                        <p>As a paramedic, safe and reliable driving is a key part of the job, and meeting the DVLA’s medical
                            standards is critical. Our C1 medical ensures you’re fit to handle a commercial vehicle, helping you meet
                            the fitness requirements to drive an ambulance professionally.</p>
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
                        <img src={ambulanceImgtwo} alt="Ambulance Medicals" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmbulanceMedical;
