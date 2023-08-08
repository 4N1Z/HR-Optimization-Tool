import React from 'react'
import { logoSSW } from '../../assets/export'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navBarContainer'>
        <img src={logoSSW} alt="logo" />
        <button className="toMVPbtn Btn">
            <p>check MVP</p>
        </button>
    
    </div>
  )
}

export default Navbar