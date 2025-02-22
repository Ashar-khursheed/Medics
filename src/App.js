// src/App.js
import React from 'react';
import './App.css'; // Your global styles
import '../src/assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router components
import  { useEffect } from 'react';

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
import DrivingMedicals from './DrivingMedicals';
import TaxiMedical from './TaxiMedical';
import AmbulanceMedical from './AmbulanceMedicals';
import HgvMedicals from './HgvMedicals';
import MotorSports from './MotorSports';
import BoxingSport from './BoxingSport'
import ScubaDiving from './ScubaDiving'
import HorseRiding from './HorseRiding'
import SkyDiving from './SkyDiving'
import FitFly from './FitFly'
import TravelVaacines from './TravelVaacines'
import IvDrips from './IvDrips';
import B12Injections from './B12Injections'
import CuppingTherapy from './CuppingTherapy'
import SportsMassage from './SportsMassage'
import CyroService from './CyroService'
import SexualHealthScreens from './SexualHealthScreens'
import BloodTests from './BloodTests'
import AlcoholDrug from './AlcoholDrug.js'
import ExerciseEcg from './ExerciseEcg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactPage from './ContactPage';
import DrivingPage from './DrivingPage';
import HealthandWellbeing from './HealthandWelbing.js';
import Sports from './Sports.js';
import Travel from './Travel.js';
import Tests from './Tests.js';
import BookingPage from './BookingPage.js';
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the route changes
  }, [location]);

  return null;
};


function App() {
    return (
        <Router>
            <div className="App">
                {/* <TopBar /> */}
                <Navbar /> {/* Your Navbar for navigation */}
                 {/* ScrollToTop Component */}
        <ScrollToTop />
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
                    <Route path="/driving-medicals" element={<DrivingMedicals />} />  {/* About page route */}
                    <Route path="/taxi-medicals" element={<TaxiMedical />} />  {/* About page route */}
                    <Route path="/ambulance-medicals" element={<AmbulanceMedical />} />  {/* About page route */}
                    <Route path="/hgv-medicals" element={<HgvMedicals />} />  {/* About page route */}
                    <Route path="/motor-sports" element={<MotorSports />} />  {/* About page route */}
                    <Route path="/boxing-sports" element={<BoxingSport />} />  {/* About page route */}
                    <Route path="/scuba-diving" element={<ScubaDiving />} />  {/* About page route */}
                    <Route path="/horse-riding" element={<HorseRiding />} />  {/* About page route */}
                    <Route path="/sky-diving" element={<SkyDiving />} />  {/* About page route */}
                    <Route path="/fit-fly" element={<FitFly />} />  {/* About page route */}
                    <Route path="/travel-vaacines" element={<TravelVaacines />} />  {/* About page route */}
                    <Route path="/iv-drip" element={<IvDrips/>} />  
                    <Route path="/b12-injections" element={<B12Injections/>} />
                    <Route path="/cupping-therapy" element={<CuppingTherapy/>} />
                    <Route path="/sports-massage" element={<SportsMassage/>} />
                    <Route path="/chiropractic-services" element={<CyroService/>} />
                    <Route path="/sexual-health" element={<SexualHealthScreens/>} />
                    <Route path="/blood-test" element={<BloodTests/>} />
                    <Route path="/alcohol-drug" element={<AlcoholDrug/>} />
                    <Route path="/exercise-ecg" element={<ExerciseEcg/>} />




                    



                    
  




                    







                    




                    <Route path="/healthandwellbeing-services" element={<HealthandWellbeing />} />  {/* About page route */}
                    <Route path="/sports-services" element={<Sports />} />  {/* About page route */}
                    <Route path="/travel-services" element={<Travel />} />  {/* About page route */}
                    <Route path="/tests-services" element={<Tests />} />  {/* About page route */}
                    <Route path="/booking-form" element={<BookingPage />} />  Booking page route
                </Routes>
                
                <Footer />
            </div>
        </Router>
    );
}

export default App;
