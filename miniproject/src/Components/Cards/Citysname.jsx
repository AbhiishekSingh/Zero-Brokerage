import React from 'react'
import './cittysname.css'

function Citysname({nameofcity, nameofthecity}) {
  return (
    <div>
      <div class="city-card">
    <img class="city-image" src={nameofcity} alt="Mumbai"/>
    <div class="city-name">{nameofthecity}</div>
  </div>
    </div>
  )
}

export default Citysname
