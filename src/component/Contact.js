import React from 'react'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='info-content' id='contact'>
            <h2>Contact</h2>
            <i>Fan? Drop a note</i>
            <div className='info-content-body'>
                <ul className="info-content-body-contact">
                    <li><span><MdLocationOn /></span> Chicago, US</li>
                    <li><span><FaPhoneAlt /></span> Phone: +00 151515</li>
                    <li><span><MdEmail /></span> Email: mail@mail.com</li>
                </ul>
                <div className="info-content-body-input">
                    <div className="info-content-body-input-up">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="info-content-body-input-down">
                        <input type="text" placeholder='Message' />
                    </div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact