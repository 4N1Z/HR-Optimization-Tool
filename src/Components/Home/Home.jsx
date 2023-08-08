import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { tick } from '../../assets/export';

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

        <form className="sendMailBox" onSubmit={handleSubmit}>
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

        <div className="disclaimerTextBox">
          <img src={tick} width = "18px" alt="tick"/>
          <p className="disclaimerText">It's 100% free and we will send more than one email per month</p>
        </div>

        <div className="line"></div>

      </div>

    </div>
  )
}

export default Home