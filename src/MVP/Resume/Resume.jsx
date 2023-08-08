import React, { useState, useEffect } from 'react';
import { tick } from '../../assets/export';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import "./Resume.css"
function Resume() {

    const [resume, setResume] = useState(null);
    const [jobDesc, setJobDesc] = useState(null);
    const fileUpload = (i) => {
        // Create a hidden file input element
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';

        // Trigger the file input click event
        fileInput.click();

        // Listen for file selection
        fileInput.addEventListener('change', (i) => {
            var selectedFile = fileInput.files[0];
            console.log(selectedFile);
            if (i === 1) {
                setResume(selectedFile);
                console.log("I am working");
            }
            else {
                setJobDesc(selectedFile);
            }
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform further actions here, such as sending the email to a server.
    };

    useEffect(() => {
        // remove passive class from button when resume is uploaded
        if (resume) {
            document.getElementById('jobDescBtn').classList.remove('passive');
            document.getElementById('jobDescBtn').disabled = false;

        }
    }, [resume]);
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
                        <button onClick={() => { fileUpload(1) }} className='smallBtnStyle Btn'>Upload Resume</button>
                        <button onClick={() => { fileUpload(2) }} className='smallBtnStyle Btn passive' id="jobDescBtn">Upload Job Description</button>
                        <button className='smallBtnStyle Btn passive' type='submit'>Analyse</button>

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

export default Resume