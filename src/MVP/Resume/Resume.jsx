import React, { useState, useEffect } from 'react';
import { tick } from '../../assets/export';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import "./Resume.css"

function Resume() {

    const [resume, setResume] = useState(null);
    const [jobDesc, setJobDesc] = useState(null);
    const [analyseDisabled, setAnalyseDisabled] = useState(true);

    const uploadResume = () => {
        // Create a hidden file input element
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';

        // Trigger the file input click event
        fileInput.click();

        // Listen for file selection
        fileInput.addEventListener('change', (event) => {
            var selectedFile = fileInput.files[0];
            console.log(selectedFile);
            setResume(selectedFile);
        });
    }

    const uploadJobDescription = () => {
        // Create a hidden file input element
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';

        // Trigger the file input click event
        fileInput.click();

        // Listen for file selection
        fileInput.addEventListener('change', (event) => {
            var selectedFile = fileInput.files[0];
            console.log(selectedFile);
            setJobDesc(selectedFile);
        });
    }
    useEffect(() => {
        if (resume && jobDesc) {
            setAnalyseDisabled(false);
        }
    }, [resume, jobDesc]);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("We are fecked");

        // You can perform further actions here, such as sending the email to a server.
    };

    return (
        <div>
            <Navbar />
            <div className="HomeContainer">
                <div className="textContainer animate-fade-in-top-to-bottom">
                    <h5 className="topTitle">HR OPTIMIZATION TOOl</h5>
                    <h1 className="mainTitle">Rank resume against a job description</h1>
                    <h4 className="subTitle">Do you want resumes scored against job description and send custom mails to the recruiter highlighting applicants proficient fields and score ?</h4>
                </div>

                <form className="formStyle animate-fade-in" onSubmit={handleSubmit}>
                    <div className="sendMailWrapper">
                        <button onClick={uploadResume} className='smallBtnStyle Btn'>Upload Resume</button>
                        <button onClick={uploadJobDescription} className='smallBtnStyle Btn'>Upload Job Description</button>
                        <button className={`smallBtnStyle Btn ${analyseDisabled ? 'passive' : ''}`} type='submit' disabled={analyseDisabled}>Analyse</button>
                    </div>
                </form>

                <div className="disclaimerTextBox animate-fade-in">
                    <p className="disclaimerText"><span className='giveColor'>.docx</span> or <span className='giveColor'>.pdf</span> format files required</p>
                </div>
                <div className="line"></div>
                <div className='sendMailBox'>
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}

export default Resume;
