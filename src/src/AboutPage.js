import React from 'react';
import AboutSection from './components/AboutSection';
import NewsletterSection from './components/NewsletterSection';

const AboutPage = () => {
  return (
    <div>
      <AboutSection />  {/* Include your AboutSection component */}
      <NewsletterSection /> 
    </div>
  );
};

export default AboutPage;
