import React ,{useState}  from 'react'
import logo from '../assets/logo1.png'
import {Link} from 'react-router-dom'
import './SignUp.css'
function Formpage() {

  const [name , setName] = useState("")
  const [password , setPassword] = useState("")

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
    <h3>Hello Again,</h3>
    <p>Sign in to continue!</p>
  </div>
  <form className='form' onSubmit={handleSubmit}>
  <div class="form-group">

    <input type="text"   value={name}  onChange={(e) => setName(e.target.value)} class="login-input" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter email/phone' /> <br />
   
  </div>
  <div class="form-group">

    <input type="password"  value={password}  onChange={(e) => setPassword(e.target.value)} class=" login-input" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter your password' /> <br />
   
  </div>
  <p className='login-form-note'>
     Forgot password?
   </p>
   <p >
      <button type="submit" className='formButton'>  <Link to="/otp" className='form-link' >Continue</Link></button>
    </p>
   

  </form>
  <p className='signIn'>Dont have an account? <span> <Link to="/" className='login-link'> Register now!</Link></span></p>
    </>
  )
}

export default Formpage