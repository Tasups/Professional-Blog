import React from 'react';

import jasonPic from '../images/jasonimg2.jpg';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-main">
        <div className="about-main-image">
          <img className="about-image" src={jasonPic} alt="software developer Jason Whisnant"/>
        </div>
        <div className="about-main-info">
          <h1>About Me</h1>
          <ul>
            <li>
              I am a Software Developer with a working proficiency in HTML, CSS, JavaScript, and React. 
            </li>
            <li>
              I love using npm packages such as Axios, uuid, jquery, and redux as well as a few frameworks such as Bootstrap and Material UI and many APIs.
            </li>
            <li>
              I am quite comfortable using Express, Node, Git version control, Cloud9-AWS, AJAX, and MySQL.
            </li>
            <li>
              I possess a fundamental understanding of mobile first design concepts and object oriented programming.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;