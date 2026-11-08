import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className='big'>
        <div className='form'>
          <div className="container">
            <form action="mailto:mrxff81@gmail.com" method="post" encType="text/plain" className='card'>
              <a className="login">GET IN TOUCH</a>
              <div className="inputBox">
                <input type="text" required />
                <span className="user">Username</span>
              </div>
              <div className="inputBox">
                <input type="text" required />
                <span>Message</span>
              </div>
              <input className="enter" type="submit" value="Send" />
            </form>
          </div>
        </div>

        <div className="social-menu">
          <ul>
            <li>
              <a href="https://github.com/THE12X" target="_blank" rel="noreferrer" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mohamedkammou" target="_blank" rel="noreferrer" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="mailto:mrxff81@gmail.com" title="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;