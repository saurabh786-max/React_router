import React from 'react'
import Contactform from '../ContactForm/Contactform'

const ContactHeader = () => {
  return (
   <>
   <div className=' flex flex-col'>
    <h1 className='mt-10 text-4xl font-bold justify-start' >CONTACT US</h1>
    <p className='mt-5'> 
    LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
    </p>
   </div>
   <Contactform/>
   </>
  )
}

export default ContactHeader