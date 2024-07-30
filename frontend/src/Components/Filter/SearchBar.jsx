import React, { useEffect, useState } from 'react'
import './searchbar.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { Navigate } from 'react-router-dom'
function SearchBar() {
     // SEARCHBAR
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    axios.get('/alldata.json')
      .then((response) => {
        const citys = response.data.citys;
        const filteredRooms = citys.filter((room) =>
          room.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSuggestions(filteredRooms);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  const handleSuggestionClick = (suggestions) => {
    setSearchTerm(suggestions);
  };

  let navigate = useNavigate()
  const handleSearch = () => {
    // window.open(`/${searchTerm}`);
    navigate(`/${searchTerm}`);
  };
  return (
    <div>
       <div className='search-features'>
      
      <input
        type="text"
        placeholder="Search rooms..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type='submit' onClick={handleSearch}>Search</button>
      </div>
      <div className='listofsuggestion'>
      <ul>
        {
        searchTerm &&
        suggestions.map((citys, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestions)} className='suggestion-list'>{citys}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default SearchBar
