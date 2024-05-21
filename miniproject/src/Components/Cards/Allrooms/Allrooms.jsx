import React from 'react'
import './allrooms.css'

function Allrooms(props) {
  const { name, address, price } = props;
  return (
    <div>
      <div className='room-card'>
        <img src="https://tse2.mm.bing.net/th?id=OIP.AgnfokVzMXvuv9PQFJO6pwHaEu&pid=Api&P=0&h=180" alt="" />
        <div className='room-detail'> 
            <h3>{name} </h3>
            <h5>{address}</h5>
            <div className='feccilityinroom'>
                <div className='icone-name'>
                  <div className="icon"><img  src="https://image.shutterstock.com/image-vector/wifi-icon-black-wi-fi-260nw-654893110.jpg" alt="" /> </div>  
                  Wifi
                </div>
                <div className='icone-name'>
                <div className="icon"><img  src="#" alt="" /> </div>  
                    Gyeser
                </div>
                <div className='icone-name'>
                <div className="icon"><img  src="#" alt="" /> </div>  
                   Parking facility
                </div>
                <div className='icone-name'>
                <div className="icon"><img  src="#" alt="" /> </div>  
                    Lift
                </div>
                </div>
                
            
            <div className='room-price'>
            <h1 className='priceofrooms'>{price}/Month</h1>
            <span>Book now</span>
            </div>
            </div>
            
        </div>
      </div>
    
  )
}

export default Allrooms
