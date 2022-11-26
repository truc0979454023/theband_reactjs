import React from 'react'
import { RiShoppingBagFill } from 'react-icons/ri'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

const Ticket = ({ setIsCheck }) => {
  return (
    <div className='ticket'>
      <div className="ticket-content">
        <div className="ticket-header">
          <span onClick={()=>setIsCheck(false)} ><AiOutlineClose /></span>
          <h2>
            <span><RiShoppingBagFill /></span>
            Tickets
          </h2>
        </div>
        <div className="ticket-body">
          <div className="ticket-body-form">
            <div className="ticket-body-form-input">
              <label htmlFor="">
                <span><FaShoppingCart /></span>
                Tickets, $15 per person
              </label>
              <input type="text" placeholder='How many?' />
            </div>

            <div className="ticket-body-form-input">
              <label htmlFor="">
                <span><BsFillPersonFill /></span>
                Send To
              </label>
              <input type="text" placeholder='Enter email' />
            </div>
          </div>
          <button>Pay <span><AiOutlineCheck /></span></button>
          <div className="ticket-body-button">
            <button onClick={()=>setIsCheck(false)} >Close <span><AiOutlineClose /></span></button>
            <p>Need <a href="#!">help?</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket