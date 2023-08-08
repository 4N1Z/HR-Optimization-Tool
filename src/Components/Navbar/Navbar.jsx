import React from 'react'
import { logoSSW } from '../../assets/export'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navBarContainer'>
        <img src={logoSSW} alt="logo" />
        <button className="toMVPbtn">MVP</button>
    
    </div>
  )
}

export default Navbar