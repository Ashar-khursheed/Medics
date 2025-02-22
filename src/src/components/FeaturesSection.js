// src/components/FeaturesSection.js
import React from 'react';
import '../assets/style.css';
import icon1 from '../assets/img/icon1.png';
const FeaturesSection = () => {
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
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className="col-lg-2 col-md-6 mb-4" key={index}>
                            <div className="feature-card">
                                <img src={icon1} alt={`Feature ${index + 1}`} className="img-fluid" />
                                <h5>{`Feature ${index + 1}`}</h5>
                                <p>Lorem ipsum dolor sit amet consectetur nibh in est a sem vivamus sed nunc arcu aliquam sed suscipit ut ultricies.</p>
                                <Link to="#" className="cardbtn">Read More →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
