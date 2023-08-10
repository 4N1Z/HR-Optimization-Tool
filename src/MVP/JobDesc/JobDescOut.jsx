import React from 'react'
import './JobDesc.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'

function JobDescOut() {
    return (
        <div>
            <Navbar name = "back" link = "/description_ranker"/>
            <div className='HomeContainer animate-fade-in-top-to-bottom'>
                <div className="outputContainer">
                    <h2 className="titleOut">Result of Analysis</h2>
                    <div className="firstBox">
                        <h2>Here is the description after analysis</h2>
                        <div className="contentBox">
                            <div className="parent contentInsideBox">
                                <div className="child1 itemBox">
                                    <h1>NAME</h1>
                                    <p>John Doe</p>
                                </div>
                                <div className="child2 itemBox">
                                    <h1>NAME</h1>
                                    <p>John Doe</p>
                                </div>
                                <div className="child3 itemBox">
                                    <h1>NAME</h1>
                                    <p>John Doe</p>
                                </div>
                                <div className="child4 itemBox">
                                    <h1>Desciption</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                                </div>
                            </div>

                            <Link to= '/resume_rankerForMVP'>
                                <button className="goToResume Btn"> <p>Correct</p> </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescOut