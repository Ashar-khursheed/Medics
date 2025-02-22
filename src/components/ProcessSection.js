// src/ProcessSection.js
import React from 'react';
import '../assets/style.css';
import docimg from '../assets/img/bannerfour.png';
import { Link } from "react-router-dom";
const ProcessSection = () => {
    return (
        <div className="container process-section">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 align-items-center featurescol">
                    {/* <h5 className="subheading features d-flex justify-content-center">How to book us</h5> */}
                    <h1 className="mt-3 featureshead">Follow Easy Process Get The Drive Thru Medic Services</h1>
                </div>
            </div>
            <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                <div className="col-lg-6 col-md-10 doctors-image">
                    <img src={docimg} alt="Doctors performing a medical procedure" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-10">
                    <div className="accordion" id="accordionExample">
                        {/* First Accordion Item */}
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button
                                        className="btn btn-link accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        1. Choose a Service
                                    </button>
                                </h2>
                            </div>
                            <div
                                id="collapseOne"
                                className="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#accordionExample"
                            >
                                <div className="card-body accordion-body text-start">
                                    <p className="accordtext">
                                    Booking an appointment with Drive Thru Medics is easy and quick! Simply visit our website , choose your desired service, and select a time that works best for you. You can book a slot for in-person visits or request at-home services. We also provide flexible scheduling options to fit your busy lifestyle, ensuring that healthcare is always convenient for you.


                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Accordion Item */}
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h2 class ="mb-0">
                                    <button
                                        className="btn btn-link accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        2. Pick a Date
                                    </button>
                                </h2>
                            </div>
                            <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionExample"
                            >
                                <div className="card-body accordion-body text-start">
                                    <p className="accordtext">
                                    Take advantage of our free consultation service to get expert advice before committing to any medical procedure. Whether you have questions about your health, need guidance on which services to choose, or simply want to discuss your concerns with a professional, our medical team is here to help. Schedule your free consultation online and receive personalized care and support tailored to your needs.


                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Third Accordion Item */}
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button
                                        className="btn btn-link accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        3. Meet With One Of Our Doctors
                                    </button>
                                </h2>
                            </div>
                            <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordionExample"
                            >
                                <div className="card-body accordion-body text-start">
                                    <p className="accordtext">
                                    Connect with one of our experienced healthcare professionals who will guide you through your medical journey. Whether it's a routine check-up or specialized advice, our experts are here to provide personalized care and ensure you receive the best treatment. Book an appointment today to meet with our expert and get the professional guidance you deserve.


                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;