// src/ProcessSection.js
import React from 'react';
import '../assets/style.css';
import docimg from '../assets/img/bannerfour.png';

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
                                        1. Make An Appointment
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
                                    Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu.


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
                                        2. Get Free Consultation
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
                                    Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu.


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
                                        3. Meet With Our Expert
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
                                    Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu Aliquam sed suscipit a ultricies.Lorem ipsum dolor sit amet consectetur Nibh in et a sem vivamus sed nunc arcu.


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