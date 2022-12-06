import React from 'react'

import SiginCarosel from './SiginCarosel'
import SignFormPassword from './SignFormPassword'
import './signIn.css'
function PasswordPage() {
  return (
    <>
     <div className='  signInPage'>
         <div  className=' col-md-6  col-xs-6'>
   
   <SignFormPassword />
        </div>
    <div  className=' col-md-6  col-xs-6 caro' >
        <SiginCarosel />
    </div>
    </div>
    </>
  )
}

export default PasswordPage