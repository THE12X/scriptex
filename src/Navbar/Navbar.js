import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navigo'>
      <nav>
        <div className='logo'>
          <h1><span className='span'>SCRIPT.</span>EX</h1>
        </div>
        <div className='list'>
          <ul>
            <li>
              <Link className='a' to="/">HOME.</Link>
            </li>
            <li>
              <Link className='a'  to="/services">SERVICES.</Link>
            </li>
            <li>
              <Link className='a' to="/about">ABOUT.</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;