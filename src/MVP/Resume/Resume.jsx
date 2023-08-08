import React, { useState, useEffect } from 'react';
import { tick } from '../../assets/export';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import "./Resume.css"

function Resume() {

    const [resumes, setResumes] = useState([]);
    const [jobDesc, setJobDesc] = useState(null);
    const [analyseDisabled, setAnalyseDisabled] = useState(true);
    const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];


    const uploadResume = () => {
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';
        fileInput.multiple = true;
        fileInput.accept = ".pdf,.docx";

        fileInput.click();

        fileInput.addEventListener('change', (event) => {
            var selectedFiles = Array.from(fileInput.files);
            const validFiles = selectedFiles.filter(file => allowedFileTypes.includes(file.type));
            setResumes(validFiles);
        });
    }

    const uploadJobDescription = () => {
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';
        fileInput.accept = ".pdf,.docx";

        fileInput.click();

        fileInput.addEventListener('change', (event) => {
            var selectedFile = fileInput.files[0];
            if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
                setJobDesc(selectedFile);
            }
        });
    }

    useEffect(() => {
        if (resumes.length>0 && jobDesc) {
            setAnalyseDisabled(false);
        }
    }, [resumes, jobDesc]);
    
    const donotdeletefunction = (event) => {
        event.preventDefault();
        // You can perform further actions here, such as sending the email to a server.
    };

    const handleSubmit = () => {
        console.log('submitting');
        console.log(resumes);
        console.log(jobDesc);
    }
    return (
        <div>
            <Navbar />
            <div className="HomeContainer">
                <div className="textContainer animate-fade-in-top-to-bottom">
                    <h5 className="topTitle">HR OPTIMIZATION TOOl</h5>
                    <h1 className="mainTitle">Rank resume against a job description</h1>
                    <h4 className="subTitle">Do you want resumes scored against job description and send custom mails to the recruiter highlighting applicants proficient fields and score ?</h4>
                </div>

                <form className="formStyle animate-fade-in" onSubmit={donotdeletefunction}>
                    <div className="sendMailWrapper">
                        <button onClick={uploadResume} className='smallBtnStyle Btn'>Upload Resume</button>
                        <button onClick={uploadJobDescription} className='smallBtnStyle Btn'>Upload Job Description</button>
                        <button className={`smallBtnStyle Btn ${analyseDisabled ? 'passive' : ''}`} onClick={handleSubmit} disabled={analyseDisabled}>Analyse</button>
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
