import React from 'react'
import { Link } from 'react-router-dom'
import { MDFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import './App.css';

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MDFingerprint className='navbar-icon' />
            LAVISH
          </Link>
          <div className="menu-icon" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
