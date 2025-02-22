// src/components/FeaturesSection.js
import React from 'react';
import '../assets/style.css';
import icon2 from '../assets/img/tax.png';
import icon3 from '../assets/img/drive6.png';
import icon4 from '../assets/img/ambul.png';
import icon5 from '../assets/img/sporting.png';
import icon6 from '../assets/img/boxa.png';
import icon7 from '../assets/img/dripng.png';
import { Link } from "react-router-dom";







const FeaturesSection = () => {
    const features = [
        {
            title: "Driver Medicals",
            description: "At DriveThruMedics, we provide comprehensive driver medicals ",
            icon: icon3,
            link: "/driving-medicals"
        },
        {
            title: "Taxi Medicals",
            description: "If you’re a taxi driver needing a medical exam to prove your",
            icon: icon2,
            link: "/taxi-medicals"
        },
        {
            title: "Ambulance Medical",
            description: "Are you a student paramedic ready to take the next step ",
            icon: icon4,
            link: "/ambulance-medicals"
        },
        {
            title: "Sports",
            description: "When it’s time to hit the track, a Motorsport Medical is a crucial",
            icon: icon5,
            link: "/motor-sports"
        },
        {
            title: "Boxing Medical",
            description: "Whether you’re aiming for amateur competitions or a pro debut",
            icon: icon6,
            link: "/boxing-sports"
        },
        {
            title: "IV Drips",
            description: "For anyone eager to explore the depths of the ocean, a scuba",
            icon: icon7,
            link: "/iv-drip"
        },
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <h5 className="subheading d-flex justify-content-center">Our Key Features</h5>
                    <h1>
                        Revolutionizing Healthcare With Quick, Convenient,
                        <br />
                        And Accessible Medical Services On The Move
                    </h1>
                </div>
                <div className="row text-center gap-0">
                    {features.map((feature, index) => (
                        <div className="col-lg-2 col-md-6 mb-4" key={index}>
                            <div className="feature-card">
                                <img src={feature.icon} alt={feature.title} className="img-fluid iconimg" />
                                <h5>{feature.title}</h5>
                                <p>{feature.description}</p>
                                <Link to={feature.link} className="cardbtn">Read More →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
