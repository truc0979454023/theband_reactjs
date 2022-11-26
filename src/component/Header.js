import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiFillCaretDown } from 'react-icons/ai'

const Header = () => {
    return (
        <div className='header'>
            <ul className='nav'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#band'>Band</a></li>
                <li><a href='#tour'>Tour</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#!'>More</a> <AiFillCaretDown />
                    <ul className='subnav'>
                        <li>Merchandise</li>
                        <li>Extras</li>
                        <li>Media</li>
                    </ul>
                </li>
            </ul>
            <div className='header-icon'>
               <i className='header-icon-search'> <BiSearch /></i>
            </div>
        </div>
    )
}

export default Header