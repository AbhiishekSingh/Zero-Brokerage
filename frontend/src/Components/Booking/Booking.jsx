import React from 'react'
import './booking.css'
import { Link } from 'react-router-dom'

function Booking() {
  return (
    <>
    <div class="form-container">
        <h4>Guest Details</h4>
        <form>
            <div class="form-group radio-group">
                <label><input  id='specifyColor' type="radio" name="guest" checked/> Myself</label>
                <label><input id='specifyColor' type="radio" name="guest" /> Someone Else</label>
            </div>

            <div className='contact-name'> 
            
            <div className='contact-first-name'> 
            <div class="form-group name-group">
                <div>
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" placeholder="First Name"/>
                </div>
                </div>
                </div>
                <div className='contact-last-name'>
                <div class="form-group name-group">
                <div>
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" placeholder="Last Name"/>
                </div>
            </div>
            </div>

            </div>

            <div className='contact-details'>
                <div className='contact-email'>
            <div class="form-group email-group">
                <div>
                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder='Email id'/>
                </div>
            </div>
            </div>
            <div className='contact-number'>
            <div class="form-group mobile-group">
            
                
                  <div>  <label for="email">Mobile Number</label> </div> 
                    <div className='country-number'> 
                        <div className='mobile-country'>
                    <select id="mobile-country">
                        <option value="+91">+91</option>
                     
                    </select>
                    </div>
                    <div className='personal-number'> 
                    <input type="tel" id="mobile" placeholder='Phone' />
                </div>
                </div>
                
         
               
                
            </div>
            </div>
            </div>




            <div className='room-date'> 
            
            
            <div class="form-group name-group">
                <div>
                    <label for="first-name">When You are looking for Room</label>
                    <input type="date" id="first-name" />
                </div>
                </div>
            </div>
             
             <div className='btn-submit'> 
             <Link to="/showmodel">  <button type='submit'>Book Now</button> </Link>
            </div>
            
        </form>
    </div>

    </>
  )
}

export default Booking
