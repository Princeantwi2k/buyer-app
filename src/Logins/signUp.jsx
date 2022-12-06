import React from 'react'
import SiginCarosel from '../SignIn/SiginCarosel'
import Formpage from './Formpage'
import "./SignUp.css"


function signUp() {
  return (
    <>
    <div className='signUp'>
    <div className=' col-md-6  col-xs-6'>
    <Formpage />
    </div>
    <div className=' col-md-6  col-xs-6 caro'>
        <SiginCarosel />
    </div>
    </div>
    </>
  )
}

export default signUp