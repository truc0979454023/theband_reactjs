import React from 'react'
import bandmember from '../img/bandmember.jpg'


const Intro = () => {
  return (
    <div className='info-content' id='band'>
        <h2>The band</h2>
        <i>We love music</i>
        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='info-content-mem'>
          <div className="info-content-mem-card">
            <p>Name</p>
            <img src={bandmember} alt="" />
          </div>

          <div className="info-content-mem-card">
            <p>Name</p>
            <img src={bandmember} alt="" />
          </div>

          <div className="info-content-mem-card">
            <p>Name</p>
            <img src={bandmember} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Intro