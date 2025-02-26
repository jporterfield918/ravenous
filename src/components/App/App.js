import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <div className="App-body">
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
