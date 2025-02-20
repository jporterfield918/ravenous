import React from 'react';
import './Business.css';

function Business = (props) => {
  return (
    <div className='business'>
        <div className="image-container">
            <img src={props.imageSrc} />
        </div>
        <h2>{props.name}</h2>
        <div className="business-information">
            <div className='business-address'>
                <p>{props.address}</p>
                <p>{props.city}</p>
                <p>{props.state}</p>
                <p>{props.zipCode}</p>
            </div>
            <div className='business-reviews'>
                <h3>{props.category}</h3>
                <h3>{props.rating}</h3>
                <p>Based on {props.reviewCount} reviews</p>
            </div>
        </div>
    </div>
  );
}

export default Business;