import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='body'>
      <div className='container'>
        <div className='s1'>
          <div className='cont'>
            <h1 className='title'><span className='link'>SCRIPT.</span>EX</h1>
            <p className='p'>Welcome to <span className='link'>SCRIPT.EX </span>Here we provide much services you can benefit from easily and for free. Our services are created using <span className='link'>Javascript</span> or <span className='link'>JS APIs </span>!
             Learn more contacting us from<Link className='hand' to="/about">→ HERE.</Link></p>
            <Link to="/services"><button className='btn'>SURF NOW</button></Link>
          </div>
        </div>
        <div className='s2'>
          <img src={process.env.PUBLIC_URL+'js.png'} alt='AN IMG SUPPOSED TO BE HERE' className='img'/>
        </div>
      </div>
    </div>
  );
};

export default Home;