import React from 'react';
import './mumbai.css'
import Allrooms from '../Cards/Allrooms/Allrooms';
// import { mumbai, shimla } from '../../data';

export default function Mumbai() {

  // let name, address, city;
  // const currentPath = window.location.pathname;
  // if(currentPath == '/mumbai'){
  //   name = mumbai.name;
  //   address = mumbai.address;
  // }
  // if(currentPath == '/shimla'){
  //   name = shimla.name;
  //   address = mumbai.address;
  // }
  return (
    <div>
       <div class="Mumbai-BG">
     <img class="city-image" src="https://t3.ftcdn.net/jpg/03/05/10/36/360_F_305103678_FZuxcPWkF23tYq3508bJEHmVweqDwVe1.jpg" alt="Mumbai"/>
     <div class="Mumbai-theam">Mumbai's Rooms & Place to stay</div>
     <div className='Mumbai-sarch'>
     <div className='searchfrommumbai'>
      <input  className="searchFM" type="text" placeholder=' Enter Destination' />
      <button className='mumbaiBTN' type='submit'>Search</button>
      </div>
     </div>
     </div>


  <div className='mumbai-rooms'>
    <h1 className='mumbai-MH'>Rooms in Mumbai, Maharashtra</h1>
  <Allrooms name="1bhk" address="Borivali" price="15k"/>
  <Allrooms name="2bhk" address="Virar" price="12k"/>
  <Allrooms name="2bhk" address="Vasai" price="10k"/>
  <Allrooms name="3bhk" address="Mira Road" price="18k"/>
  <Allrooms name="1bhk" address="Nalasopara" price="5k"/>
  <Allrooms name="2bhk" address="Virar" price="12k"/>
  <Allrooms name="1bhk" address="Santaruz" price="15k"/>
  <Allrooms name="1bhk" address="Bandra" price="25k"/>
  <Allrooms name="2bhk" address="Andheri" price="30k"/>
  <Allrooms name="1bhk" address="Matunga" price="28k"/>
  <Allrooms name="3bhk" address="Lower Parel" price="85k"/>
  <Allrooms name="1bhk" address="Dadar" price="50k"/>
    </div>

    </div>
  )
}
