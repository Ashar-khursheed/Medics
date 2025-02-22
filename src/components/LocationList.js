// import React from 'react';
// import LocationBox from './LocationBox';
// import { Link } from "react-router-dom";
// const LocationList = () => {
//   const locations = [
//     {
//       title: 'Birmingham (Hagley Road)',
//       address: 'Quinton Natural Therapies, 454 Hagley Road West, Quinton Birmingham, B68 0DL',
//       phone: '0121 661 2739',
//       email: 'info@adomain.com',
//       hours: '09:00 AM - 06:00 PM',
//     },
//     {
//       title: 'Another Location',
//       address: '123 Another Road, Some City, ZIP',
//       phone: '0121 123 4567',
//       email: 'contact@anotherdomain.com',
//       hours: '08:00 AM - 05:00 PM',
//     },
//     // Add more locations as needed
//   ];

//   return (
//     <div className="row locationmainrow">
//       {locations.map((location, index) => (
//         <React.Fragment key={index}>
//           <LocationBox {...location} />
//           {index !== locations.length - 1 && <hr />}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import LocationBox from "./LocationBox";

const LocationList = ({ onLocationClick }) => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    fetch("https://medics-admin.themarketingfactory.co.uk/api/clinics") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.clinics) {
          const formattedClinics = data.clinics.map((clinic) => {
            const user = clinic.data.user;
            const address = clinic.data.user.address || {};

            return {
              id: clinic.data.id,
              fullName: user.full_name,
              email: user.email,
              contact: user.contact,
              address: [
                address.address1 || "",
                address.address2 || "",
                address.city_id || "",
                address.state_id || "",
                address.country_id || "",
                address.postal_code || "",
              ]
                .filter((part) => part) // Remove empty values
                .join(", "),
              latitude: clinic.data.latitude,
              longitude: clinic.data.longitude,
            };
          });
          setClinics(formattedClinics);
        }
      })
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  return (
    <div className="row locationmainrow">
      {clinics.map((clinic) => (
        <React.Fragment key={clinic.id}>
          <div
            onClick={() => {
              if (clinic.latitude && clinic.longitude) {
                onLocationClick(clinic.latitude, clinic.longitude);
              } else {
                alert("Location not available for this clinic.");
              }
            }}
          >
            <LocationBox {...clinic} />
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default LocationList;
