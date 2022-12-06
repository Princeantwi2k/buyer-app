import React from 'react'
import SiginCarosel from '../SignIn/SiginCarosel'
import OtpFormPgae from './OtpFormPgae'
import "./SignUp.css"

function OtpPage() {
  return (
    <>
    <div className='signUp'>
    <div className=' col-md-6  col-xs-6'>
     <OtpFormPgae />
    </div>
    <div className=' col-md-6  col-xs-6 caro'>
        <SiginCarosel />
    </div>
    </div>
    </>
  )
}

export default OtpPage