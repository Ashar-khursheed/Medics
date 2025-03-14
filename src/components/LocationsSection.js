// import React from 'react';
// import LocationSearchBar from './LocationSearchBar';
// import LocationList from './LocationList';
// import Map from './Map';
// import { Link } from "react-router-dom";
// const LocationsSection = () => {
//   return (
//     <section className=" mb-2">
//       <div className="container location-section">
//         <div className="d-flex justify-content-center align-items-center locationheading">
//           <h5 className="subheading features d-flex justify-content-center">Our Locations</h5>
//           <h1 className="mt-3 featureshead">See Where We're Located</h1>
//         </div>
//         <div className="row mt-4">
//           <div className="col-lg-6 col-md-12 locationcol">
//             <LocationSearchBar />
//             <LocationList />
//           </div>
//           <div className="col-lg-6 col-md-12 p-0">
//             <Map />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useState } from "react";
import LocationSearchBar from "./LocationSearchBar";
import LocationList from "./LocationList";
import Map from "./Map";

const LocationsSection = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 44.9684, // Default location
    longitude: -93.2913,
  });

  return (
    <section className="mb-2">
      <div className="container location-section">
        <div className="d-flex justify-content-center align-items-center locationheading">
          <h5 className="subheading features d-flex justify-content-center">Our Locations</h5>
          <h1 className="mt-3 featureshead">See Where We're Located</h1>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 col-md-12 locationcol">
            <LocationSearchBar />
            <LocationList
              onLocationClick={(lat, lng) => setSelectedLocation({ latitude: lat, longitude: lng })}
            />
          </div>
          <div className="col-lg-6 col-md-12 p-0">
            <Map latitude={selectedLocation.latitude} longitude={selectedLocation.longitude} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
