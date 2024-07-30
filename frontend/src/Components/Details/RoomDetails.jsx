import React, { useEffect, useState } from 'react'
import './roomDetails.css';
import Roomdetail from '../Cards/Roomdetail';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RoomDetails() {
  let {state,id}=useParams();
  const [arr,setArr]=useState([])
  const [name,setName]=useState("")
  const [obj,setObj]=useState({address:"",name:"",id:"",price:"",imageone:"",furnishing:"",
    availablefrom:"", ac:"", balconey:"", sqr:"", gender:"",postdate:"", bhk:"",
    floor:"", member:"", owner:"",railwaystation:"",busstop:"",airpot:"",railwaykm:"",buskm:"",airpotkm:"", propertytype:""
  })
  useEffect(()=>{
    axios.get("/alldata.json").then(
      (res)=>{
        console.log(res.data.mumbai)
        setArr(res.data.mumbai)
        console.log(state,id)
        if(state === "pune"){
          TransfromData(res.data.pune)
        }else if(state === "mumbai"){
          TransfromData(res.data.mumbai)
        }else if(state === "patna"){
          TransfromData(res.data.patna)
        }else if(state === "delhi"){
          TransfromData(res.data.delhi)
        }else if(state === "hyderabad"){
          TransfromData(res.data.hyderabad)
        }else if(state === "shimla"){
          TransfromData(res.data.shimla)
        }else if(state === "amritsar"){
          TransfromData(res.data.amritsar)
        }else if(state === "jaipur"){
          TransfromData(res.data.jaipur)
        }else if(state === "chennai"){
          TransfromData(res.data.chennai)
        }else if(state === "srinagar"){
          TransfromData(res.data.srinagar)
        }else if(state === "dheradhun"){
          TransfromData(res.data.dheradun)
        }else if(state === "bangalore"){
          TransfromData(res.data.bangalore)
        }
        
      } 
    ).catch(err=>{
      console.log(err)
    })
  },[])
  const TransfromData=(data)=>{
    let result = data.filter( x=> x.id === id)
    console.log(result)
    setObj(result[0])
  }
  return (
    <div > 
      <div className='main-container'>
        <h1>{obj.name}</h1>
        <p>{obj.address}</p>
       <div className='images-map'>
        <div className='allimages'>
            <div className='img-top'>
                <div className='img-flex'>
                    <div className='imgone'><img src={obj.imageone} alt="" /></div>
                    <div className='imgtwo'><img src={obj.imagetwo} alt="" /></div>
                </div>
                <div className='img-flex2'>
                <img src={obj.imagethree} alt="" />
                </div>
            </div>
            <div className='img-bottom'>
               <div className='bottom-imgss'>
               <img src={obj.imagefour} alt="" />
               </div>
               <div className='bottom-imgss'>
               <img src={obj.imagefive} alt="" />
               </div>
               <div className='bottom-imgss'>
               <img src={obj.imagesix} alt="" />
               </div>
               <div className='bottom-imgss'>
               <img src={obj.imageseven} alt="" />
               </div>
            </div>
            
        </div>
        <div className='location'>
            <div className='top-facilites'> 
              <h3>{obj.sqr}Sq.Ft</h3>
              <p>Area</p>
            </div>
            <div className='top-facilites'> 
              <h3>{obj.propertytype}</h3>
              <p>Property Type</p>
            </div>
            <div className='top-facilites'> 
              <h3>{obj.gender}</h3>
              <p>Preferred Tenant</p>
            </div>
            <div className='top-facilites'> 
              <h3>{obj.postdate}</h3>
              <p>Posted on</p>
            </div>
            <div className='top-facilites'> 
              <h3>{obj.bhk}</h3>
              <p>Room Type</p>
            </div>
            <div className='top-facilites'> 
              <h3>{obj.floor}</h3>
              <p>Floor</p>
            </div>
            <div className='top-facilites'> 
              <h3>{obj.member}</h3>
              <p>Number of member</p>
            </div>
            <div className='top-facilites'> 
              <h3>{obj.owner}</h3>
              <p>Owner</p>
            </div>
            <Link to={'/confirmbooking'}>   <button id='gets-owner-details'>Book Now</button> </Link>
           
            
        </div>
       </div>
      </div>
         

      <div className='main-container'> 
      <div className='nearbylocation'>
        <div className='nearbydetails'>
          <div className='roombox'> 
          <div className='houseaddress'>
          <h1>{obj.name}</h1>
          <p>{obj.address}</p>
          </div>
        
            <p className='linegap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt tempore labore, suscipit illo quibusdam ipsam consequuntur nemo adipisci, debitis impedit dolor dolorum perspiciatis ratione repudiandae laborum amet dolorem provident?</p>
            </div>
            <div className='overview'>
        <h1>Overview</h1>
        <div className='overview-devision'>
          <div className='devision-left'>
           <div className='devision-left-block'>

            <div className='devision-left-block-flex'>
            <img src="https://cdn3.iconfinder.com/data/icons/interior-and-decoratives/32/living-room-512.png" alt="" />
            <p>Furnishing Status</p>
            <h4>{obj.furnishing}</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://th.bing.com/th/id/OIP.P9NcpiaWz3kfK1zxLiShKgHaG5?rs=1&pid=ImgDetMain" alt="" />
            <p>Attached Bathroom</p>
            <h4>Yes</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://th.bing.com/th/id/OIP.Np1TDORfwIHYEiVI5B80zQHaGI?rs=1&pid=ImgDetMain" alt="" />
            <p>Parking</p>
            <h4>Yes</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://www.vhv.rs/dpng/d/468-4687916_balcony-icon-png-and-vector-balcony-icon-transparent.png" alt="" />
            <p>Blconey</p>
            <h4>{obj.balconey}</h4>
            </div>
           </div>
           </div>

           <div className='devision-right-block'>

            <div className='devision-left-block-flex'>
            <img src="https://cdn4.iconfinder.com/data/icons/beer-28/100/s-10-512.png" alt="" />
            <p>Drinking Allowed</p>
            <h4>Yes</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://th.bing.com/th/id/OIP.TP0orTc7cSUWpVraCCov2wHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain" alt="" />
            <p>AC</p>
            <h4>{obj.ac}</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://i.pinimg.com/originals/5f/bf/3e/5fbf3e3a20f58b601593c04fe3eb58c9.png" alt="" />
            <p>Possession</p>
            <h4>{obj.availablefrom}</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://cdn1.iconfinder.com/data/icons/energy-and-eco/512/5-512.png" alt="" />
            <p>Water & Electricty Supply</p>
            <h4>24hr</h4>
            </div>
           </div>
          
        </div>
      </div>
            {/* <div className='facilitiesbyroom'>
              <h1>Facilities</h1>
              <div className='facilities'>
           <div className='fone' > <p style={{color: "black"}}> ✔ Free Wifi </p> <p style={{color: "black"}}>✔ Luggae Storage  </p>  <p style={{color: "black"}}>✔Font Dest[24 hours] </p>  <p style={{color: "black"}}> ✔ Room Service</p> </div>   
           <div className='ftwo'> <p style={{color: "black"}}>✔ Family </p>   <p style={{color: "black"}}> ✔Security[24 hours]</p>  <p style={{color: "black"}}>✔ Couple Friendly</p>    </div> 
              </div>
            </div> */}
        </div>

        
        <div className='property-nearby'>
            <h3>Nearby Things</h3>
            <div className='nearby-otions'><img src="https://icon-library.com/images/train-icon-free/train-icon-free-1.jpg" alt="" /><p>{obj.railwaystation}</p> <h6>{obj.railwaykm}</h6></div>
            <div className='nearby-otions'><img src="https://image.freepik.com/icones-gratuites/bus-frontal_318-33490.jpg" alt="" /><p>{obj.busstop}</p> <h6>{obj.buskm}</h6></div>
            <div className='nearby-otions'><img src="https://www.freeiconspng.com/uploads/airplane-icon-image-gallery-1.png" alt="" /><p>{obj.airpot}</p> <h6>{obj.airpotkm}</h6></div>
        </div>
      </div>
      </div>
      {/* <div className='overview'>
        <h1>Overview</h1>
        <div className='overview-devision'>
          <div className='devision-left'>
           <div className='devision-left-block'>

            <div className='devision-left-block-flex'>
            <img src="https://cdn3.iconfinder.com/data/icons/interior-and-decoratives/32/living-room-512.png" alt="" />
            <p>Furnishing Status</p>
            <h4>{obj.furnishing}</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://th.bing.com/th/id/OIP.P9NcpiaWz3kfK1zxLiShKgHaG5?rs=1&pid=ImgDetMain" alt="" />
            <p>Attached Bathroom</p>
            <h4>Yes</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://th.bing.com/th/id/OIP.Np1TDORfwIHYEiVI5B80zQHaGI?rs=1&pid=ImgDetMain" alt="" />
            <p>Parking</p>
            <h4>Yes</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://www.vhv.rs/dpng/d/468-4687916_balcony-icon-png-and-vector-balcony-icon-transparent.png" alt="" />
            <p>Blconey</p>
            <h4>{obj.balconey}</h4>
            </div>
           </div>
           </div>

           <div className='devision-right-block'>

            <div className='devision-left-block-flex'>
            <img src="https://cdn4.iconfinder.com/data/icons/beer-28/100/s-10-512.png" alt="" />
            <p>Drinking Allowed</p>
            <h4>Yes</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://th.bing.com/th/id/OIP.TP0orTc7cSUWpVraCCov2wHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain" alt="" />
            <p>AC</p>
            <h4>{obj.ac}</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://i.pinimg.com/originals/5f/bf/3e/5fbf3e3a20f58b601593c04fe3eb58c9.png" alt="" />
            <p>Possession</p>
            <h4>{obj.availablefrom}</h4>
            </div>
            <div className='devision-left-block-flex'>
            <img src="https://cdn1.iconfinder.com/data/icons/energy-and-eco/512/5-512.png" alt="" />
            <p>Water & Electricty Supply</p>
            <h4>24hr</h4>
            </div>
           </div>
          
        </div>
      </div> */}

      <div className='similar-rooms'>
        <Roomdetail/>
        <Roomdetail/>
        <Roomdetail/>
        <Roomdetail/>
        <Roomdetail/>
        <Roomdetail/> 
        <Roomdetail/>
        <Roomdetail/>
      </div>

    </div>
  )
}

export default RoomDetails
