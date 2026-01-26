import { useState, useEffect } from 'react'
import './App.css'
import Home from './blocks/Home'


function App() {

  return (
  <div className='hero h-[100vh] w-full text-white px-20 py-10 flex flex-row justify-between'>
    <div className='h-[90vh] w-[50%] flex flex-col justify-end'>
      <h1 className='text-h1 font-semibold mt-32'>Hack O’Clock 2.0</h1>
      <h3 className='text-h5 font-normal'>Build. Innovate. Hack the Future.</h3>
      <div className='flex flex-row gap-2 py-4'>
        <a href="#" className='py-2 px-4 bg-white text-black font-semibold border border-[rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 rounded-full'>Register Now</a>
        <a href="#" className='py-2 px-4 bg-[rgba(255,255,255,0.2)] backdrop-blur-md font-semibold border border-[rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 rounded-full'>Become a Sponsor</a>
      </div>
    </div>
    <div className='h-[90vh] w-[50%] mt-48 flex items-end flex-col'>
      <p className='text-right w-[80%] text-p bg-red-700/50 backdrop-blur-md px-4 py-2 rounded-lg text-gray-200'>A flagship 24-hour hackathon by Google Developer Groups (GDG) IILM University, bringing together top student developers, designers, and problem-solvers to build real-world, industry-relevant solutions.</p>
      <p className='flex flex-col justify-center items-end font-medium text-right text-h6 mt-4'>
      <span className='text-h2 font-semibold'>750+</span> &nbsp;
      Tech-driven students. 24 hours. <br /> Unlimited innovation.
      </p>
    </div>
  </div>
)
}

export default App
