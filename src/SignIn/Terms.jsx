import React from 'react'
import SiginCarosel from './SiginCarosel'
import "./signIn.css"
import TermsAndConditions from './TermsAndConditions'
function Terms() {
  return (
    <>
      <div className='Terms-and-condition'>
      
      <div  className=' col-md-6  col-xs-6'>
          <TermsAndConditions />
          </div>
      <div  className=' col-md-6  col-xs-6 caro'>
          <SiginCarosel />
      </div>
      </div>
    </>
    
  )
}

export default Terms