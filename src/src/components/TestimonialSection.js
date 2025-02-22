// src/components/TestimonialSection.js

import React from 'react';
import Slider from 'react-slick';
import '../assets/style.css'; // Assuming you have a CSS file for styling
// Add this import in your main app or TestimonialSection component file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import clientImg from '../assets/img/client.png'; // Adjust the path based on your folder structure

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Jaydon Workman',
      title: 'Senior Doctor',
      quote:
        '“Elementum condimentum diam dapibus maximus. Proin placerat nec felis vel commodo. Varius turpis eget lorem dapibus, vel iaculis leo suspendisse. Cras at diam et enimio.”',
      image: clientImg,
    },
    {
      name: 'Amanda Smith',
      title: 'Nurse Practitioner',
      quote:
        '“Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque. Nunc dignissim risus id metus. Cras ornare tristique elit. Vivamus vestibulum ntulla nec ante.”',
      image: clientImg,
    },
    {
      name: 'Michael Brown',
      title: 'General Physician',
      quote:
        '“Phasellus suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.”',
      image: clientImg,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="testimonial-section mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 testimonialscol">
            <div className="subheading features d-flex justify-content-center">Our Testimonials</div>
            <h2 className="mt-4">Reviews From Our Valued Customers</h2>
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <p className="quote">{testimonial.quote}</p>
                  <div className="profile">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className="profile-name">{testimonial.name}</div>
                    <div className="profile-title">{testimonial.title}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
    