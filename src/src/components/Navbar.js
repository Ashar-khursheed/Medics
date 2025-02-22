import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav1 pt-3 pb-3">
    <div className="container">
      <Link className="navbar-brand logo" to="#">Drive Thru Medics</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="dropdown-submenu">
                <Link className="dropdown-item " to="#" id="navbarDropdown1">
                  Driving <span className="caret">▼</span>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/driving-services">Driving</Link></li>
                  <li><Link className="dropdown-item" to="/sports-services">Sport</Link></li>
                  <li><Link className="dropdown-item" to="/travel-services">Travel</Link></li>
                  <li><Link className="dropdown-item" to="/healthandwellbeing-services">Health and Wellbeing</Link></li>
                  <li><Link className="dropdown-item" to="/tests-services">Tests</Link></li>
                </ul>
              </li>
              <li><Link className="dropdown-item" to="/sports-services">Sport</Link></li>
              <li><Link className="dropdown-item" to="/travel-services">Travel</Link></li>
              <li><Link className="dropdown-item" to="/healthandwellbeing-services">Health and Wellbeing</Link></li>
              <li><Link className="dropdown-item" to="/tests-services">Tests</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Stories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Link to="#">
          <button className="buttonone" type="button">Book Now</button>
        </Link>
      </div>
    </div>
  </nav>
  

  );
};

export default Navbar;
