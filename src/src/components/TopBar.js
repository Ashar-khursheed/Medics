import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/style.css';
const TopBar = () => {
  return (
    <section className="topbar">
      <div className="container">
        <div className="row p-2 d-flex justify-content-center align-items-center">
          <div className="col-lg-4">
            <div className="icon-box gap-2 d-flex">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <h4 className="topbarheading">Welcome to the Drive Thru Medics</h4>
          </div>
          <div className="col-lg-4 text-end">
            <h4 className="topbarheading">Login | Sign up</h4>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default TopBar;
