import React from 'react';

const About = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '10px',
    color: '#666',
  };

  const responsiveContainerStyle = {
    ...containerStyle,
    '@media (max-width: 600px)': {
      padding: '10px',
      marginBottom : '0px',
      marginTop : '20px',
    },
  };

  const responsiveHeadingStyle = {
    ...headingStyle,
    fontSize: '20px',
  };

  const responsiveParagraphStyle = {
    ...paragraphStyle,
    fontSize: '14px',
  };

  return (
    <div style={responsiveContainerStyle}>
      <h1 style={responsiveHeadingStyle}>About Us</h1>
      <p style={responsiveParagraphStyle}>
        Thiram is a natural grocery store originated in Bangalore. We are proud to serve a variety of natural products directly from farmers.
      </p>
      <h2 style={responsiveHeadingStyle}>Contact Information</h2>
      <p style={responsiveParagraphStyle}>Phone: 8618163415</p>
      <p style={responsiveParagraphStyle}>Email: mahadevvan.ganesan@gmail.com</p>
    </div>
  );
};

export default About;
