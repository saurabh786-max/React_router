import React from 'react'

const Home = () => {
  return (
    <>
    <main className=' w-full  mx-20 flex justify-center '>

        <div className='w-1/2'>
            <div >
                <h1 className=' mt-10 text-[108px] font-bold leading-none'>YOUR FEET DESERVE THE BEST</h1>
            </div>
            <div className='w-1/2 my-10 font-medium text-gray-600'>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
            <div className='flex'>
                <button className='border p-3 rounded mx-4 text-xl'>Shop now</button>
                <button className='border-none p-3 mx-3 bg-red-500 rounded text-xl'> Category
                </button>
            </div>
        </div>
        <div className='w-1/2 my-10'>
            <img src="\src\images\shoe_image.png" alt="shoe" />
        </div>
    </main>
    </>
  )
}

export default Home