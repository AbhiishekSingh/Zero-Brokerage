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
import Pune from './Components/Citys/Pune'
import Bangalore from './Components/Citys/Bangalore'
import Dheradun from './Components/Citys/Dheradun'
import Amritsar from './Components/Citys/Amritsar'
import CitysRooms from './Components/Citys/CitysRooms'
import Jaipur from './Components/Citys/Jaipur'
import Rooms from './Components/AllRooms/Rooms'
import Booking from './Components/Booking/Booking'
import ShowModal from './Components/Booking/ShowModal'
import Delhi from './Components/Citys/Delhi'
import Hyderabad from './Components/Citys/Hyderabad'




const Routers = () => {
  return (
    <div>
      
        <Header/>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/allrooms' element={<Rooms/>} />
        <Route path='/citysrooms' element={<CitysRooms/>}/>
        <Route path='/:state/:id' element={<RoomDetails/>}/>
        <Route path='/mumbai' element={<Mumbai/>} />
        <Route path='/delhi' element={<Delhi/>} />
        <Route path='/shimla' element={<Simla/>} />
        <Route path='/hyderabad' element={<Hyderabad/>} />
        <Route path='/patna' element={<Patna/>} />
        <Route path='/jaipur' element={<Jaipur/>} />
        <Route path='/srinagar' element={<Srinagar/>} />
        <Route path='/pune' element={<Pune/>} />
        <Route path='/bangalore' element={<Bangalore/>} />
        <Route path='/dheradun' element={<Dheradun/>} />
        <Route path='/amritsar' element={<Amritsar/>} />
        <Route path='/chennai' element={<Chennai/>} />
        <Route path='/signup' element={<SingUp/>} /> 
        <Route path='/confirmbooking' element={<Booking/>} />
        <Route path='/showmodel' element={<ShowModal/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default Routers
