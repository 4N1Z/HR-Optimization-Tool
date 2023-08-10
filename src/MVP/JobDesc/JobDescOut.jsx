import React from 'react'
import './JobDesc.css'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function JobDescOut() {

    const location = useLocation();
    const analysisData = location.state[0];
    const jobDesc = location.state[1];
    const points = analysisData.split('\n').map((point, index) => (
        <p key={index} style={{lineHeight: '2.1',}}>
             <span style={{fontWeight: 'bold',color: 'var(--secondary-color)'}}>{point.substring(0, point.indexOf(':') + 1)}</span>
            {point.substring(point.indexOf(':') + 1)}
        </p>
    ));
    const nav = useNavigate();
    const handleNoChange = () => {
        nav('/resume_rankerForMVP');
    }

    const handleChange = async() => {
        try{
            let formData = {
                jobDesc: jobDesc,
                analysisData: analysisData
            }
             await axios.post('http://192.168.29.116:8000/integrate-changes/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }}).then((response) => {
                    navigate('/description_ranker', {state: response.data.analysis });
                    console.log(response);
                }
            );
        }catch(error){
            console.log(error);
        }
    }
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
                                <div className="child4 itemBox">
                                    <h1>Desciption</h1>
                                    {points}
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                gap: '1rem',
                                marginTop: '2rem',
                                
                            }}>
                                <p style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                
                                    }}>Incorporate Changes ? </p>
                                <div>
                                    <button className="smallBtnStyle Btn" onClick={handleNoChange}> No </button>
                                    <button className="smallBtnStyle Btn" onClick={handleChange}> Yes </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescOut