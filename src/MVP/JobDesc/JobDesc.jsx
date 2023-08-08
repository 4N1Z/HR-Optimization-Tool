import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate} from 'react-router-dom';
import './JobDesc.css'
function JobDesc() {

  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState(null);
  const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

  const history = useNavigate();

  useEffect(() => {
    const storedJobDesc = sessionStorage.getItem('jobDesc');
    if (storedJobDesc) {
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
        history('/output_jobDescription');
      }
    });

    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions here, such as sending the email to a server.
  };

  useEffect(() => {
    if ( jobDesc) {
        setAnalyseDisabled(false);
        sessionStorage.setItem('jobDesc', JSON.stringify(jobDesc));
    }
}, [ jobDesc]);


  useEffect(() => {
    // remove passive class from button when resume is uploaded
    if (resume) {
      document.getElementById('jobDescBtn').classList.remove('passive');
      document.getElementById('jobDescBtn').disabled = false;

    }
  }, [resume]);


  return (
    <div>
      <Navbar name="Resume" link="/resume_ranker" />
      <div className="HomeContainer">

        <div className="textContainer animate-fade-in-top-to-bottom">
          <h5 className="topTitle">HR OPTIMIZATION TOOl</h5>
          <h1 className="mainTitle">Upload and get score for your <span className='giveColor'> Job Description</span></h1>
          <h4 className="subTitle">Do you want resumes scored against job description and send custom mails to the recruiter highlighting applicants proficient fields and score ?</h4>
        </div>

        <form className="formStyle animate-fade-in" onSubmit={handleSubmit}>
          <div className="sendMailWrapper JobDescMailWrapper">
            <p>Upload your Description</p>
            <button onClick={uploadJobDescription} className='smallBtnStyle jobDescBtn Btn'>Upload Job Description</button>
            {/* <button onClick={() => { fileUpload(1) }} className='smallBtnStyle jobDescBtn Btn'>Upload</button> */}
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