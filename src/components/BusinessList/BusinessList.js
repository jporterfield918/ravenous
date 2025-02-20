import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

const businesses = [
    {
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flint',
        state: 'MI',
        zipCode: '48504',
        category: 'Italian',
        rating: '4.5 stars',
        reviewCount: 90
    },{
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flint',
        state: 'MI',
        zipCode: '48504',
        category: 'Italian',
        rating: '4.5 stars',
        reviewCount: 90
    },{
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flint',
        state: 'MI',
        zipCode: '48504',
        category: 'Italian',
        rating: '4.5 stars',
        reviewCount: 90
    }
];

const BusinessList = () => {
    return (
        <div className="BusinessList">
            {
                businesses.map(business => {
                    return <Business business={business} />;
                })
            }
        </div>
    );
}

export default BusinessList;
// In the code above, we created a new component called BusinessList. This component is responsible for rendering a list of Business components. The BusinessList component is a functional component that returns a div with the className 'BusinessList'. Inside the div, we use the map method to iterate over the businesses array. For each business object in the array, we return a Business component with the business object as a prop. Finally, we export the BusinessList component.