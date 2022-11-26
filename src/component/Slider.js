import React from 'react'
import img from '../img/chicago.jpg'

const Slider = () => {
  return (
    <div className='slider'  id='home'>
        <img className='img-slider' src={img} alt="chicago" />
        <div className='text-slider'>
          <h3>Chicago</h3>
          <p>Thank you, Chicago - A night we won't forget.</p>
        </div>
    </div>
  )
}

export default Slider