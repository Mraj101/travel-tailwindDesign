import React from 'react'
import SubscribeImg from "../assets/subscribe.png"
const Subscribe = () => {
  return (
    <div className="flex items-center justify-center md:p-12 font-mulish">
    <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0 w-full">
      <div className="flex flex-col justify-center md:w-[44%]  gap-4 border shadow-lg border-orange-500 rounded-xl p-6">
        <h1 className='text-3xl font-extrabold'>NewsLetter</h1>
        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, soluta! Expedita porro veniam beatae officiis.</p>
        <input type="text " placeholder='Enter Your name' className='p-2 bg-gray-300  rounded-lg' />
        <input type="email" placeholder='Enter Your Email' className='p-2 bg-gray-300  rounded-lg' />
        <button className='border border-orange-500 p-2 rounded-lg bg-orange-500 text-white font-semibold'>SubScribe</button>
      </div>
      <div className="md:ml-10 md:w-[55%]">
        <img src={SubscribeImg} alt="img" />
      </div>
    </div>
  </div>
  )
}

export default Subscribe