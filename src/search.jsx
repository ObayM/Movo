import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const SearchPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Simulated search results - replace with actual API call
    const fakeResults = ['Inception', 'Interstellar', 'The Dark Knight', 'Pulp Fiction', 'The Matrix'];
    setSearchResults(fakeResults.filter(movie => movie.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };
  const containerStyle = {
    padding: '10px',
    minHeight:' calc(100vh - 64px)',
  };

  return (
    <div style={containerStyle} className="container bg-gradient-to-br from-gray-900 to-indigo-900 ">
    <div className="relative w-full max-w-2xl mx-auto mt-8">
      <div className={`flex items-center bg-white rounded-full overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'w-full' : 'w-12 h-12'}`}>
        <button
          className="p-3 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Search size={24} />
        </button>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for movies or TV shows..."
          className={`w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button
            className="p-3 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={clearSearch}
          >
            <X size={24} />
          </button>
        )}
      </div>
      {isExpanded && searchResults.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-10">
          <ul className="divide-y divide-gray-200">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-150 ease-in-out"
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchPage;