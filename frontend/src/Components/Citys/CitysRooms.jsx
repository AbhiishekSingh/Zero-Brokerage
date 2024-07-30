import React, { useEffect, useState } from 'react'
import './mumbai.css'
import Allrooms from '../Cards/Allrooms/Allrooms'
import axios from 'axios';
import Filter from '../Filter/Filter';

function CitysRooms(props) {
    const {state}= props;
  const[arr,setArr]=useState([]);
  useEffect(()=>{
    axios.get("/alldata.json").then(
      (res)=>{
        setArr(res.data.patna)
      } 
    ).catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div>
     <div class="Mumbai-BG">
        <img class="city-image" src="https://t3.ftcdn.net/jpg/03/05/10/36/360_F_305103678_FZuxcPWkF23tYq3508bJEHmVweqDwVe1.jpg" alt="Mumbai" />
        <div class="Mumbai-line">Jaipur's Rooms & Place to stay</div>
        <div className='City-sarch'>
          <div className='searchfrommumbai'>
            <input className="searchFM" type="text" placeholder=' Enter Destination' />
            <button className='mumbaiBTN' type='submit'>Search</button>
          </div>
        </div>
      </div>

      <div className='city-filter'>
        <Filter/>
     
  <div className='mumbai-rooms'>
  <h1 className='mumbai-MH'>Rooms in Jaipur, Rajasthan</h1>
  {arr.map((x,index)=>{
    return(
      <Allrooms name={x.name} address={x.address} price={x.price} id={x.id} state={`/${state}`}/>
    )
  })} 
   </div>
    </div>
    </div>
  )
}

export default CitysRooms
