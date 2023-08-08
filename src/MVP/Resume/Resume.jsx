import React, { useState } from 'react'
import { tick } from '../../assets/export';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import "./Resume.css"
function Resume() {

  const [email, setEmail] = useState('');

  const fileUpload =()=>{
    // Create a hidden file input element
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
  
    // Trigger the file input click event
    fileInput.click();
  
    // Listen for file selection
    fileInput.addEventListener('change', function() {
      var selectedFile = fileInput.files[0];
      // Do something with the selected file
      console.log('Selected file:', selectedFile);
    });
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventD
    efault();
    // You can perform further actions here, such as sending the email to a server.
    console.log(`Subscribing email: ${email}`);
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
          <button onClick={fileUpload} className='smallBtnStyle Btn'>Upload Resume</button>
          <button onClick={fileUpload} className='smallBtnStyle Btn'>Upload Job Description</button>
          </div>
        </form>

        <div className="disclaimerTextBox animate-fade-in">
          <img src={tick} width = "18px" alt="tick"/>
          <p className="disclaimerText">It's 100% free and we will send more than one email per month</p>
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