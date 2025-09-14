import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Name = () => {
  return (
    <>
 
      <div
        className="h-screen bg-[#8a74c2] 
        [background-image:repeating-linear-gradient(to_right,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_2px,transparent_1px,transparent_128px),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_2px,transparent_1px,transparent_128px)]
        relative">
      </div>

     <div className="absolute top-1 left-1 w-full text-center text-white">
          <Navbar />
        </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white max-w-2xl">
    <h1 className="text-3xl font-semibold mb-4">For the reach you can’t compromise</h1>
          <p className="text-xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Upload. Automate. Deliver.</p>
          <p className="mt-2 text-base opacity-90">
            Orchestrate bulk campaigns with precision on a platform teams trust for speed and security.
          </p>
          <div>
            <Link to={"/login"}>
            <button className='bg-white text-black font-semibold px-12 py-2 mt-8 rounded hover:bg-white/50'>
            Start</button>
            </Link>
            </div>
      </div> 
    
      
    </>
  )
}

export default Name