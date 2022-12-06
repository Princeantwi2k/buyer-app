import React from 'react'
import "./SignUp.css"
import logo from '../assets/logo1.png'
import opt from '../assets/opt.png'
import {Link} from 'react-router-dom'
function OtpFormPgae() {
  return (
    <>
    <div className='login-logo'>
    <img 
    className='form-logo'
    src={logo}
    alt='logo'
    />
    <img 
    className='form-logo1'
    src={opt}
    alt='logo'
    />

  </div>
  <div className='formTopic'>
    <h3>Hello Again,</h3>
    <p>Sign in to continue!</p>
  </div>
  <form className='form'>
  <div class="form-group">

    <input type="password" class="login-input" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter email/phone' /> <br />
   
  </div>
  <div class="form-group">

    <input type="password" class=" login-input" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter your password' /> <br />
   
  </div>
  <p className='login-form-note'>
     Forgot password?
   </p>
    <p className='formButton'>
      <Link to="/" className='form-link'> sign In</Link> 
    </p>
   

  </form>
  <p className='signIn'>Dont have an account? <span> <Link to="/" className='login-link'> Register now!</Link></span></p>
    </>
  )
}

export default OtpFormPgae