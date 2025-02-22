import React from 'react';
import '../assets/style.css';
import  { useState } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
                    <ul className="nav nav-tabs justify-content-center mt-4" id="myTab" role="tablist">
                        <li className="nav-item">
                        <Link
                            className={`nav-link ${activeTab === 'driving' ? 'active' : ''}`}
                            id="driving-tab"
                            onClick={() => handleTabClick('driving')}
                            role="tab"
                            aria-controls="driving"
                            aria-selected={activeTab === 'driving'}
                        >
                            Driving Medics
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            className={`nav-link ${activeTab === 'sport' ? 'active' : ''}`}
                            id="sport-tab"
                            onClick={() => handleTabClick('sport')}
                            role="tab"
                            aria-controls="sport"
                            aria-selected={activeTab === 'sport'}
                        >
                            Sport
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            className={`nav-link ${activeTab === 'travel' ? 'active' : ''}`}
                            id="travel-tab"
                            onClick={() => handleTabClick('travel')}
                            role="tab"
                            aria-controls="travel"
                            aria-selected={activeTab === 'travel'}
                        >
                            Travel
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            className={`nav-link ${activeTab === 'wellbeing' ? 'active' : ''}`}
                            id="wellbeing-tab"
                            onClick={() => handleTabClick('wellbeing')}
                            role="tab"
                            aria-controls="wellbeing"
                            aria-selected={activeTab === 'wellbeing'}
                        >
                            Health and Wellbeing
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            className={`nav-link ${activeTab === 'lab' ? 'active' : ''}`}
                            id="lab-tab"
                            onClick={() => handleTabClick('lab')}
                            role="tab"
                            aria-controls="lab"
                            aria-selected={activeTab === 'lab'}
                        >
                            Lab Tests
                        </Link>
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
                                    <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                        et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                        ultricies.</p>
                                    <Link to="#" className="servicesbtn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card allcards taxicard p-0 h-400">
                                <div className="card-body taxibody">
                                    <h5 className="title">Taxi Medicals</h5>
                                    <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                        et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                        ultricies.</p>
                                    <Link to="#" className="servicesbtn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
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
                                                        <h5 className="title">Driver Medicals</h5>
                                                        <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                            et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                            ultricies.</p>
                                                        <Link to="#" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards taxicard p-0 h-400">
                                                    <div className="card-body taxibody">
                                                        <h5 className="title">Taxi Medicals</h5>
                                                        <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                            et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                            ultricies.</p>
                                                        <Link to="#" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
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
                                            </div>
                                     </div>
                            
                                    </div>
                            </div>
                            )}
                            {activeTab === 'travel' && (
                            <div className="tab-pane fade show active" id="travel" role="tabpanel">
                              <div className="row flex">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards drivercard p-0 h-400">
                                                    <div className="card-body driverbody">
                                                        <h5 className="title">Driver Medicals</h5>
                                                        <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                            et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                            ultricies.</p>
                                                        <Link to="#" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards taxicard p-0 h-400">
                                                    <div className="card-body taxibody">
                                                        <h5 className="title">Taxi Medicals</h5>
                                                        <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                            et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                            ultricies.</p>
                                                        <Link to="#" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
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
                                            </div>
                                     </div>
                            </div>
                            )}
                            {activeTab === 'wellbeing' && (
                            <div className="tab-pane fade show active" id="wellbeing" role="tabpanel">
                              <div className="row flex">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards drivercard p-0 h-400">
                                                    <div className="card-body driverbody">
                                                        <h5 className="title">Driver Medicals</h5>
                                                        <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                            et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                            ultricies.</p>
                                                        <Link to="#" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards taxicard p-0 h-400">
                                                    <div className="card-body taxibody">
                                                        <h5 className="title">Taxi Medicals</h5>
                                                        <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                            et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                            ultricies.</p>
                                                        <Link to="#" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
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
                                                        <h5 className="title">Driver Medicals</h5>
                                                        <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                            et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                            ultricies.</p>
                                                        <Link to="#" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="card allcards taxicard p-0 h-400">
                                                    <div className="card-body taxibody">
                                                        <h5 className="title">Taxi Medicals</h5>
                                                        <p className="text">Lorem ipsum dolor sit amet consectetur Nibh in
                                                            et a sem vivamus sed nunc arcu Aliquam sed suscipit a
                                                            ultricies.</p>
                                                        <Link to="#" className="servicesbtn">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
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

    
    
  