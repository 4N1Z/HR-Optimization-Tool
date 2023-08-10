import React from 'react'
import './JobDesc.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation } from 'react-router-dom';

function JobDescOut() {

    const location = useLocation();
    const analysisData = location.state;
    const points = analysisData.split('\n').map((point, index) => (
        <p key={index} style={{
            lineHeight: '2.1',
        }}>
          <span style={{
            fontWeight: 'bold',
            color: 'var(--secondary-color)'
          }}>{point.substring(0, point.indexOf(':')+1)}</span>
          {point.substring(point.indexOf(':') + 1)}
        </p>
      ));
    return (
        <div>
            <Navbar name="back" link="/description_ranker" />
            <div className='HomeContainer animate-fade-in-top-to-bottom'>
                <div className="outputContainer">
                    <h2 className="titleOut">Result of Analysis</h2>
                    <div className="firstBox">
                        <h2>Here is the description after analysis</h2>
                        <div className="contentBox">
                            <div className=" contentInsideBox">
                                {/* <div className="child1 itemBox">
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
                                </div> */}
                                <div className="child4 itemBox">
                                    <h1>Desciption</h1>
                                    {points}
                                </div>
                            </div>

                            <Link to='/resume_rankerForMVP'>
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