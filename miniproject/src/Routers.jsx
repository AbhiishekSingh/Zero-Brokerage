import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import RoomDetails from './Components/Details/RoomDetails'
import SingUp from './Components/Login/SingUp'
import AboutUs from './Components/AboutUs/AboutUs'
import Mumbai from './Components/Citys/Mumbai'
import Simla from './Components/Citys/Simla'
import Chennai from './Components/Citys/Chennai'
import Patna from './Components/Citys/Patna'
import Srinagar from './Components/Citys/Srinagar'
import Ahemdabad from './Components/Citys/Ahemdabad'
import Kolkata from './Components/Citys/Kolkata'
import Pune from './Components/Citys/Pune'
import Bangalore from './Components/Citys/Bangalore'
import Dheradun from './Components/Citys/Dheradun'
import Amritsar from './Components/Citys/Amritsar'
import Jaipur from './Components/Citys/Jaipur'
import Rooms from './Components/AllRooms/Rooms'


const Routers = () => {
  return (
    <div>
      
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/allrooms' element={<Rooms/>} />
        <Route path='/roomdetails' element={<RoomDetails/>}/>
        <Route path='/mumbai' element={<Mumbai/>} />
        <Route path='/shimla' element={<Simla/>} />
        <Route path='/patna' element={<Patna/>} />
        <Route path='/jaipur' element={<Jaipur/>} />
        <Route path='/srinagar' element={<Srinagar/>} />
        <Route path='/ahemdabad' element={<Ahemdabad/>} />
        <Route path='/kolkata' element={<Kolkata/>} />
        <Route path='/pune' element={<Pune/>} />
        <Route path='/bangalore' element={<Bangalore/>} />
        <Route path='/dheradun' element={<Dheradun/>} />
        <Route path='/amritsar' element={<Amritsar/>} />
        <Route path='/chennai' element={<Chennai/>} />
        <Route path='/signup' element={<SingUp/>} /> 
        </Routes>
        <Footer/>
    </div>
  )
}

export default Routers
