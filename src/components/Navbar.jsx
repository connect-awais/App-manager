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
            <Link to="/">Home</Link>
            <Link to="/Calender">Calender</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
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