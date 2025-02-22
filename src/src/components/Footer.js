import React from 'react';
import '../assets/style.css'; // Assuming you have a separate CSS file for styles
import img1 from '../assets/img/galleryimg/1.png';
import img2 from '../assets/img/galleryimg/2.png';
import img3 from '../assets/img/galleryimg/3.png';
import img4 from '../assets/img/galleryimg/4.png';
import img5 from '../assets/img/galleryimg/5.png';
import img6 from '../assets/img/galleryimg/6.png';

const Footer = () => {
    const galleryImages = [img1, img2, img3, img4, img5, img6];
    return (
        <footer className="container-fluid">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-col">
                        <h5>Drive Thru Medics</h5>
                        <p>Lorem ipsum dolor sit amet consectetur. Amet diam placerat eget sed. Proin luctus sagittis lorem ipsum.</p>
                        <p><i className="bi bi-geo-alt-fill"></i> 23/A Road, NewYork City</p>
                        <p><i className="bi bi-telephone-fill"></i> +9888-255-6568</p>
                        <div className="social-icons">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-pinterest"></i>
                            <i className="bi bi-instagram"></i>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-col">
                        <h4>Our Categories</h4>
                        <ul>
                            {["Category One", "Category Two", "Category Three", "Category Four", "Category Five", "Category Six", "Category Seven"].map((category, index) => (
                                <li key={index}><Link to="#">{category}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-col">
                        <h4>Footer Menu</h4>
                        <ul>
                            {["Category One", "Category Two", "Category Three", "Category Four", "Category Five", "Category Six", "Category Seven"].map((menuItem, index) => (
                                <li key={index}><Link to="#">{menuItem}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            {["Category One", "Category Two", "Category Three", "Category Four", "Category Five", "Category Six", "Category Seven"].map((link, index) => (
                                <li key={index}><Link to="#">{link}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 footer-col">
                        <h4>Recent Gallery</h4>
                        <div className="gallery">
                            {galleryImages.map((img, index) => (
                                <img key={index} src={img} alt="gallery" />
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row d-flex mt-4">
                    <div className="col-12 text-center">
                        <div className="row w-100 d-flex align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="copyright text-start">
                                    &copy; 2024 Drive Thru Medics. All Rights Reserved
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="payment-icons text-end">
                                    <img className="footerimg" src="./assets/img/hp.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
