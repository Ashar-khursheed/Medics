import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from '../assets/img/Aboutus/logone.jpg'; // Adjust image path as per your structure
import logotwo from '../assets/img/logo jp.jpg'

import '../assets/style.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        // <nav className="navbar navbar-expand-lg nav1 pt-3 pb-3">
        //   <div className="container">
        //     {/* <Link className="navbar-brand logo" to="#">
        //       <img src={logoImage} alt="Logo" className="logoimageone" />
        //     </Link> */}
        //     <Link class="navbar-brand logo" to="/home">Drive Thru Medics</Link>
        //     {/* <img className='logoimageone' src={logoImage} /> */}
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        //       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //       <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //       <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4">
        //         <li className="nav-item">
        //           <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        //         </li>
        //         <li className="nav-item">
        //           <Link className="nav-link" to="/about">About Us</Link>
        //         </li>
        //         <li className="nav-item dropdown">
        //           <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
        //             data-bs-toggle="dropdown" aria-expanded="false">
        //             Services
        //           </Link>
        //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //             <li className="dropdown-submenu">
        //               <Link className="dropdown-item " to="#" id="navbarDropdown1">
        //                 Driving <span className="caret">▼</span>
        //               </Link>
        //               <ul className="dropdown-menu">
        //                 <li><Link className="dropdown-item" to="/driving-medicals">Driver Medicals</Link></li>
        //                 <li><Link className="dropdown-item" to="/taxi-medicals">Taxi Medicals </Link></li>
        //                 <li><Link className="dropdown-item" to="/ambulance-medicals">Ambulance Medicals</Link></li>
        //                 <li><Link className="dropdown-item" to="/hgv-medicals">HGV/LGV Medicals</Link></li>



        //               </ul>
        //             </li>




        //             <li className="dropdown-submenu">
        //               <Link className="dropdown-item " to="#" id="navbarDropdown1">
        //                 Sports <span className="caret">▼</span>
        //               </Link>
        //               <ul className="dropdown-menu">
        //                 <li><Link className="dropdown-item" to="/motor-sports">Motorsport </Link></li>
        //                 <li><Link className="dropdown-item" to="/boxing-sports">Boxing  Sport </Link></li>
        //                 <li><Link className="dropdown-item" to="/scuba-diving">Scuba Diving</Link></li>
        //                 <li><Link className="dropdown-item" to="/horse-riding">Horse Riding                   </Link></li>
        //                 <li><Link className="dropdown-item" to="/sky-diving">SkyDiving </Link></li>
        //               </ul>
        //             </li>


        //             <li className="dropdown-submenu">
        //               <Link className="dropdown-item " to="#" id="navbarDropdown1">
        //                 Travel <span className="caret">▼</span>
        //               </Link>
        //               <ul className="dropdown-menu">
        //                 <li><Link className="dropdown-item" to="/fit-fly">Fit to fly </Link></li>
        //                 <li><Link className="dropdown-item" to="/travel-vaacines">Travel Vaacines </Link></li>
        //               </ul>
        //             </li>


        //             <li className="dropdown-submenu">
        //               <Link className="dropdown-item " to="#" id="navbarDropdown1">
        //                 Health and Wellbeing <span className="caret">▼</span>
        //               </Link>
        //               <ul className="dropdown-menu">
        //                 <li><Link className="dropdown-item" to="/iv-drip">IV Drips
        //                 </Link></li>
        //                 <li><Link className="dropdown-item" to="/b12-injections">Vit B12 Injections
        //                 </Link></li>
        //                 <li><Link className="dropdown-item" to="/cupping-therapy">Cupping Therapy Service
        //                 </Link></li>
        //                 <li><Link className="dropdown-item" to="/sports-massage">Sports Massage
        //                 </Link></li>
        //                 <li><Link className="dropdown-item" to="/chiropractic-services">Chiropractic Services
        //                 </Link></li>



        //               </ul>
        //             </li>


        //             <li className="dropdown-submenu">
        //               <Link className="dropdown-item " to="#" id="navbarDropdown1">
        //                 Tests <span className="caret">▼</span>
        //               </Link>
        //               <ul className="dropdown-menu">
        //                 <li><Link className="dropdown-item" to="/sexual-health">Sexual Health Screens

        //                 </Link></li>
        //                 <li><Link className="dropdown-item" to="/blood-test">All blood tests
        //                 </Link></li>
        //                 <li><Link className="dropdown-item" to="/alcohol-drug">Alcohol and Drug Tests
        //                 </Link></li>
        //                 <li><Link className="dropdown-item" to="/exercise-ecg">Exercise Ecg
        //                 </Link></li>




        //               </ul>
        //             </li>
        //           </ul>
        //         </li>
        //         <li className="nav-item">
        //           <Link className="nav-link" to="#">Stories</Link>
        //         </li>
        //         <li className="nav-item">
        //           <Link className="nav-link" to="/contact">Contact Us</Link>
        //         </li>
        //       </ul>
        //       <Link to="/booking-form">
        //         <button className="buttonone" type="button">Book Now</button>
        //       </Link>
        //     </div>
        //   </div>
        // </nav>

        <nav className="navbar navbar-expand-lg nav1 pt-3 pb-3 myheader">
            <div className="container">
                <Link className="navbar-brand logo" to="/home">
                    <img src={logotwo} alt="Drive Thru Medics Logo" className="img-fluid logoone" />
                </Link>
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



                        <div className="dropdown mega-menu">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                            <div className="dropdown-menu mega-menu-content" aria-labelledby="navbarDropdown">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <h5>Driving</h5>
                                        <ul className="list-unstyled">
                                            <li><Link className="dropdown-item" to="/driving-medicals">Driver Medicals</Link></li>
                                            <li><Link className="dropdown-item" to="/taxi-medicals">Taxi Medicals</Link></li>
                                            <li><Link className="dropdown-item" to="/ambulance-medicals">Ambulance Medicals</Link></li>
                                            <li><Link className="dropdown-item" to="/hgv-medicals">HGV/LGV Medicals</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <h5>Sports</h5>
                                        <ul className="list-unstyled">
                                            <li><Link className="dropdown-item" to="/motor-sports">Motorsport</Link></li>
                                            <li><Link className="dropdown-item" to="/boxing-sports">Boxing Sport</Link></li>
                                            <li><Link className="dropdown-item" to="/scuba-diving">Scuba Diving</Link></li>
                                            <li><Link className="dropdown-item" to="/horse-riding">Horse Riding</Link></li>
                                            <li><Link className="dropdown-item" to="/sky-diving">SkyDiving</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <h5>Travel</h5>
                                        <ul className="list-unstyled">
                                            <li><Link className="dropdown-item" to="/fit-fly">Fit to Fly</Link></li>
                                            <li><Link className="dropdown-item" to="/travel-vaacines">Travel Vaccines</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-4 col-md-6 healthcol">
                                        <h5>Health and Wellbeing</h5>
                                        <ul className="list-unstyled">
                                            <li><Link className="dropdown-item" to="/iv-drip">IV Drips</Link></li>
                                            <li><Link className="dropdown-item" to="/b12-injections">Vit B12 Injections</Link></li>
                                            <li><Link className="dropdown-item" to="/cupping-therapy">Cupping Therapy</Link></li>
                                            <li><Link className="dropdown-item" to="/sports-massage">Sports Massage</Link></li>
                                            <li><Link className="dropdown-item" to="/chiropractic-services">Chiropractic Services</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <h5>Tests</h5>
                                        <ul className="list-unstyled">
                                            <li><Link className="dropdown-item" to="/sexual-health">Sexual Health Screens</Link></li>
                                            <li><Link className="dropdown-item" to="/blood-test">All Blood Tests</Link></li>
                                            <li><Link className="dropdown-item" to="/alcohol-drug">Alcohol and Drug Tests</Link></li>
                                            <li><Link className="dropdown-item" to="/exercise-ecg">Exercise ECG</Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>





                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/stories">Stories</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <Link to="/booking-form">
                        <button className="buttonone" type="button">Book Now</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
