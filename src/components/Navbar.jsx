import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
        <div className="logo">
            <Link to="/">ProMeet</Link>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/Calender" onClick={() => setIsOpen(false)}>Calender</Link>
            <Link to="/Login" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/Register" onClick={() => setIsOpen(false)}>Register</Link>
        </div>

        <div
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar
