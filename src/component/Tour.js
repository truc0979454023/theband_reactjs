import React, { useState } from 'react'
import newyork from '../img/newyork.jpg'
import paris from '../img/paris.jpg'
import sanfran from '../img/sanfran.jpg'
import Ticket from './Ticket'

const Tour = () => {
  const [isCheck, setIsCheck] = useState(false)

  return (
    <div className='tour-content'>
      <div className='info-content' id='tour'>
      <h2>Tour dates</h2>
      <i>Remember to book your tickets!</i>
      <ul className="info-content-form">
        <li>
          September
          <span>Sold out</span>
        </li>
        <li>
          October
          <span>Sold out</span>
        </li>
        <li>
          November
          <i>3</i>
        </li>
      </ul>

      <div className='info-content-pic'>
        <div className="info-content-pic-card">
          <img src={newyork} alt="" />
          <div className="info-content-pic-card-text">
            <h3>New York</h3>
            <span>Fri 27 Nov 2016</span>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button onClick={()=>setIsCheck(true) }>Buy Tickets</button>
          </div>
        </div>

        <div className="info-content-pic-card">
          <img src={paris} alt="" />
          <div className="info-content-pic-card-text">
            <h3>Paris</h3>
            <span>Sat 28 Nov 2016</span>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button onClick={()=>setIsCheck(true) }>Buy Tickets</button>
          </div>
        </div>

        <div className="info-content-pic-card">
          <img src={sanfran} alt="" />
          <div className="info-content-pic-card-text">
            <h3>San Francisco</h3>
            <span>Sun 29 Nov 2016</span>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button onClick={()=>setIsCheck(true) }>Buy Tickets</button>
          </div>
        </div>

      </div>
      {isCheck && <Ticket setIsCheck={setIsCheck} />}
    </div>
    </div>
    
  )
}

export default Tour