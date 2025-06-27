import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
    <div className='hero'>
        <div className="hero-title">
            <h1>Smart Appointment <br /> Scheduling</h1>
        </div>
        <div className="hero-subtitle">
            <p>Book appointments with ease, manage your time efficicently</p>
        </div>
        <div className="hero-btn">
            <Link to="/Register"><button className='btn btn-primary'>Get Started</button></Link>
            <Link to="/Login"><button className='btn btn-secondary'>Login</button></Link>
        </div>
    </div>

    <div className="section-feature">
      <h2 className='section-title'>Key Features</h2>

      <div className="features-grid">
        <div className="features-card">
          <a href="#">
            <div className="feature-icon">📅</div>
            <h3>Interactive Calendar</h3>
            <p>View and book appointments in real-time with our intuitive calendar interface</p>
          </a>
        </div>
        <div className="features-card">
          <a href="#">
            <div className="feature-icon">📧</div>
          <h3>Email Notifications</h3>
          <p>Receive instant confirmations and reminders for your appointments</p>
          </a>
        </div>
        <div className="features-card">
          <a href="#"><div className="feature-icon">👥</div>
          <h3>Role-Based Access</h3>
          <p>Different interfaces for admins, service providers, and clients</p>
          </a>
        </div>
      </div>
    </div>

    <div className="footer">
      <h2>Ready to streamline your appointments?</h2>
      <Link to="/Register"><button className="btn btn-primary">Start Now</button></Link>
    </div>

    </div>
  )
}

export default Home