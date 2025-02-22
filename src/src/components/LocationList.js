import React from 'react';
import LocationBox from './LocationBox';

const LocationList = () => {
  const locations = [
    {
      title: 'Birmingham (Hagley Road)',
      address: 'Quinton Natural Therapies, 454 Hagley Road West, Quinton Birmingham, B68 0DL',
      phone: '0121 661 2739',
      email: 'info@adomain.com',
      hours: '09:00 AM - 06:00 PM',
    },
    {
      title: 'Another Location',
      address: '123 Another Road, Some City, ZIP',
      phone: '0121 123 4567',
      email: 'contact@anotherdomain.com',
      hours: '08:00 AM - 05:00 PM',
    },
    // Add more locations as needed
  ];

  return (
    <div className="row locationmainrow">
      {locations.map((location, index) => (
        <React.Fragment key={index}>
          <LocationBox {...location} />
          {index !== locations.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LocationList;
