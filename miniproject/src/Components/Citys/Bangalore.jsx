import React from 'react'
import './mumbai.css'
import Allrooms from '../Cards/Allrooms/Allrooms'

function Bangalore() {
  return (
    <div>
      <div class="Mumbai-BG">
     <img class="city-image" src="https://t3.ftcdn.net/jpg/03/05/10/36/360_F_305103678_FZuxcPWkF23tYq3508bJEHmVweqDwVe1.jpg" alt="Mumbai"/>
     <div class="Mumbai-theam">Bangalore's Rooms & Place to stay</div>
     <div className='Mumbai-sarch'>
     <div className='searchfrommumbai'>
      <input  className="searchFM" type="text" placeholder=' Enter Destination' />
      <button className='mumbaiBTN' type='submit'>Search</button>
      </div>
     </div>
     </div>


  <div className='mumbai-rooms'>
  <h1 className='mumbai-MH'>Rooms in Bangalore, Karnatak</h1>
  <Allrooms name="1bhk" address= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit. Iure, eligendi!" price="15k"/>
  <Allrooms name="1bhk" address= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit. Iure, eligendi!" price="15k"/>
  <Allrooms name="1bhk" address= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit. Iure, eligendi!" price="15k"/>
  <Allrooms name="1bhk" address= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit. Iure, eligendi!" price="15k"/>
  <Allrooms name="1bhk" address= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit. Iure, eligendi!" price="15k"/>
  <Allrooms name="1bhk" address= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit. Iure, eligendi!" price="15k"/>
  <Allrooms name="1bhk" address= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit. Iure, eligendi!" price="15k"/>
  <Allrooms name="1bhk" address= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit. Iure, eligendi!" price="15k"/>
  <Allrooms name="1bhk" address= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit. Iure, eligendi!" price="15k"/>
  
    </div>
    </div>
  )
}

export default Bangalore