import React,{useState} from 'react'
import "./SignUp.css"
import logo from '../assets/logo1.png'
import opt from '../assets/opt.png'
import {Link} from 'react-router-dom'
function OtpFormPgae() {

    const [otp,setOtp]= useState( new Array(4).fill(""));

     const handleChange = (element,index) => {
        if(isNaN(element.value)) return false;
        setOtp([...otp.map((d,idx) =>(idx === index ? element.value :d))]);

        //focus next input
        if(element.nextSibling){
            element.nextSibling.focus();
        }
     }
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
    <h3>OTP</h3>
    <p>You need to enter a 4 digit code we sent via Provided email</p>
  </div>
  <form className='form'>
  <div clasName="login-form-input">
    {
        otp.map((data,index) => {
            return(
                <input type="text" name='otp' class=" login-input-otp" maxLength={1} value={data} key={index} onChange={e => handleChange(e.target,index)}  onFocus={e =>e.target.select()} /> 
            )
            
        })
    }

  </div>
  
    <p className='login-formButton'>
      <Link to="/home" className='form-link'> sign In</Link> 
    </p>
   

  </form>
  <p className='signIn'>Dont have an account? <span> <Link to="/" className='login-link'> Register now!</Link></span></p>
    </>
  )
}

export default OtpFormPgae