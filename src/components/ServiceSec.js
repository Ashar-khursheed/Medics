import React from 'react';
import '../assets/style.css';
import { useState } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
const ServiceSec = () => {
    const [activeTab, setActiveTab] = useState('driving'); // Set default active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="servicessec">
            <div className="container services-section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sevicesecheading">
                            <h5 className="subheading features d-flex justify-content-center ">What We Do For You</h5>
                            <h1 className="mt-3 servicemainheading">Services Designed To Meet Your Needs</h1>
                        </div>
                        {/* 
                    <!-- Tabs Navigation --> */}
                        <ul className="nav nav-tabs justify-content-center mt-4 d-flex gap-2" id="myTab" role="tablist">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'driving' ? 'active' : ''}`}
                                    id="driving-tab"
                                    onClick={() => handleTabClick('driving')}
                                    role="tab"
                                    aria-controls="driving"
                                    aria-selected={activeTab === 'driving'}
                                >
                                    Driving Medics
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'sport' ? 'active' : ''}`}
                                    id="sport-tab"
                                    onClick={() => handleTabClick('sport')}
                                    role="tab"
                                    aria-controls="sport"
                                    aria-selected={activeTab === 'sport'}
                                >
                                    Sport
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'travel' ? 'active' : ''}`}
                                    id="travel-tab"
                                    onClick={() => handleTabClick('travel')}
                                    role="tab"
                                    aria-controls="travel"
                                    aria-selected={activeTab === 'travel'}
                                >
                                    Travel
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'wellbeing' ? 'active' : ''}`}
                                    id="wellbeing-tab"
                                    onClick={() => handleTabClick('wellbeing')}
                                    role="tab"
                                    aria-controls="wellbeing"
                                    aria-selected={activeTab === 'wellbeing'}
                                >
                                    Health and Wellbeing
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'lab' ? 'active' : ''}`}
                                    id="lab-tab"
                                    onClick={() => handleTabClick('lab')}
                                    role="tab"
                                    aria-controls="lab"
                                    aria-selected={activeTab === 'lab'}
                                >
                                    Lab Tests
                                </button>
                            </li>
                        </ul>
                        {/* 
                    <!-- Tabs Content --> */}
                        <div className="tab-content mt-4">
                            {activeTab === 'driving' && (
                                <div className="col-lg-12 col-md-12">
                                    <div className="row flex">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards drivercard p-0 h-400">
                                                <div className="card-body driverbody">
                                                    <h5 className="title">Driver Medicals</h5>
                                                    <p className="text">At DriveThruMedics, we provide comprehensive driver medicals to ensure that individuals....</p>
                                                    <Link to="/driving-medicals" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards taxicard p-0 h-400">
                                                <div className="card-body taxibody">
                                                    <h5 className="title">Taxi Medicals</h5>
                                                    <p className="text">If you’re a taxi driver needing a medical exam to prove your fitness to drive, DriveThruMedics...</p>
                                                    <Link to="/taxi-medicals" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards ambulancecard p-0 h-400">
                                                <div className="card-body ambulancebody">
                                                    <h5 className="title">Ambulance Medicals</h5>
                                                    <p className="text">Are you a student paramedic ready to take the next step toward working on an ambulance?</p>
                                                    <Link to="/ambulance-medicals" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards hgvcard p-0 h-400">
                                                <div className="card-body hgvbody">
                                                    <h5 className="title">HGV/LGV Medicals</h5>
                                                    <p className="text">To keep HGV drivers safe on the road, periodic medical exams are essential...</p>
                                                    <Link to="/hgv-medicals" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab === 'sport' && (
                                <div className="tab-pane fade show active" id="sport" role="tabpanel">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="row flex">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards drivercard p-0 h-400">
                                                    <div className="card-body driverbody">
                                                        <h5 className="title">Motor Sports
                                                        </h5>
                                                        <p className="text">When it’s time to hit the track, a Motorsport Medical is a crucial step in ensuring...</p>
                                                        <Link to="/motor-sports" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards taxicard p-0 h-400">
                                                    <div className="card-body taxibody">
                                                        <h5 className="title">Boxing Medical
                                                        </h5>
                                                        <p className="text">Whether you’re aiming for amateur competitions or a pro debut, a boxing medical...</p>
                                                        <Link to="/boxing-sports" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards ambulancecard p-0 h-400">
                                                    <div className="card-body ambulancebody">
                                                        <h5 className="title">Scuba Diving
                                                        </h5>
                                                        <p className="text">For anyone eager to explore the depths of the ocean, a scuba diving medical...</p>
                                                        <Link to="/scuba-diving" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards hgvcard p-0 h-400">
                                                    <div className="card-body hgvbody">
                                                        <h5 className="title">Horse Riding
                                                        </h5>
                                                        <p className="text">Horse riding offers a unique approach to physical and mental fitness, promoting...</p>
                                                        <Link to="/horse-riding" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                            {activeTab === 'travel' && (
                                <div className="tab-pane fade show active" id="travel" role="tabpanel">
                                    <div className="row d-flex justify-content-center flex">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards drivercard p-0 h-400">
                                                <div className="card-body driverbody">
                                                    <h5 className="title">Fit To Fly
                                                    </h5>
                                                    <p className="text">Planning an upcoming trip and need to verify your health status for travel? Our Fit...</p>
                                                    <Link to="/fit-fly" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards taxicard p-0 h-400">
                                                <div className="card-body taxibody">
                                                    <h5 className="title">Travel Vaacines
                                                    </h5>
                                                    <p className="text">Planning an international trip? Travel vaccines are essential to protect yourself</p>
                                                    <Link to="/travel-vaacines" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-3 col-md-6">
                                            <div className="card allcards ambulancecard p-0 h-400">
                                                <div className="card-body ambulancebody">
                                                    <h5 className="title">Ambulance Medicals</h5>
                                                    <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                        et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                        ultricies.</p>
                                                    <Link to="#" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards hgvcard p-0 h-400">
                                                <div className="card-body hgvbody">
                                                    <h5 className="title">HGV/LGV Medicals</h5>
                                                    <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                        et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                        ultricies.</p>
                                                    <Link to="#" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            )}
                            {activeTab === 'wellbeing' && (
                                <div className="tab-pane fade show active" id="wellbeing" role="tabpanel">
                                    <div className="row flex">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards drivercard p-0 h-400">
                                                <div className="card-body driverbody">
                                                    <h5 className="title">Iv Drips
                                                    </h5>
                                                    <p className="text">Are you looking for a fast and effective way to boost your health, energy, and overall...</p>
                                                    <Link to="/iv-drip" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards taxicard p-0 h-400">
                                                <div className="card-body taxibody">
                                                    <h5 className="title">B12 Injections
                                                    </h5>
                                                    <p className="text">Are you looking to boost your energy levels and improve your overall well-being?</p>
                                                    <Link to="/b12-injections" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards ambulancecard p-0 h-400">
                                                <div className="card-body ambulancebody">
                                                    <h5 className="title">Sports Massage</h5>
                                                    <p className="text">Whether you're an athlete pushing your limits or simply feeling muscle tension...</p>
                                                    <Link to="/sports-massage" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards hgvcard p-0 h-400">
                                                <div className="card-body hgvbody">
                                                    <h5 className="title">Chiropractic Services
                                                    </h5>
                                                    <p className="text">If you're dealing with chronic pain, recovering from an injury, or just looking to maintain</p>
                                                    <Link to="/chiropractic-services" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'lab' && (
                                <div className="tab-pane fade show active" id="lab" role="tabpanel">
                                    <div className="row flex">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards drivercard p-0 h-400">
                                                <div className="card-body driverbody">
                                                    <h5 className="title">Sexual Health</h5>
                                                    <p className="text">Taking charge of your sexual health is a key part of overall wellness. Our private...</p>
                                                    <Link to="/sexual-health" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards taxicard p-0 h-400">
                                                <div className="card-body taxibody">
                                                    <h5 className="title">Blood Tests
                                                    </h5>
                                                    <p className="text">Our blood test services offer a convenient, accurate way to gain insight into your</p>
                                                    <Link to="/blood-test" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards ambulancecard p-0 h-400">
                                                <div className="card-body ambulancebody">
                                                    <h5 className="title">Alcohol and Drug</h5>
                                                    <p className="text">Our alcohol and drug testing services provide a quick, reliable, and discreet way to ..</p>
                                                    <Link to="/alcohol-drug" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="card allcards hgvcard p-0 h-400">
                                                <div className="card-body hgvbody">
                                                    <h5 className="title">Exercise ECG
                                                    </h5>
                                                    <p className="text">Our Exercise ECG (Electrocardiogram) test is a powerful tool to assess heart</p>
                                                    <Link to="/exercise-ecg" className="servicesbtn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSec;



