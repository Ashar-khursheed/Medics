import React from 'react';
import AboutSection from './components/AboutSection';
import NewsletterSection from './components/NewsletterSection';
import MissionAndVisionSection from './components/MissionAndVisionSection';
const AboutPage = () => {
  return (
    <div>
        {/* <MissionAndVisionSection /> */}
      <AboutSection />  {/* Include your AboutSection component */}

      <NewsletterSection /> 
    </div>
  );
};

export default AboutPage;
