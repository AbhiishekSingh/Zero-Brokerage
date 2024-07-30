import React, { useState } from 'react'
import './filter.css'

function Filter() {
  const [price, setPrice]=useState(100000)
  const [lowPrice, setlowPrice]= useState(0)
  const handlePriceChange = (e) => {
    const newMaxPrice= parseInt(e.target.value);
    setPrice(newMaxPrice);
    filterRooms(minPrice, newMaxPrice);
  };

  return (
    <div>
      <div class="filter-container">
          <div class="filter-header">
            <h2>Filters</h2>
          </div>
          <div class="filter-section">
            <h3>BHK Type</h3>
            <div class="bhk-options">
              <button>1 RK</button>
              <button>1 BHK</button>
              <button>2 BHK</button>
              <button>3 BHK</button>
              <button>4 BHK</button>
              <button>4+ BHK</button>
            </div>
          </div>
          
          <div class="filter-section">
            <h3>Price Range: ₹ {lowPrice} to {price}</h3>
            <input type="range" min="0" max="100000" value={price} onChange={handlePriceChange} class="price-range" />
          </div>
          <div class="filter-section">
            <h3>Property Status</h3>
            <label><input type="radio" name="property-status" value="under-construction" /> Under Construction</label>
            <label><input type="radio" name="property-status" value="ready" /> Ready</label>
          </div>
          <div class="filter-section">
            <h3>Furnishing</h3>
            <label><input type="checkbox" name="furnishing" value="full" /> Full</label>
            <label><input type="checkbox" name="furnishing" value="semi" /> Semi</label>
            <label><input type="checkbox" name="furnishing" value="none" /> None</label>
          </div>
          <div class="filter-section">
            <h3>Property Type</h3>
            <label><input type="checkbox" name="property-type" value="apartment" /> Apartment</label>
            <label><input type="checkbox" name="property-type" value="independent-house" /> Independent House/Villa</label>
            <label><input type="checkbox" name="property-type" value="gated-community" /> Gated Community Villa</label>
            <label><input type="checkbox" name="property-type" value="standalone-building" /> Standalone Building</label>
          </div>
        </div>
    </div>
  )
}

export default Filter
