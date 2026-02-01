import React from 'react'

function Judges() {
    return (
        <div className='h-[100vh] bg-black text-white flex flex-col justify-items-start items-start gap-6 px-20 py-[10vh] my-10'>
            <h1 className='text-h3 font-medium text-white/90'>Meet the Judges</h1>
            <p className='w-[50%] text-white/60 text-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis eius eos cum fugit possimus explicabo eaque, minus molestiae illo vitae et alias dolor iste? Consequatur quo numquam deserunt, expedita quae magnam tempora velit.</p>
            <div className='w-full mt-8 flex justify-evenly items-center gap-4'>
               <div className='min-w-[18%] bg-red-800 rounded-xl h-[20rem]'></div>
               <div className='min-w-[18%] bg-red-800 rounded-xl h-[20rem]'></div>
               <div className='min-w-[18%] bg-red-800 rounded-xl h-[20rem]'></div>
               <div className='min-w-[18%] bg-red-800 rounded-xl h-[20rem]'></div>
               <div className='min-w-[18%] bg-red-800 rounded-xl h-[20rem]'></div> 
            </div>
        </div>
    )
}

export default Judges
