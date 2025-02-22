// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import injImg from './assets/img/servcies/inj2.webp';
import injImgtwo from './assets/img/servcies/inj3.webp';
import injImgThree from './assets/img/servcies/inj4.webp';

import { Link } from "react-router-dom";
















const B12Injections = () => {
    return (
        <div>
            <section className="hero-section-inj text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">B12 Injections
                        </h1>
                        {/* <ul className="list-unstyled d-flex flex-column align-items-start gap-1 mt-3">
                            <li><i className="bi bi-check-circle-fill"></i> Eye Test Included</li>
                            <li><i className="bi bi-check-circle-fill"></i> 40+ Clinics Nationwide</li>
                        </ul> */}
                        <Link className='mt-3' to="/booking-form">
                            <button class="buttonone" type="button">Book Now</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Iv drip to fly Sports section */}

            <div className="container servicess-section mt-5 mb-5">
                <div className="row justify-content-center align-items-center mt-3 doctorsrow">
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Revitalize Your Health with Our Vitamin B12 Injections</h1>
                        <p>Are you looking to boost your energy levels and improve your overall well-being? Our Vitamin B12 injections provide an effective way to enhance your health. At Drive Thru Medics
                            , we offer professional B12 injection services designed to help you feel your best.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={injImg} alt="Vitamin B12 Injections" className="img-fluid w-100" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={injImgtwo} alt="Vitamin B12 Benefits" className="img-fluid w-100" />
                    </div>
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Why Choose Vitamin B12 Injections?</h1>
                        <p>Vitamin B12 plays a crucial role in maintaining optimal health. It supports various bodily functions, including:</p>

                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Reducing Stress and Fatigue:</b> Many people experience low energy levels and stress. B12 injections can help combat these issues, providing you with a much-needed energy boost.</li>
                            <li><b>Enhancing Memory and Cognitive Function:</b> B12 is vital for brain health, and its injections may improve memory and concentration.</li>
                            <li><b>Supporting Cardiovascular Health:</b> Adequate B12 levels are essential for heart health, helping to lower the risk of cardiovascular diseases.</li>
                            <li><b>Promoting Healthy Skin and Eyes:</b> Vitamin B12 is important for maintaining vibrant skin and good eyesight.</li>
                            <li><b>Energy Conversion:</b> It aids in converting proteins, fats, and carbohydrates into energy, ensuring your body runs smoothly.</li>
                        </ul>
                    </div>
                </div>

                

                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                   
                    <div className="col-lg-6 col-md-10 text-start">

                        <p>One of the significant advantages of B12 injections is their superior absorption. Since they are administered directly into the bloodstream, your body can utilize the vitamin more effectively than through oral supplements.</p>
                        <h1 className="mt-3 aboutmainheading">Take Charge of Your Health</h1>

                        <p>If you’re ready to experience the benefits of Vitamin B12 injections, schedule your appointment with us today. Let [Your Company Name] help you enhance your vitality and overall health with our professional injection services.</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={injImgThree} alt="Vitamin B12 Health Support" className="img-fluid w-100" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default B12Injections;


