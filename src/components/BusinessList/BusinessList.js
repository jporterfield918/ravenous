import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.css';

function BusinessList() {
    return (
        <div className="BusinessList">
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
}

export default BusinessList;
// In the code above, we created a new component called BusinessList. This component is responsible for rendering a list of Business components. The BusinessList component is a functional component that returns a div with the className 'BusinessList'. Inside the div, we use the map method to iterate over the businesses array. For each business object in the array, we return a Business component with the business object as a prop. Finally, we export the BusinessList component.