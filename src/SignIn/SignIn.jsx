import React from 'react'
import SiginCarosel from './SiginCarosel'
import "./signIn.css"
import SignInForm from './SignInForm'
function SignIn() {
  return (
    <>
    <div className='  signInPage'>
      
    <div  className=' col-md-6  col-xs-6'>
        <SignInForm />
        </div>
    <div  className=' col-md-6  col-xs-6 caro'>
        <SiginCarosel />
    </div>
    </div>
    

    </>
  )
}

export default SignIn