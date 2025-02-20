import React from 'react';

function Business() {
  return (
    <div className='business'>
        <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt='pizza' />
        <h1>MarginOtto Pizzeria</h1>
        <div className="business-information">
            <div className='business-address'>
                <p>Address: 1010 Paddington Way</p>
                <p>City: Flint</p>
                <p>State: MI</p>
                <p>Zip Code: 48504</p>
            </div>
            <div className='business-reviews'>
                <h3>Reviews</h3>
                <h3>3.5 stars</h3>
                <p>Based on 90 reviews</p>
            </div>
        </div>
    </div>
  );
}