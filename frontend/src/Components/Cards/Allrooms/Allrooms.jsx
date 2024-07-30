import React from 'react'
import './allrooms.css'

function Allrooms(props) {
  const { name, address, price,id,state,sqr,furnishing,appartment,availablefrom } = props;
  return (
    <div className="listing-card">
            <h2>{name}</h2>
            <p>{address} <a href="#">Explore Nearby</a></p>
            <div className="price-details">
                <div>₹ {price} <span>Rent (Non-Negotiable)</span></div>
                <div>₹ 15,000 <span>Deposit</span></div>
                <div>{sqr} sqft <span>Builtup</span></div>
            </div>
            <div className="listing-content">
                <img src="https://t3.ftcdn.net/jpg/03/05/10/36/360_F_305103678_FZuxcPWkF23tYq3508bJEHmVweqDwVe1.jpg" alt="Room" className="listing-image" />
                <div className='hkunamatata'>

               
                <div className="details-section">
                <div className="details-grid">
                <div className="detail-item">
                    <div className="icon">🛋️</div>
                    <div>
                        <div className="detail-title">{furnishing}</div>
                        <div className="detail-subtitle">Furnishing</div>
                    </div>
                </div>
                <div className="detail-item">
                    <div className="icon">🏠</div>
                    <div>
                        <div className="detail-title">{appartment}</div>
                        <div className="detail-subtitle">Apartment Type</div>
                    </div>
                </div>
                <div className="detail-item">
                    <div className="icon">🚿</div>
                    <div>
                        <div className="detail-title">Yes</div>
                        <div className="detail-subtitle">Attached Bathroom</div>
                    </div>
                </div>
                <div className="detail-item">
                    <div className="icon">🔑</div>
                    <div>
                        <div className="detail-title">{availablefrom}</div>
                        <div className="detail-subtitle">Available From</div>
                    </div>
                </div>
            </div>
             
        </div>
        <div className="actions-btn">
        <a href={`/${state}/${id}`}><div className='get-owner-details'> Book now</div></a>
                
                <button className="wishlist-btn">♡</button>
            </div>
        </div>
       
            </div>
        </div>
        // <a href={`/${state}/${id}`}><div className='get-owner-details'> Book now</div></a> 
        
    
  )
}

export default Allrooms
