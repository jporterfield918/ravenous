import React from 'react';

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    <li key='best_match'>Best Match</li>
                    <li key='rating'>Highest Rated</li>
                    <li key='review_count'>Most Reviewed</li>
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="What Sounds Good?" />
                <input placeholder="Where? (City, State, or Zip Code)" />
            </div>
            <div className="SearchBar-submit">
                <button type='submit'>Let's Eat!</button>
            </div>
        </div>
    );
}

export default SearchBar;