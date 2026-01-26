import React from 'react'

function Navigation() {
    return (
        <div className='h-20 fixed w-full flex justify-between items-center shadow-sm px-20 py-4 font-p bg-black z-50'>
            <a href="/">
                <img src="./logo.png" alt="" className='h-52 py-2'/>
            </a>
            <ul className='flex justify-center items-center gap-5 font-normal tracking-tight text-gray-300'>
                <a href="#" className='hover:text-black transition-all duration-300 hover:scale-105 bg-[rgba(255,255,255,0.1)] backdrop-blur-md hover:bg-white py-2 px-3 rounded-full'>About</a>
                <a href="#" className='hover:text-black transition-all duration-300 hover:scale-105 bg-[rgba(255,255,255,0.1)] backdrop-blur-md hover:bg-white py-2 px-3 rounded-full'>Sponsors</a>
                <a href="#" className='hover:text-black transition-all duration-300 hover:scale-105 bg-[rgba(255,255,255,0.1)] backdrop-blur-md hover:bg-white py-2 px-3 rounded-full'>Contact</a>
                <a href="#" className='hover:text-black transition-all duration-300 hover:scale-105 bg-[rgba(255,255,255,0.1)] backdrop-blur-md hover:bg-white py-2 px-3 rounded-full'>Register</a>
            </ul>
        </div>
    )
}

export default Navigation
