import React from 'react'
import './home.css'
import Citysname from '../Cards/Citysname'
import Roomdetail from '../Cards/Roomdetail'
import Steps from '../Cards/Steps'
import RoomDetails from '../Details/RoomDetails'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
     <div className='hu'>
      Find Your Room here..!
      <div className='search-features'>
      <input type="text" placeholder=' Enter Destination' />
      <input type='date' />
      <button type='submit'>Search</button>
      </div>
      </div> 

      <div className='citys-head'>Book in 3 Easy Steps!</div>
      <div className='stepss'>
        <Steps images={"https://static.uhzcdn.com/pc2020/prod/img/book1.de92094.png"} descri="Discover & Secure your place" dis={"Choose from a wide range of verified student properties"}/>
        <Steps images={"https://static.uhzcdn.com/pc2020/prod/img/book2.0c63787.png"} descri="Complete your application" dis={"Days of lengthy paperwork are gone. Let us do the heavy lifting for you"}/>
        <Steps images={"https://static.uhzcdn.com/pc2020/prod/img/book3.c066c4c.png"} descri="Your booking is done" dis={"Now you can relax, pack your bags, and begin your new journey"}/>
      </div>

      <div className='citys-head'>Book Your Perfect Housing</div>
      <div className='citys-desc'>Eliminate the inconvenience of arranging your housing during your prime years.</div>
      <div className='allcitys'>
       <Link to="/mumbai"> <Citysname nameofthecity={"Mumbai"} nameofcity={"https://images.thequint.com/thequint/2017-12/05e8e3a6-795a-4479-beb1-37ff0b3afaf3/2.jpg?auto=format%2Ccompress"}/> </Link>
      <Link to="/shimla"> <Citysname nameofthecity={"Simla"} nameofcity={"https://cdn1.tripoto.com/media/filter/tst/img/567364/Image/1528282516_j.jpg"}/> </Link>
      <Link to="/chennai"> <Citysname nameofthecity={"Chennai"} nameofcity={"https://th.bing.com/th/id/R.9cb2d345f8c8f53bcfeebeaf122902dd?rik=pPngcWfdc0uQzw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-75QK62KauXU%2fT9QxESqI5_I%2fAAAAAAAAHd8%2ftk72E_lbaEU%2fs1600%2fChennai_Central_.jpg&ehk=6bDlca3m1m3Z9RSU3T%2fpIzbNrRZQrNDfjO1okoXqRVY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"}/> </Link>
      <Link to="/jaipur"> <Citysname nameofthecity={"Jaipur"} nameofcity={"https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Hawa-mahal.jpg"}/> </Link> 
      <Link to="/bangalore"> <Citysname nameofthecity={"Bangalore"} nameofcity={"https://images.yourstory.com/production/document_image/mystoryimage/4h0ck631-Vidhana_Souda_,_Bangalore.jpg?fm=png&auto=format"}/></Link> 
      <Link to="/srinagar">  <Citysname nameofthecity={"Srinagar"} nameofcity={"https://kashmircome.com/images/resource/insta-7.jpg"}/></Link> 
      <Link to="/kolkata"><Citysname nameofthecity={"Kolkata"} nameofcity={"https://www.india-a2z.com/images/VICTORIA-MEMORIAL.jpg"}/> </Link> 
      <Link to="/ahemdabad"><Citysname nameofthecity={"Ahemdabad"} nameofcity={"https://i.pinimg.com/originals/69/cb/9e/69cb9e749a819e5a6f1fb7326bd48797.jpg"}/> </Link> 
      <Link to="/patna"><Citysname nameofthecity={"Patna"} nameofcity={"https://www.holidify.com/images/compressed/3463.jpg"}/> </Link> 
      <Link to="/pune"><Citysname nameofthecity={"Pune"} nameofcity={"https://th.bing.com/th/id/R.2f668e08dfb28c66b9a2e336b4dc5ac3?rik=41f2Ze%2bRg6nAeg&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f12400000%2fshaniwarwada-pune-city-puneites-12473759-1600-1200.jpg&ehk=Ua%2bTcumB2KkoPXVeVEoGjKzojnNE1%2foSzNgQnjDA4Bo%3d&risl=&pid=ImgRaw&r=0"}/> </Link> 
      <Link to="/amritsar"><Citysname nameofthecity={"Amritsat"} nameofcity={"https://i.pinimg.com/originals/e4/bc/f7/e4bcf7899c58a13000da719f308d79fc.jpg"}/> </Link> 
      <Link to="/dheradun"><Citysname nameofthecity={"Dheradun"} nameofcity={"https://th.bing.com/th/id/OIP.aqrZ92PBJ9YOPDOqArd7gQAAAA?rs=1&pid=ImgDetMain"}/> </Link> 

       </div>


       <h1 className='Accommondation'>Book your perfect Accommodation</h1>
      <div className='middle'>
        <div className='one'>
          <img className="oneimg" src="	https://prod-static-assets.amberstudent.com/images/fast-and-easy-bookings.svg" alt="" />
          <h2 className='oneh1'>Quick & easy bookings</h2>
          <p className='onep'>Time is Money. Save both when you book with us.</p>
        </div>
        <div className='one'>
          <img className="oneimg" src="	https://prod-static-assets.amberstudent.com/images/expert-assistance.svg" alt="" />
          <h2 className='oneh1'>Price Match Guarantee</h2>
          <p className='onep'>Find a Lower price and we'll.
          no. of question asked.</p>
        </div>
        <div className='one'>
          <img className="oneimg" src="https://prod-static-assets.amberstudent.com/images/verified-listings.svg
" alt="" />
          <h2 className='oneh1'>24X7 Assestance</h2>
          <p className='onep'>If you have a dought or a query,
          we are always a call away</p>
        </div>
        <div className='one'>
          <img className="oneimg" src="https://prod-static-assets.amberstudent.com/images/price-match-guarantee.svg" alt="" />
          <h2 className='oneh1'>100% Verified Listings.</h2>
          <p className='onep'>We promise to deliver what you see on the website</p>
        </div>
      </div>



      <div className='our-rooms'>Most Popular Homes for You </div>
      <div className='allcitys'>
        
        <Link to="roomdetails"><Roomdetail/></Link>
        <Link to="roomdetails"><Roomdetail/></Link>
        <Link to="roomdetails"><Roomdetail/></Link>
        <Link to="roomdetails"><Roomdetail/></Link>
        <Link to="roomdetails"><Roomdetail/></Link>
        <Link to="roomdetails"><Roomdetail/></Link>
        <Link to="roomdetails"><Roomdetail/></Link>
        <Link to="roomdetails"><Roomdetail/></Link>
        </div>
     
    </>
  )
}

export default Home