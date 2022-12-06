import React from 'react'
import logo from '../assets/logo1.png'
import './signIn.css'
import {Link} from 'react-router-dom'
function SignFormPassword() {
  return (
    <>
       
        <div className='logo'>
    <img 
    className='form-logo'
    src={logo}
    alt='logo'
    />
  </div>
  <div className='formTopic'>
    <h3>Create Account,</h3>
    <p>Sign up to get started!</p>
  </div>
  <form className='form'>
  <div class="form-group">
    <label for="exampleInputText">Password</label><br />
    <input type="password" class=" input" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter your first name' /> <br />
   
  </div>
  <div class="form-group">
    <label for="exampleInputText">Confirm Password</label><br />
    <input type="password" class=" input" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter your last name' /> <br />
   
  </div>
  <p className='form-note'>
    By opening account you agree to our  <br /><span>Terms and Use</span>
   </p>
    <p className='formButton'>
      <Link to="/term" className='form-link'> sign Up</Link> 
    </p>
   

  </form>
  <p className='signIn'>Already have an account?  <span> <Link to="/login" className='login-link'>Sign in!</Link></span></p>
    </>
  )
}

export default SignFormPassword