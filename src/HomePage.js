import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import MissionAndVisionSection from './components/MissionAndVisionSection';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import BlogAccordion from './components/BlogAccordion';
import NewsletterSection from './components/NewsletterSection';
import AppointmentSection from './components/AppointmentSection';
import TestimonialSection from './components/TestimonialSection';
import ServiceSec from './components/ServiceSec';
import LocationsSection from './components/LocationsSection';

const HomePage = () => {
  useEffect(() => {
    // Read the paymentStatus from the URL query params
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('paymentStatus');

    // Show alerts based on the payment status
    if (paymentStatus === 'success') {
      alert('Appointment successfully booked and paid for!');
    } else if (paymentStatus === 'failed') {
      alert('Appointment booked, but payment failed.');
    }
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* <StatsSection /> */}
      {/* <MissionAndVisionSection /> */}
      <ProcessSection />
      <ServiceSec />
      <LocationsSection />
      <AppointmentSection />
      <TestimonialSection />
      {/* <BlogAccordion /> */}
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
