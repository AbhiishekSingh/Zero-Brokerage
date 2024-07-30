import React, { useEffect, useState } from 'react'
import './rooms.css'
import Allrooms from '../Cards/Allrooms/Allrooms'
import axios from 'axios';
import Filter from '../Filter/Filter';

function Rooms() {
  const[arr,setArr]=useState([]);
  useEffect(()=>{
    axios.get("/alldata.json").then(
      (res)=>{
        setArr(res.data.toprooms)
      } 
    ).catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div>

     <div className='city-filter'>
      <Filter/>
  <div className='mumbai-rooms'>
  <h1 className='mumbai-MH'>Our Top Rooms all over india</h1>
  {arr.map((x,index)=>{
    return(
      <Allrooms name={x.name} address={x.address} price={x.price} id={x.id} state={"toprooms"}/>
    )
  })}
    </div>
    </div>
    </div>
  )
}

export default Rooms
