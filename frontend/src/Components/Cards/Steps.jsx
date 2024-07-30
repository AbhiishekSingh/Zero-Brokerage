import React from 'react'
import './steps.css'

function Steps({descri, dis, images}) {
  return (
    <div className='step'>
      <img src={images} alt="" />
      <h1>{descri}</h1>
      <p>{dis}</p>
    </div>
  )
}

export default Steps
