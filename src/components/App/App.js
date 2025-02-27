import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import styles from './App.css';

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
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
