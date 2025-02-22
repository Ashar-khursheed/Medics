// src/App.js
import React from 'react';
import './App.css'; // Your global styles
import '../src/assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router components

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import MissionAndVisionSection from './components/MissionAndVisionSection';
// import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import BlogAccordion from './components/BlogAccordion';
import NewsletterSection from './components/NewsletterSection';
import AppointmentSection from './components/AppointmentSection';
import TestimonialSection from './components/TestimonialSection';
import ServiceSec from './components/ServiceSec';
import LocationsSection from './components/LocationsSection';
import HomePage from './HomePage';
import AboutPage from './AboutPage'; // Import the About page

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactPage from './ContactPage';
import DrivingPage from './DrivingPage';
import HealthandWellbeing from './HealthandWelbing.js';
import Sports from './Sports.js';
import Travel from './Travel.js';
import Tests from './Tests.js';

function App() {
    return (
        <Router>
            <div className="App">
                {/* <TopBar /> */}
                <Navbar /> {/* Your Navbar for navigation */}
                
                {/* Define your routes */}
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <FeaturesSection />
                            {/* <StatsSection /> */}
                            {/* <MissionAndVisionSection /> */}
                            <ProcessSection />
                            <ServiceSec />
                            <LocationsSection />
                            <appointmentSection />
                            <TestimonialSection />
                            <BlogAccordion />
                            <NewsletterSection />
                        </>
                    }/>
                      <Route path="/home" element={<HomePage />} />  {/* About page route */}
                    <Route path="/about" element={<AboutPage />} />  {/* About page route */}
                    <Route path="/contact" element={<ContactPage />} />  {/* About page route */}
                    <Route path="/driving-services" element={<DrivingPage />} />  {/* About page route */}
                    <Route path="/healthandwellbeing-services" element={<HealthandWellbeing />} />  {/* About page route */}
                    <Route path="/sports-services" element={<Sports />} />  {/* About page route */}
                    <Route path="/travel-services" element={<Travel />} />  {/* About page route */}
                    <Route path="/tests-services" element={<Tests />} />  {/* About page route */}
                </Routes>
                
                <Footer />
            </div>
        </Router>
    );
}

export default App;
