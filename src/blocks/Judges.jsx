import React from 'react'
import tokyo from '../assets/tokyo.png'
import nairobi from '../assets/nairobi.png'

function Judges() {
    return (
    <div className='h-[100vh] bg-black text-white flex flex-col justify-items-start items-start gap-10 px-20 py-[10vh] my-10'>
    <h1 className='text-h3 font-semibold'>Meet The Judges</h1>
    <p className='text-p text-white/90 -mt-4 mb-6'>Learn from the minds shaping the tech industry. This is your chance to present your work to people who actually build and hire.</p>
    {/* judges card */}
    <div className='flex flex-row justify-between items-center gap-10 overflow-hidden'>
    <div className="w-[320px] h-[400px] rounded-[28px] bg-black relative overflow-hidden">
      <div className="absolute inset-0 ">
        <div className="absolute top-0 right-0 w-[100%] h-[90%] bg-[#E10600] rounded-tr-[180px]" />
      </div>
      <img src={tokyo} alt="Tokyo" className="absolute inset-0 select-none h-full w-full object-cover z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#E10600] via-[#E10600]/90 to-transparent z-20" />
      <div className="absolute bottom-8 left-6 z-30">
      <h2 className="text-white text-h3 font-bold">Tokyo</h2>
      <button className=" text-white text-p opacity-90 hover:opacity-100">
        Click to Read more
      </button>
      </div>
    </div>
    {/* judge 2 */}
    <div className="w-[320px] h-[400px] rounded-[28px] bg-black relative overflow-hidden">
      <div className="absolute inset-0 ">
        <div className="absolute top-0 right-0 w-[100%] h-[90%] bg-[#E10600] rounded-tr-[180px]" />
      </div>
      <img src={nairobi} alt="Nairobi" className="absolute inset-0 select-none h-full w-full object-cover z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#E10600] via-[#E10600]/90 to-transparent z-20" />
      <div className="absolute bottom-8 left-6 z-30">
      <h2 className="text-white text-h3 font-bold">Nairobi</h2>
      <button className=" text-white text-p opacity-90 hover:opacity-100">
        Click to Read more
      </button>
      </div>
    </div>
    {/* judge 3 */}
    <div className="w-[320px] h-[400px] rounded-[28px] bg-black relative overflow-hidden">
      <div className="absolute inset-0 ">
        <div className="absolute top-0 right-0 w-[100%] h-[90%] bg-[#E10600] rounded-tr-[180px]" />
      </div>
      <img src={tokyo} alt="Tokyo" className="absolute inset-0 select-none h-full w-full object-cover z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#E10600] via-[#E10600]/90 to-transparent z-20" />
      <div className="absolute bottom-8 left-6 z-30">
      <h2 className="text-white text-h3 font-bold">Tokyo</h2>
      <button className=" text-white text-p opacity-90 hover:opacity-100">
        Click to Read more
      </button>
      </div>
    </div>
    {/* judge 4 */}
    <div className="w-[320px] h-[400px] rounded-[28px] bg-black relative overflow-hidden">
      <div className="absolute inset-0 ">
        <div className="absolute top-0 right-0 w-[100%] h-[90%] bg-[#E10600] rounded-tr-[180px]" />
      </div>
      <img src={tokyo} alt="Tokyo" className="absolute inset-0 select-none h-full w-full object-cover z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#E10600] via-[#E10600]/90 to-transparent z-20" />
      <div className="absolute bottom-8 left-6 z-30">
      <h2 className="text-white text-h3 font-bold">Tokyo</h2>
      <button className=" text-white text-p opacity-90 hover:opacity-100">
        Click to Read more
      </button>
      </div>
    </div>
    </div>
    </div>
    )
}

export default Judges
