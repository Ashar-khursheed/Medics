import React from 'react';
import NewsletterSection from './components/NewsletterSection';
import BookingForm from './components/BookingForm';
import LocationsSection from './components/LocationsSection';


const BookingPage = () => {
  return (
    <div>
      <BookingForm />
      <LocationsSection />
      <NewsletterSection /> 
    </div>
  );
};

export default BookingPage;
