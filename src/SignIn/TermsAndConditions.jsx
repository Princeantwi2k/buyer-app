import React from 'react'
import logo from '../assets/logo1.png'
import './signIn.css'
import {Link} from 'react-router-dom'

function TermsAndConditions() {
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
    <h5>Terms &,</h5>
    <h5>Conditions</h5>
  </div>
  <p className='form'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor nesciunt hic obcaecati. Dignissimos voluptas inventore dolore natus, fugiat maxime adipisci quidem debitis reprehenderit aspernatur amet totam asperiores cupiditate ipsam!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cumque. Ipsam voluptatibus minima voluptate quasi dolor at totam eum, aliquid dignissimos hic veniam? Nisi suscipit numquam quia debitis sunt officia?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est magnam impedit hic et cupiditate dolores neque explicabo optio ratione amet magni, quis, iusto nihil quos odit quisquam! Maiores, veniam.
  </p>

  <div class="form-group form-check form">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">I accept all Terms & conditions</label><br/>
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">I accept user fee</label><br/>
  </div>

  <p className='term-button form'>
       <Link to="/mainPage" className='form-link' >Complete</Link>
    </p>
   
  
  <p className='sign-in'>Already have an account?  <span> <Link to="/login" className='login-link'>Sign in!</Link></span></p>
    </>
  )
}

export default TermsAndConditions