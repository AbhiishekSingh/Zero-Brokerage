import React from 'react'
import './roomDetails.css';
import Roomdetail from '../Cards/Roomdetail';

function RoomDetails() {
  return (
    <div > 
      <div className='main-container'>
        <h1>Room Name</h1>
        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam?</p>
       <div className='images-map'>
        <div className='allimages'>
            <div className='img-top'>
                <div className='img-flex'>
                    <div className='img1'>1st img</div>
                    <div className='img2'>2nd image</div>
                </div>
                <div className='img-flex2'>
                    hello
                </div>
            </div>
            <div className='img-bottom'>
               <div className='bottom-imgs'>
                images
               </div>
               <div className='bottom-imgss'>
                images
               </div>
               <div className='bottom-imgss'>
                images
               </div>
               <div className='bottom-imgss'>
                images
               </div>
            </div>
            
        </div>
        <div className='location'>
            map
        </div>
       </div>
      </div>
         

      <div className='main-container'> 
      <div className='nearbylocation'>
        <div className='nearbydetails'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus reiciendis accusantium illo eius explicabo, provident ab quia alias eos rerum velit, blanditiis minus autem iste quas sequi maiores, animi excepturi labore porro! Architecto ex voluptatem similique neque nobis dignissimos iste praesentium quia suscipit accusantium delectus quam, laborum odit tempore blanditiis.</p>
           
            <p className='linegap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt tempore labore, suscipit illo quibusdam ipsam consequuntur nemo adipisci, debitis impedit dolor dolorum perspiciatis ratione repudiandae laborum amet dolorem provident?</p>
            <p className='linegap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla debitis veniam ex fuga deserunt quas, iure expedita voluptatum qui fugiat. Amet assumenda tenetur, nesciunt reiciendis ratione, inventore dolor doloremque cumque incidunt, sit nihil architecto esse expedita quam sequi. Tempora iure modi cum veritatis quas ipsum saepe pariatur error officia, consequuntur incidunt architecto impedit, laborum nisi minus repellat reprehenderit laudantium neque.</p>
        </div>

        
        <div className='property-helight'>
            hello
        </div>
      </div>
      </div>

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
