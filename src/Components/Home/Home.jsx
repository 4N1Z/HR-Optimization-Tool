import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { tick } from '../../assets/export';
import Resume from '../../MVP/Resume/Resume';
import { Link } from 'react-router-dom';

function Home() {

  const [email, setEmail] = useState('');

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
          <h1 className="mainTitle">Give your CVs and we will rank and send a mail</h1>
          <h4 className="subTitle">Do you want resumes scored against job description and send custom mails to the recruiter highlighting applicants proficient fields and score ?</h4>
        </div>

        <form className="sendMailBox animate-fade-in" onSubmit={handleSubmit}>
          <div className="sendMailWrapper">
          <input
            className='sendMailInput'
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          <button className="sendMailBtn Btn" type="submit">Enter Email</button>
          </div>
        </form>

        <div className="disclaimerTextBox animate-fade-in">
          <img src={tick} width = "18px" alt="tick"/>
          <p className="disclaimerText">It's 100% free and we will send more than one email per month</p>
        </div>
        <div className="line"></div>

        {/* Two Buttons */}

        <div className="whtWeDoTitle animate-fade-in">
          <div className="smallLine"></div>
          <h2 className="whtWeDoTitleText">What we do</h2>
        </div>

        <div className="navigationBox animate-fade-in-top-to-bottom">
          <div className="forNavBox">
            <Link to={'/resume_ranker'}>
              <h2 className="navTitle">Rank your Resume</h2>
            </Link>
            <p className="navDesc">Art direction is the process of bringing together all of the creative 
            elements of a project to create a cohesive and visually stunning end product. I work with clients to develop a concept and bring it to life through art direction. 
            I believe that attention to detail and a clear vision are key to creating truly memorable designs.</p>
            <div className="techStackUsedBox">
              <div className="techBox">LLM</div>
              <div className="techBox">NLP</div>
            </div>
          </div>

          <div className="forNavBox">
            <Link to = {'/description_ranker'}>
              <h2 className="navTitle">Job Description</h2>
            </Link>
            <p className="navDesc">Art direction is the process of bringing together all of the creative 
            elements of a project to create a cohesive and visually stunning end product. I work with clients to develop a concept and bring it to life through art direction. 
            I believe that attention to detail and a clear vision are key to creating truly memorable designs.</p>
            <div className="techStackUsedBox">
              <div className="techBox">LLM</div>
              <div className="techBox">NLP</div>
            </div>
          </div>
        </div>
      </div>

      <Resume/>

    </div>
  )
}

export default Home