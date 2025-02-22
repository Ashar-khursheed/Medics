// src/pages/DrivingPage.js
import React from 'react';
import './assets/style.css'; // Make sure to import your styles
import dripsImg from './assets/img/servcies/drips.jpg';
import dripsImgTwo from './assets/img/servcies/iv2.webp';
import dripsImgThree from './assets/img/servcies/iv3.webp';
import dripsImgFour from './assets/img/servcies/iv4.webp';


import { Link } from "react-router-dom";















const IvDrips = () => {
    return (
        <div>
            <section className="hero-section-iv text-white">
                <div className="hero-overlay-two">
                    <div className="container d-flex flex-column justify-content-center align-items-start h-100">
                        <h1 className="display-4 fw-bold">Iv Drips
                        </h1>
                        <ul className="list-unstyled d-flex flex-column align-items-start gap-1 mt-3">
                            <li><i className="bi bi-check-circle-fill"></i> Eye Test Included</li>
                            <li><i className="bi bi-check-circle-fill"></i> 40+ Clinics Nationwide</li>
                        </ul>
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
                        <h1 className="mt-3 aboutmainheading">Rejuvenate and Restore with IV Drip Therapy</h1>
                        <p>Are you looking for a fast and effective way to boost your health, energy, and overall wellness? Our IV
                            Drip Therapy offers a powerful solution, providing hydration, essential nutrients, and specialized
                            ingredients tailored to your needs.</p>


                        <h1 className="mt-3 aboutmainheading">What’s in an IV Drip?</h1>
                        <p>An IV drip delivers fluids, vitamins, and minerals directly into the bloodstream for optimal absorption and
                            rapid results. The composition of an IV drip varies based on the treatment, with ingredients selected to
                            provide specific benefits:</p>
                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={dripsImg} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>
                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={dripsImgTwo} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>


                    <div className="col-lg-6 col-md-10 text-start">



                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Saline Solution:</b> The base of most IV drips, this sterile solution of water and salt restores
                                hydration and balances electrolytes.</li>


                            <li><b>Glucose Solution:</b> Provides a quick energy boost to fuel your body.
                                Nutrients: Customized blends of vitamins, minerals, amino acids, and antioxidants support
                                immunity, recovery, and overall health.</li>

                            <li><b> Nutrients:</b> Customized blends of vitamins, minerals, amino acids, and antioxidants support
                                immunity, recovery, and overall health.</li>
                        </ul>





                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>
                </div>



                <div className="row justify-content-center align-items-center mt-5 doctorsrow">
                   
                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">Specialized IV Cocktails</h1>
                        <p>From wellness to recovery, our IV drips cater to different health goals:</p>


                        <ul className="custom-bullets mt-3 gap-2">
                            <li><b>Myers Cocktail IV:</b>A classic blend of magnesium, B vitamins, and vitamin C for enhanced
                                immunity, energy, and general wellness.

                            </li>

                            <li><b> Hydration IV Drip: </b> Ideal for athletes or anyone in need of rapid rehydration after illness, exercise,
                                or a long night out.
                            </li>

                            <li><b>NAD+ Anti-Aging IV:</b> Contains NAD+, a crucial enzyme for cell repair and anti-aging benefits,
                                promoting cellular health.</li>

                            <li><b>Detox Boost IV:</b> A mix of vitamins and minerals that support the body’s natural detox process,
                                helping to eliminate stored toxins.</li>

                            <li><b>Immunity Booster IV:</b> Packed with antioxidants like glutathione and cysteine to help protect
                                against illness and maintain resilience.</li>
                        </ul>





                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>

                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={dripsImgThree} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>


                </div>


                <div className="row justify-content-center align-items-center mt-5 doctorsrow">

                    <div className="col-lg-6 col-md-10 doctors-image">
                        <img src={dripsImgFour} alt="Fit to Fly" className="img-fluid w-100" />
                    </div>

                    <div className="col-lg-6 col-md-10 text-start">
                        <h1 className="mt-3 aboutmainheading">The Benefits of IV Drip Therapy</h1>
                        <p>IV therapy bypasses the digestive system, delivering nutrients straight to your bloodstream for quick and
                            effective results. Benefits may include:</p>


                        <ul className="custom-bullets mt-3 gap-2">
                            <li>Stronger immunity, helping you avoid colds and flu
                            </li>
                            <li>Improved mood, energy, and mental clarity
                            </li>
                            <li>Faster recovery from sports, illness, or hangovers
                            </li>
                            <li>Enhanced skin health and reduced signs of aging
                            </li>
                            <li>Balanced hydration for jet lag, migraines, and general wellness
                            </li>
                        </ul>

                        <p>Whether you’re looking to boost your energy, recover faster, or support your immune system, IV Drip
                            Therapy is a quick, efficient way to meet your health goals. Schedule a session with us and experience
                            the revitalizing effects of IV therapy today!</p>





                        <Link className="mt3" to="/booking-form">
                            <button className="buttonone" type="button">Book an Appointment</button>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default IvDrips;


