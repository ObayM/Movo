import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 0) {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1d248ad4d6821d99cc838e53b0259a4f&query=${query}`);
        setSearchResults(response.data.results);
        setIsExpanded(true);
        setError(null);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
        setIsExpanded(false);
        setError('Failed to fetch search results. Please try again.');
      }
    } else {
      setSearchResults([]);
      setIsExpanded(false);
      setError(null);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsExpanded(false);
    setError(null);
  };

  const containerStyle = {
    padding: '10px',
    minHeight: 'calc(100vh - 64px)',
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a movie..."
      />
      <button onClick={clearSearch}>Clear</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {isExpanded && (
        <div>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          ) : (
            <div>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;