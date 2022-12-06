import React,{useState} from 'react'
import logo from '../assets/logo1.png'
import './signIn.css'
import {Link} from 'react-router-dom'



function SignInForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileName, setMobileName] = useState('');
  const [dateName, setDateName] = useState('');


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
  <form className='form' onSubmit={handleSubmit} >
  <div class="form-group">
    <label for="exampleInputText">First name</label><br />
    <input type="text" value={firstName}  onChange={(e) => setFirstName(e.target.value)} class=" input" placeholder='Enter your first name' /> <br />
   
  </div>
  <div class="form-group">
    <label for="exampleInputText">Last name</label><br />
    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} class=" input"  placeholder='Enter your last name' /> <br />
   
  </div>
  <div class="form-group">
    <label htmlfor="exampleInputNumber">Mobile number</label><br />
    <input type="text"  value={mobileName}onChange={(e) => setMobileName(e.target.value)}  class=" input"placeholder='Enter your mobile number' /> <br />
   
  </div>
  <div class="form-group">
    <label for="exampleInputNumber">Date of Birth</label><br/>
    <input type="text" value={dateName}  onChange={(e) => setDateName(e.target.value)}class="input" placeholder='Enter your date of birth' />
  </div>
    <p >
      <button type="submit" className='formButton'>  <Link to="/password" className='form-link' >Continue</Link></button>
    </p>
   
  </form>
  <p className='sign-in'>Already have an account? <span> <Link to="/login" className='login-link'>Sign in!</Link></span></p>
  </>
  )
}

export default SignInForm