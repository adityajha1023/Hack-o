import React from 'react'

function Navigation() {
    return (
        <div className='flex fixed justify-center items-center w-full pt-4  z-50'>
        <div className='h-fit w-fit flex justify-stretch items-center shadow-sm gap-20 px-8 py-2 font-p bg-[#010b13] backdrop-blur-lg rounded-lg'>
            <a href="/" className='text-white font-bold text-h6'>
                GDG
            </a>
            <ul className='flex justify-center items-center gap-2 font-normal tracking-tight text-gray-400'>
                <a href="#" className='hover:text-white hover:font-medium transition-all duration-300 hover:scale-105 py-2 px-3 rounded-full'>About</a>
                <a href="#" className='hover:text-white hover:font-medium transition-all duration-300 hover:scale-105 py-2 px-3 rounded-full'>Sponsors</a>
                <a href="#" className='hover:text-white hover:font-medium transition-all duration-300 hover:scale-105 py-2 px-3 rounded-full'>Contact</a>
                <a href="#" className='font-medium text-black transition-all duration-300 hover:scale-105 bg-white py-2 px-3 rounded-full'>Register</a>
            </ul>
        </div>
        </div>
    )
}

export default Navigation
