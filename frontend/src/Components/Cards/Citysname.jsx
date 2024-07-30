import React from 'react'
import './cittysname.css'

function Citysname({nameofcity, nameofthecity}) {
  return (
    <div>
      <div className="city-card">
    <img className="city-image" src={nameofcity} alt="Mumbai"/>
    <div className="city-name">{nameofthecity}</div>
  </div>
    </div>
  )
}

export default Citysname
