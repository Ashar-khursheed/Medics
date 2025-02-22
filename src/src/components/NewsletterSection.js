// src/components/NewsletterSection.js

import React from 'react';
import '../assets/style.css';
import newsImage from '../assets/img/news.png'; // Adjust the path based on your folder structure

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center gap-3 mobscreen">
          <h5 className="subheading news features d-flex justify-content-center">Our Newsletter</h5>
          <h2 className="mt-3 featureshead">For Latest Updates Subscribe Us</h2>

          <div className="member-info">
            <img src={newsImage} alt="news" />
            <span className="members-count">2,700+ Members</span>
          </div>

          <div className="col-lg-12 formcol p-0">
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your mail address" required />
              <button className="buttonone subscribebtn" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
