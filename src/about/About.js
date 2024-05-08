import React from 'react';
import './About.css';
import '../Font awsome MRX/css//font-awesome.css'
const About = () => {
  return (
    <div>
      <div className='big'>
        <br />
        <br />
        <div className='form'>
          <div class="container">
            <form action="mailto:mrxmk700@gmail.com" method="post" enctype="text/plain" className='card'>
              <a class="login">GET IN TOUCH</a>
              <div class="inputBox">
                <input type="text" required="required" />
                <span class="user">Username</span>
              </div>
              <div class="inputBox">
                <input type="text" required="required" />
                <span>Message</span>
              </div>
              <input class="enter" type="submit" value="Send" />
            </form>
          </div>
        </div>
        <br />
        <br />
        <div class="social-menu">
          <ul>
            <li><a href="https://www.facebook.com/THEGREATX12?mibextid=LQQJ4d"><i class="fa fa-facebook"></i></a></li>
            <li> <a href="https://www.instagram.com/the.great.x/"><i class="fa fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/mohamedkammou?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://t.snapchat.com/3lQKRsdV"><i class="fa fa-snapchat"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About