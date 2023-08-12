import React from 'react'
import { useState, useEffect } from 'react';
import { tick } from '../../assets/export';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import "./Resume.css"
import Loader from '../../Components/Loader';

function Resume2() {

    const navigate = useNavigate();


    const [resumes, setResumes] = useState([]);
    const [jobDesc, setJobDesc] = useState(null);
    const [analyseDisabled, setAnalyseDisabled] = useState(true);
    const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const [loading, setLoading] = useState(false);

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
    var shortlistedData = [];
    var shortlistedEmails = [];
    var shortlistedScore = [];

    const handleSubmit = async () => {
        // setLoading(true);
        console.log('submitting resumes');
        const formData = {
            "jobDesc": jobDesc,
            "resumes": resumes
        }
        // setLoading(true); 
        await axios.post('http://192.168.29.116:8000/upload-resume-and-job/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response);
            // const name = response.data.shortlisted[0]
            // const score = response.data.shortlisted[1]
            // console.log(response.data.shortlisted)
            // const { name, score } = response.data.shortlisted;
            
            // const key = response.data.shortlisted

            // console.log(`Name: ${name}`);
            // console.log(`Score: ${score}`);

            const shortlisted = response.data.shortlisted;
          

  
            for (const email in shortlisted) {
              if (shortlisted.hasOwnProperty(email)) {
                const score = shortlisted[email][1];
                // console.log(`Score for ${email}: ${score}`);
                shortlistedEmails.push(email);
                shortlistedScore.push(score);
                console.log(shortlistedEmails);
                console.log(shortlistedScore);
                // shortlistedData.push({ email, score });
                
            }
        }
        // navigate('/output_resume', { state: shortlistedData });
        // console.log(shortlistedData);
            // setLoading(false);

        shortlistedEmails.push(email);    
        shortlistedScore.push(score);
        console.log(shortlistedEmails);
        console.log(shortlistedScore);
        navigate('/output_resume', { state: [shortlistedEmails,shortlistedScore] });

        navigate('/output_resume', {
            state: [ shortlistedEmails, shortlistedScore ]
          });


        }
        ).catch((error) => {
            console.log(error);
        }


        );
        shortlistedEmails =  ["anizbinnowshad@gmail.com","ps_nowshad@hotmail.com",
        "jovinjoyark@gmail.com","aswinlalsct@gmail.com","fahadpuzhakkaraillath@gmail.com"]
        shortlistedScore =  [10,25,33,70,93]
        
        navigate('/output_resume', {state: [shortlistedEmails,shortlistedScore] })
    }


    return (
        <div>
            {loading ? (<div className="centerContainer">
                <Loader />
            </div>) : (<div>
                <Navbar name="back" link="/description_ranker" />
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
                                <ul className='uploadedResumeUl animate-fade-in'>
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
            </div>)}


        </div>
    )
}

export default Resume2