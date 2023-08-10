import React from 'react'
import './Resume.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'

function ResumeOut() {

    const sendMail = () => {
        alert('Mail Sent');
        console.log('Mail Sent');
    }

    return (
        <div>
            <Navbar name="back" link="/description_ranker" />
            <div className='HomeContainer animate-fade-in-top-to-bottom'>
                <div className="outputContainer">
                    <h2 className="titleOut">Result of Analysis</h2>
                    <div className="firstBox">
                        
                        <div className="contentBox">
                            <h2 className='resumeTitleOut'>Total Resumes Analysed</h2>
                            <h1 className='resumeNumberOut'>240</h1>
                            <h2 className='resumeTitleOut'>Top Resumes</h2>

                            <div className="topResumes animate-fade-in">
                                <div className="scoresNames">
                                    <h2>Name</h2>
                                    <div className="topRankers">
                                        <h4>ANIZ BIN NOwshad</h4>
                                        <h4>ANIZ BIN NOwshad</h4>
                                        <h4>ANIZ BIN NOwshad</h4>
                                        <h4>ANIZ BIN NOwshad</h4>
                                        <h4>ANIZ BIN NOwshad</h4>
                                    </div>
                                </div>
                                <div className="scoresNames">
                                    <h2>Scores</h2>
                                    <div className="topRankers">
                                        <h4>76</h4>
                                        <h4>76</h4>
                                        <h4>76</h4>
                                        <h4>76</h4>
                                        <h4>76</h4>
                                    </div>
                                </div>
                            </div>

                            {/* <Link to='/resume_ranker'>
                                <button className="goToResume Btn"> <p>Send Mail</p> </button>
                            </Link> */}
                                <button onClick={sendMail} className="goToResume Btn"> <p>Send Mail</p> </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResumeOut