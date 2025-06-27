import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
  return (
    <div>
                <div className="reg-wrapper">

            <div className="reg-box">
                <h2>Register</h2>
                <form>
                    <div class="reg-form-group">
                        <label for="name">Full name</label>
                        <input id="name" required="" placeholder="Enter your name" type="text" value="" name="name" />
                    </div>
                    <div class="reg-form-group">
                        <label for="username">Username</label>
                        <input id="username" required="" placeholder="Enter your username" type="text" value="" name="username" />
                    </div>
                    <div class="reg-form-group">
                        <label for="email">Email</label>
                        <input id="email" required="" placeholder="Enter your email" type="email" value="" name="email" />
                    </div>
                    <div class="reg-form-group">
                        <label for="password">Password</label>
                        <input id="password" required="" placeholder="Enter your password" type="password" value="" name="password" />
                    </div>
                    <div class="reg-form-group">
                        <label for="role">Register As</label>
                        <select id="role" name="role" required="">
                            <option value="client">Client</option>
                            <option value="serviceProvider">Service Provider</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" class="reg-btn">Register</button>
                </form>
                <div className="have-account">
                <p>Already have an account? <Link to="/Login" className='reg-login-btn'>Login</Link></p>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Register