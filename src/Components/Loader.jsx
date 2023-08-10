import React from 'react'
import { tick } from '../assets/export'
import './Loader.css'


function Loader() {
  return (
    <>
    <div className="loaderText top-2">
        <img src={tick} alt="tick_icon" />
        I am top 2
    </div>
    <div className="loaderText top-1">
        <img src={tick} alt="tick_icon" />
        I am top 1
    </div>
    <div className="loaderText first">
        <img src={tick} alt="tick_icon" />
        I am first
    </div>
    <div className="loaderText bottom-1">
        <img src={tick} alt="tick_icon" />
        I am bottom 1
    </div>
    <div className="loaderText bottom-2">
        <img src={tick} alt="tick_icon" />
        I am bottom 2
    </div>
    </>
  )
}

export default Loader