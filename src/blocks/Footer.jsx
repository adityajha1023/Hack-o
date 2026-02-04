import React from 'react'

function Footer() {
    return (
        <div className='bg-[#000001] text-white py-2'>
            <h2 className='flex justify-center items-center font-semibold text-white/20 text-[10rem] py-8'>Hack O' Clock</h2>
            <div className='flex flex-row justify-between items-center text-p text-white/90 mx-6'>
                <a href="#">About</a>
                <a href="#">Judges</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Footer
