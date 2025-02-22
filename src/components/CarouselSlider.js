import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
const CarouselSlider = () => {
  useEffect(() => {
    $('#drivingCarousel').on('slide.bs.carousel', function (e) {
      const $e = $(e.relatedTarget);
      const idx = $e.index();
      const itemsPerSlide = 4; // Number of cards visible per slide
      const totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i = 0; i < it; i++) {
          if (e.direction === 'left') {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          } else {
            $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
        }
      }
    });
  }, []);

  return (
    <div id="drivingCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {/* Add your carousel items here */}
        <div className="carousel-item active">Slide 1</div>
        <div className="carousel-item">Slide 2</div>
        <div className="carousel-item">Slide 3</div>
        <div className="carousel-item">Slide 4</div>
      </div>
      <Link className="carousel-control-prev" to="#drivingCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </Link>
      <Link className="carousel-control-next" to="#drivingCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </Link>
    </div>
  );
};

export default CarouselSlider;
