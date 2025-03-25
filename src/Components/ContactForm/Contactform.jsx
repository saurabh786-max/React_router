import React from 'react'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa";

const Contactform = () => {
  return (
   < >
   <div className='flex'>
   <div className='justify-center items-start flex flex-col flex-start mx-20'>
   <div className='flex gap-10 '>
   <Button text = "VIA SUPPORT CHAT" icon={<MdMessage/>}/>
   <Button text = "VIA CALL"  icon= {<FaPhoneAlt/>}/>
   </div>
   <Button text = "VIA E-MAIL FORM"  icon= {<MdMessage/>} className ="bg-blue-400 w-[480px]"/>

   <form>
  <div className='mt-5 form_control flex flex-col items-start mx-5'>
    <label className='font-bold' htmlFor="name">Name</label>
    <input className='border border-gray-400 rounded h-[40px] w-[440px] ' name='Name' type="text" />
    <label className='font-bold' htmlFor="name">E-Mail</label>
    <input className='border border-gray-400 rounded h-[40px] w-[440px] ' name='E-Mail' type="text" />
    <label className='font-bold' htmlFor="name">Text</label>
    <textarea name="Text" id="" className='border border-gray-400 rounded h-[180px] w-[440px]'></textarea>
    <Button text = "SUBMIT" className ="bg-blue-400 mx-30 font-bold"/>
    </div>
   </form>
   </div>
   <div>
    <img src="src\Images\Service 24_7-pana 1.svg" alt="" />
   </div>
   </div>
   
   </>
  )
}

export default Contactform