import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Resume.css'

function Resume() {

    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Handle the selected file here
            console.log('Selected file:', selectedFile);
        }
    };
    return (
        <div>
            <Navbar />
            <div className="ResumeHome HomeContainer">
                <div className="textContainer animate-fade-in-top-to-bottom">
                    <h5 className="topTitle">HR OPTIMIZATION TOOl</h5>
                    <h1 className="mainTitle">Upload and get score for your <span className="jobDescriptionText">Job Description</span></h1>
                </div>

                <div className="fileUploadBox">
                    <label className="fileUploadLabel" htmlFor="fileInput">
                        Choose a PDF or document file:
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="fileUploadInput"
                    />
                    <div className="fileUploadButton">
                        Upload File
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume