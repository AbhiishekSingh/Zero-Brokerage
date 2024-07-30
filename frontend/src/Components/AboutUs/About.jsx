import React from 'react';

const About = ({ name, address, price,imageUrl }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-info">
        <h2 className="hotel-name">{name}</h2>
        <p className="hotel-address">{address}</p>
        <p className="hotel-price">${price} per night</p>
        <button className="book-now">Book Now</button>
      </div>
      <div className="hotel-image">
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
};

export default About;