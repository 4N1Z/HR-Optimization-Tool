import React from 'react'
import { logo } from '../../assets/export'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div className='navBarContainer'>
      <Link to={'/'}>

        <img src={logo} alt="logo" />
      </Link>
      <Link to = {props.link}>
        <button className="toMVPbtn Btn">
            <p>{props.name}</p>
        </button>
        </Link>
    
    </div>
  )
}

export default Navbar