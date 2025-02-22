import React from 'react';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';

const ContactPage = () => {
  return (
    <div>
      <ContactSection />  {/* Include your AboutSection component */}
      <NewsletterSection /> 
    </div>
  );
};

export default ContactPage;
