import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import styles from './App.css';

const businesses = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1>Ravenous</h1>
        </div>
        <SearchBar />
      </header>
      <div className="App-body">
        <BusinessList businesses={businesses} />
      </div>
    </div>
  );
}

export default App;
