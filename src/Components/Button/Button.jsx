import React from 'react'
import{MdMessage} from "react-icons/md"

const Button = (props) => {
  return (
    <>
    <div>
    <button className={`mt-5 flex items-center justify-center gap-2 border w-[220px] py-2 rounded bg-black text-white ${props.className}`}>
        
        <span className='text-xl'>{props.icon}</span> 
        {props.text}
    </button>

    </div>
    </>
  )
}

export default Button