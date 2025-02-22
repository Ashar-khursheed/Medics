// import React from 'react';
// import { Link } from "react-router-dom";
// const LocationBox = ({ title, address, phone, email, hours }) => {
//   return (
//     <div className="row d-flex justify-content-center align-items-center">
//       <div className="col-lg-8 col-md-12">
//         <div className="location-box">
//           <h5>{title}</h5>
//           <p>{address}</p>
//           <p><i className="fas fa-phone"></i> {phone}</p>
//           <p><i className="fas fa-envelope"></i> {email}</p>
//           <p><i className="fas fa-clock"></i> {hours}</p>
//         </div>
//       </div>
//       <div className="col-lg-4 col-md-12 reservation">
//         <button className="make-reservation-btn">Make Reservation</button>
//       </div>
//     </div>
//   );
// };

// export default LocationBox;
import React from "react";

const LocationBox = ({ fullName, address, contact, email }) => {
  return (
    <div className="location-box">
      <h3>{fullName}</h3>
      <p><strong>Address:</strong> {address || "No address available"}</p>
      <p><strong>Contact:</strong> {contact || "N/A"}</p>
      <p><strong>Email:</strong> {email || "N/A"}</p>
    </div>
  );
};

export default LocationBox;
