import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='search-container'>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
