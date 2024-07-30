import React, { useEffect, useState } from 'react'
import './mumbai.css'
import Allrooms from '../Cards/Allrooms/Allrooms'
import axios from 'axios';
import SearchBar from '../Filter/SearchBar';

function Jaipur() {

  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);


  useEffect(() => {
    axios.get('/alldata.json')
      .then(response => {
        setRooms(response.data.jaipur);
        setFilteredRooms(response.data.jaipur); // Initialize filtered rooms with all rooms
      })
      .catch(error => {
        console.error('Error fetching room data: ', error);
      });
  }, []);

  const handlePriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    setMaxPrice(newMaxPrice);
    filterRooms(minPrice, newMaxPrice);
  };

  const filterRooms = (min, max) => {
    const filtered = rooms.filter(x => x.price >= min && x.price <= max);
    setFilteredRooms(filtered);
  };

  const handleFilterClick = (bhkType) => {
    const filtered = rooms.filter(x => x.bhk === bhkType);
    setFilteredRooms(filtered);
  };

  const handleFurnishingClick = (furnish) => {
    const filtered = rooms.filter(x => x.furnishing === furnish);
    setFilteredRooms(filtered);
  };
  const handlePropertyTypeClick = (property) => {
    const filtered = rooms.filter(x => x.propertytype === property);
    setFilteredRooms(filtered);
  };

  return (
    <div>
      <div class="Mumbai-BG">
        <img class="city-image" src="https://t3.ftcdn.net/jpg/03/05/10/36/360_F_305103678_FZuxcPWkF23tYq3508bJEHmVweqDwVe1.jpg" alt="Mumbai" />
        <div class="Mumbai-line">Jaipur's Rooms & Place to stay</div>
        <div className='City-sarchbar'>
          <SearchBar/>
        </div>
      </div>

      <div className='city-filter'>
      <div>
      <div class="filter-container">
          <div class="filter-header">
            <h2>Filters</h2>
          </div>
          <div class="filter-section">
            <h3>BHK Type</h3>
            <div class="bhk-options">
            <button onClick={() => handleFilterClick('1 BHK')}>1 Bhk</button>
            <button onClick={() => handleFilterClick('2 BHK')}>2 Bhk</button>
            <button onClick={() => handleFilterClick('3 BHK')}>3 Bhk</button>
            <button onClick={() => handleFilterClick('4 BHK')}>4 Bhk</button>
            <button onClick={() => handleFilterClick('4+ BHK')}>4+ Bhk</button>
            </div>
          </div>
          
          <div class="filter-section">
            <h3>Price Range: ₹ {minPrice} to {maxPrice}</h3>
            <input type="range" min="0" max="50000" value={maxPrice} onChange={handlePriceChange} class="price-range" />
          </div>
          <div class="filter-section">
            <h3>Property Status</h3>
            <label><input type="radio" name="property-status" value="under-construction" /> Under Construction</label>
            <label><input type="radio" name="property-status" value="ready" /> Ready</label>
          </div>
          <div class="filter-section">
            <h3>Furnishing</h3>
            <label><input type="checkbox" name="furnishing" onClick={() =>  handleFurnishingClick('Fully furnished')} /> Full</label>
            <label><input type="checkbox" name="furnishing" onClick={() =>  handleFurnishingClick('Semi furnished')} /> Semi</label>
            <label><input type="checkbox" name="furnishing" onClick={() =>  handleFurnishingClick('None')} /> None</label>
          </div>
          <div class="filter-section">
            <h3>Property Type</h3>
            <label><input type="checkbox" name="property-type" onClick={() =>  handlePropertyTypeClick('Apartment')} /> Apartment</label>
            <label><input type="checkbox" name="property-type"  onClick={() =>  handlePropertyTypeClick('Independent House/Villa')}/> Independent House/Villa</label>
            <label><input type="checkbox" name="property-type" onClick={() =>  handlePropertyTypeClick('Gated Community Villa')} /> Gated Community Villa</label>
            <label><input type="checkbox" name="property-type" onClick={() =>  handlePropertyTypeClick('Standalone Building')} /> Standalone Building</label>
          </div>
        </div>
    </div>
      
  <div className='mumbai-rooms'>
  <h1 className='mumbai-MH'>Rooms in Jaipur, Rajesthan</h1>
  {filteredRooms.map((x,index)=>{
    return(
      <Allrooms name={x.name} address={x.address} price={x.price} id={x.id}
      sqr={x.sqr} furnishing={x.furnishing} appartment={x.appartment} availablefrom={x.availablefrom}  state={"jaipur"}/>
    )
  })} 
    </div>
    </div>
    </div>
  )
}

export default Jaipur
