import React from 'react';

const LocationSearchBar = () => {
  return (
    <div className="row locationrow">
      <div className="d-flex justify-content-between align-items-center filter-options p-3 mb-3">
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input type="text" className="search-bar" placeholder="Enter Location" />
        </div>
        <div>
          <input type="checkbox" id="nearMe" />
          <label className="label1" htmlFor="nearMe">Near To Me</label>
        </div>
        <div>
          <input type="checkbox" id="bookingAvailable" />
          <label className="label1" htmlFor="bookingAvailable">Booking Available</label>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchBar;
