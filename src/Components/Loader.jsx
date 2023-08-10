import React from 'react'
import { tick } from '../assets/export'
import './Loader.css'


function Loader() {
  return (
    <>
    <div className="loaderText top-2">
        <img src={tick} alt="tick_icon" />
        I am top G
    </div>
    <div className="loaderText top-1">
        <img src={tick} alt="tick_icon" />
        Always Believe in yourself
    </div>
    <div className="loaderText first">
        <img src={tick} alt="tick_icon" />
        Push past your limits
    </div>
    <div className="loaderText bottom-1">
        <img src={tick} alt="tick_icon" />
        Go beyond plus ultra
    </div>
    <div className="loaderText bottom-2">
        <img src={tick} alt="tick_icon" />
        They dont know me son
    </div>
    </>
  )
}

export default Loader