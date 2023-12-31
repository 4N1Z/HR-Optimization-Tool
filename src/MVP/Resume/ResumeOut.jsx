import { useRef, React, useEffect, useState } from 'react'
import './Resume.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ResumeOut() {

    // const location = useLocation();
    // const { shortlistedEmails } = location.state;
    // console.log(shortlistedEmails, shortlistedScore)

    const location = useLocation();
    // const [ shortlistedEmails, shortlistedScore ] = location.state;
    const shortlistedEmails = location.state[0];
    const shortlistedScore = location.state[1];
    const lengthOfPassed = shortlistedEmails.length;


    useEffect(() => {
        emailjs.init("U86vKN8q0UPpIKmza");
    }, []);

    const serviceID = 'service_5ktc26c';
    const templateID = 'template_tgpovaj';

    // With the help pf useRef(), we can get the names and email from html file
    // const emailRef = useRef();
    // const nameRef = useRef();

    const emailRef = 'aniz.bin14@gmail.com';
    const nameRef = 'aniz';

    const sendMail = async (e) => {
        e.preventDefault();
        const serviceId = 'service_5ktc26c';
        const templateId = 'template_tgpovaj';

        const recipients = ['aniz.bn14@gmail.com', 'anizbinnowshad@gmail.com', 'fahadpn330@gmail.com', 'anirudhdaya@gmail.com', 'aswinlalsct@gmail.com'];

        const templateParams = {
            // to_email: recipients.join(', '),
            mail_s: recipients,
            subject: 'HR Interview Result',
            // message: (
            //     <CustomEmailTemplate
            //       candidateName="John Doe"
            //       positionName="Software Engineer"
            //       companyName="ABC Corporation"
            //       nextSteps="an interview, assessment, or assignment"
            //     />
            //   ),
            message: 'company Name',
            name: 'Aniz'

        };

        try {
            console.log('Loading started');
            await emailjs.send(serviceId, templateId, templateParams);
            alert('Email successfully sent! Check your inbox.');
        } catch (error) {
            console.log(error);
            console.log('Error occurred');
        } finally {
            console.log('Loading finished');
        }
    };


    return (
        <div>
            <Navbar name="back" link="/resume_rankerForMVP" />
            <div className='HomeContainer animate-fade-in-top-to-bottom'>
                <div className="outputContainer">
                    <h2 className="titleOut">Result of Analysis</h2>
                    <div className="firstBox">

                        <div className="contentBox">
                            <h2 className='resumeTitleOut'>Total Resumes Analysed</h2>
                            <h1 className='resumeNumberOut'>{lengthOfPassed}</h1>
                            <h2 className='resumeTitleOut'>Top Resumes</h2>

                            <div className="topResumes animate-fade-in">
                                <div className="scoresNames">
                                    <h2>Name</h2>
                                    <div className="itemsInResume">
                                        {shortlistedEmails.map((item, index) => (
                                            <h4 key={index}>{item}</h4>
                                        ))}
                                    </div>

                                </div>
                                <div className="scoresNames">
                                    <h2>Name</h2>
                                    {shortlistedScore.map((item, index) => (
                                        <h4 key={index}>{item}</h4>
                                    ))}
                                </div>
                            </div>
                            <button onClick={sendMail} className="goToResume Btn"> <p>Send Mail</p> </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResumeOut