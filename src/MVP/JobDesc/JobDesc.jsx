import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import './JobDesc.css'
import axios from 'axios';
function JobDesc() {

  const navigate = useNavigate();

  const [jobDesc, setJobDesc] = useState(null);
  const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const [analyseDisabled, setAnalyseDisabled] = useState(true);

  useEffect(() => {
    const storedJobDesc = sessionStorage.getItem('jobDesc');
    if (storedJobDesc) {
      setAnalyseDisabled(false);
      setJobDesc(JSON.parse(storedJobDesc));
    }
  }, []);

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
        console.log(selectedFile);
        setAnalyseDisabled(false);
      }
    });
  }

  const handleSubmit = async () => {
    try {
      console.log('Uploading Job Description')
      const formData = {
        'jobDesc': jobDesc
      }
      await axios.post('http://192.168.29.116:8000/upload-job-description/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        console.log(response);
      }
      );
    } catch (error) {
      console.log(error);
    }
    navigate('/output_jobDescription')

  };

  const donotdeletefunction = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar name="Resume" link="/resume_ranker" />
      <div className="HomeContainer">

        <div className="textContainer animate-fade-in-top-to-bottom">
          <h5 className="topTitle">Job Description Analyser</h5>
          <h1 className="mainTitle">Upload and get score for your <span className='giveColor'> Job Description</span></h1>
          <h4 className="subTitle">Do you want resumes scored against job description and send custom mails to the recruiter highlighting applicants proficient fields and score ?</h4>
        </div>

        <form className="formStyle animate-fade-in" onSubmit={donotdeletefunction}>
          <div className=" ">
            <button onClick={uploadJobDescription} className='smallBtnStyle  Btn'>Upload Job Description</button>
            <button onClick={handleSubmit} className={`smallBtnStyle Btn ${analyseDisabled ? 'passive' : ''}`} id='jobDescBtn'>Analyse</button>
          </div>
        </form>
        <div className="disclaimerTextBox animate-fade-in">
          <p className="disclaimerText"><span className='giveColor'>.docx</span> or <span className='giveColor'>.pdf</span> format files required</p>
        </div>

        <div className="line"></div>


      </div>
    </div>
  )
}

export default JobDesc