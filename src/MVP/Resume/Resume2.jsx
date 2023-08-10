import React from 'react'
import { useState, useEffect } from 'react';
import { tick } from '../../assets/export';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import "./Resume.css"
function Resume2() {


    const [resumes, setResumes] = useState([]);
    const [jobDesc, setJobDesc] = useState(null);
    const [analyseDisabled, setAnalyseDisabled] = useState(true);
    const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    useEffect(() => {
        sessionStorage.setItem('resumes', JSON.stringify(resumes));
        sessionStorage.removeItem('jobDesc');
    }, [resumes]);

    useEffect(() => {
        const storedResumes = sessionStorage.getItem('resumes');
        if (storedResumes) {
            setResumes(JSON.parse(storedResumes));
        }

        const storedJobDesc = sessionStorage.getItem('jobDesc');
        if (storedJobDesc) {
            setJobDesc(JSON.parse(storedJobDesc));
        }
    }, []);

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
            setResumes([...resumes, ...validFiles]);
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
        if (resumes.length > 0) {
            setAnalyseDisabled(false);
            sessionStorage.setItem('jobDesc', JSON.stringify(jobDesc));
        }
    }, [resumes, jobDesc]);

    const handleDeleteResume = (index) => {
        const updatedResumes = resumes.filter((_, i) => i !== index);
        setResumes(updatedResumes);
    }

    const donotdeletefunction = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async () => {
        console.log('submitting');
        const formData = {
            "jobDesc": jobDesc,
            "resumes": resumes
        }
        await axios.post('http://192.168.29.116:8000/upload-resume-and-job/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response);
        }
        ).catch((error) => {
            console.log(error);
        }

        );
    }


    return (
        <div>


            <Navbar name="Job Description" link="/description_ranker" />
            <div className="HomeContainer">
                <div className="textContainer animate-fade-in-top-to-bottom">
                    <h5 className="topTitle">Resume Analyser</h5>
                    <h1 className="mainTitle">Rank resume against the <span className='giveColor'>uploaded</span>  job description</h1>
                    <h4 className="subTitle">Score against the job description you uploaded and send custom mails to the recruiter highlighting applicants proficient fields and score</h4>
                </div>

                <form className="formStyle animate-fade-in" onSubmit={donotdeletefunction}>
                    <div className="sendMailWrapper">
                        <button onClick={uploadResume} className='smallBtnStyle Btn'>Upload Resume</button>
                        {/* <button onClick={uploadJobDescription} className='smallBtnStyle Btn'>Upload Job Description</button> */}
                        <button className={`smallBtnStyle Btn ${analyseDisabled ? 'passive' : ''}`} disabled={analyseDisabled} onClick={handleSubmit}>Analyse</button>
                    </div>
                </form>

                <div className="disclaimerTextBox animate-fade-in">
                    <p className="disclaimerText"><span className='giveColor'>.docx</span> or <span className='giveColor'>.pdf</span> format files required</p>
                </div>
                <div className="line"></div>
                <div className=''>
                    {resumes.length > 0 && (
                        <div>
                            <h3>Uploaded Resumes:</h3>
                            <ul className='uploadedResumeUl'>
                                {resumes.map((file, index) => (
                                    <li key={index} className='uploadedResumeList'>
                                        <span className='giveColor'>{file.name}</span>
                                        {/* <span>({formatFileSize(file.size)})</span> */}
                                        <button onClick={() => handleDeleteResume(index)} className='resumeDeleteBtn'>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>


        </div>
    )
}

export default Resume2