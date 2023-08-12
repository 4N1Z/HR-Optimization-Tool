import React from 'react';

function CustomEmailTemplate({ candidateName, positionName, companyName, nextSteps }) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.6' }}>
      <p style={{ fontWeight: 'bold',fontStyle:'italic', fontSize: '18px' }}>
        Congratulations!
        <br />
        You've Been Shortlisted at <span style={{ color: '#007bff' }}>{companyName}</span>
      </p>

      <p>
        Dear {candidateName},
        <br /><br />
        We hope this email finds you well. We are thrilled to inform you that after careful consideration of your application for the <strong>{positionName}</strong> at {companyName}, you have been shortlisted for the next stage of our selection process.
        Your qualifications, experience, and skills align remarkably well with what we are seeking in an ideal candidate. We were impressed by your accomplishments and the enthusiasm you expressed for joining our team.
      </p>

      <p>
        The next steps in our selection process include {nextSteps}. Our team will be in touch with you shortly to provide more details and coordinate a suitable time.
      </p>

      <p>
        Once again, congratulations on your achievement! We look forward to getting to know you better and exploring the possibility of having you as a valuable member of our team.
        Should you have any questions or require further information, please do not hesitate to contact us at [contact email or phone number].
      </p>

      <p>
        Best regards,
        <br />
        [Your Name]
        <br />
        [Your Title]
        <br />
        {companyName}
        <br />
        [Contact Information]
      </p>
    </div>
  );
}

export default CustomEmailTemplate;
