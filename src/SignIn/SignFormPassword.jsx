import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import './signIn.css'
import {Link} from 'react-router-dom'
function SignFormPassword() {

  const [password , setPassword] = useState("")
  const [confirmpassword , setConfirmPassword] = useState("")

  const  handleSubmit = (e) =>{
    e.preventDefault()
    
  }
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
  <form className='form' onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputText">Password</label><br />
    <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} class=" input"   placeholder='Enter your first name' /> <br />
   
  </div>
  <div class="form-group">
    <label for="exampleInputText">Confirm Password</label><br />
    <input type="password"  value={confirmpassword}  onChange={(e) => setConfirmPassword(e.target.value)}class=" input"  placeholder='Enter your last name' /> <br />
   
  </div>
  <p className='form-note'>
    By opening account you agree to our  <br /><span>Terms and Use</span>
   </p>
   <p >
      <button type="submit" className='formButton'>  <Link to="/term" className='form-link' >Continue</Link></button>
    </p>
   

  </form>
  <p className='signIn'>Already have an account?  <span> <Link to="/login" className='login-link'>Sign in!</Link></span></p>
    </>
  )
}

export default SignFormPassword