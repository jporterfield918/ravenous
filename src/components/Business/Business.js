import React from 'react';
import styles from './Business.css';

const business = {
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flint',
        state: 'MI',
        zipCode: '48504',
        category: 'Italian',
        rating: '4.5 stars',
        reviewCount: 90
};

function Business() {
  return (
    <div className='business'>
        <div className="image-container">
            <img src={business.imageSrc} />
        </div>
        <h2>{business.name}</h2>
        <div className="business-information">
            <div className='business-address'>
                <p>{business.address}</p>
                <p>{business.city}, {business.state} {business.zipCode}</p>
            </div>
            <div className='business-reviews'>
                <h3>{business.category}</h3>
                <h3 className='rating'>{business.rating}</h3>
                <p>Based on {business.reviewCount} reviews</p>
            </div>
        </div>
    </div>
  );
}

export default Business;