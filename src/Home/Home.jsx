import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isDark, setIsDark] = useState(
    document.body.classList.contains('dark-mode')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark-mode'));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const logoSrc = isDark
    ? import.meta.env.BASE_URL + 'js-dark.png'
    : import.meta.env.BASE_URL + 'js.png';

  return (
    <div className='body'>
      <div className='container'>
        <div className='s1'>
          <div className='cont'>
            <h1 className='title'><span className='link'>SCRIPT.</span>EX</h1>
            <p className='p'>
              Discover a suite of fast, interactive web utilities built with modern <span className='link'>JavaScript</span> and powerful <span className='link'>JS APIs</span>. Completely free, lightweight, and ready to use instantly!
            </p>
            <Link to="/services"><button className='btn'>SURF NOW</button></Link>
          </div>
        </div>
        <div className='s2'>
          <img src={logoSrc} alt='SCRIPT.EX Logo' className='img' />
        </div>
      </div>
    </div>
  );
};

export default Home;