import React from 'react'
import './showModle.css'

function ShowModal() {
  return (
    <div>
      <div class="container">
        <div class="header">
            <h1>Your Request has been comfirmed..!</h1>
            <p>Owner details will be sent shortly to your <b>Contact number</b> and <b>mail Id</b>.</p>
        </div>
        <div class="actions">
            <button class="btn message">Message Owner</button>
            <button class="btn schedule">Schedule Property Visit</button>
            <button class="btn explore">Explore Premium Plans</button>
        </div>
        <div class="tip">
            <p>💡 Do visit the property before transferring any advance money to the Owner</p>
        </div>
        <div class="plans">
            <h2>Get Your Dream House Faster</h2>
            <p>Buy your preferred plan to get house faster.</p>
            <div class="plan" id="freedom">
                <h3>Freedom Plan</h3>
                <ul>
                    <li>• Upto 25 Contacts</li>
                    <li> • Access Premium Filters</li>
                    <li>• Instant Property Alerts</li>
                </ul>
                <p>₹999 + GST</p>
                <button class="btn subscribe">Subscribe</button>
            </div>
            <div class="plan" id="relax">
                <h3>Relax Plan</h3>
                <ul>
                    <li>• Dedicated Relationship Manager</li>
                    <li>• Upto 50 Contacts</li>
                    <li>• Best Rent Negotiation</li>
                </ul>
                <p>₹2999 + GST</p>
                <button class="btn subscribe">Subscribe</button>
            </div>
            <div class="plan" id="moneyback">
                <h3>Moneyback Plan</h3>
                <ul>
                    <li>• Guaranteed Home or 100% refund</li>
                    <li>• Dedicated Relationship Manager</li>
                    <li>• Upto 50 Contacts</li>
                </ul>
                <p>₹5499 + GST</p>
                <button class="btn subscribe">Subscribe</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ShowModal
