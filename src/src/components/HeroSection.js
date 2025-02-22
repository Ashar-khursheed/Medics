// src/components/HeroSection.js
import React from 'react';
//import './HeroSection.css'; // You can create a specific CSS file for this component
import '../assets/style.css';
const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content text-left">
                    <h5 className="text-uppercase d-flex justify-content-center headtextone">
                        Welcome to Drive Thru Medics
                    </h5>
                    <h1 className="display-4 fw-bold">Your Convenient Health Care Solution!</h1>
                    <p className="lead">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium...
                    </p>
                    <Link to="#">
                        <button className="buttonone" type="button">
                            Explore More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
