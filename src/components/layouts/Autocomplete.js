import React, { useState } from 'react';
import './stylee.css';

const Autocomplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(localStorage.getItem("provider"));

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  

    // Filter suggestions based on input value
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toString().toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filteredSuggestions);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    if(value!="All Providers")
    {
    localStorage.setItem("provider", value);
    window.location="../ALL/"+value;
    }
    else
    {
      localStorage.setItem("provider", '');
      window.location="../ALL/Play'n%20GO";
    }
  };

  return (
    <div className="autocomplete-container">
      <input
        className="autocomplete-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search providers"
      />
      <ul className="autocomplete-suggestions">
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} className="autocomplete-suggestion" onClick={() => handleSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;