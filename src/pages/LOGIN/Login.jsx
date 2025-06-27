import React, { useState } from 'react';
import './Login.css'

const Login = () => {

    const [showForgot, setShowForgot] = useState(false);

  const handleForgotClick = (e) => {
    e.preventDefault();
    setShowForgot(true);
  };

  const closeForgot = () => {
    setShowForgot(false);
  };

    return (
        <div className="container">
             <div className={`overlay ${showForgot ? 'show' : ''}`} onClick={closeForgot}></div>

            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div class="form-group">
                        <label for="role">Login As</label>
                        <select id="role" name="role" required="">
                            <option value="client">Client</option>
                            <option value="serviceProvider">Service Provider</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input id="username" required="" placeholder="Enter your username" type="text" value="" name="username" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" required="" placeholder="Enter your password" type="password" value="" name="password" />
                    </div>
                    <button type="submit" class="login-btn">Login</button>
                </form>
                <div className='forgot-pass'>
                <a href="#" onClick={handleForgotClick}>Forgot Password?</a>
                </div>
            </div>

            <div className={`forgot-dropdown ${showForgot ? 'slide-down' : ''}`}>
        <h3>Reset Password</h3>
        <p>Enter your email link to send the link of reset password to your email.</p>
        <div className="forgot-input">
        <input type="email" placeholder="Enter your email" />
        <button>Send Reset Link</button>
        </div>
      </div>
        </div>
    )
}

export default Login