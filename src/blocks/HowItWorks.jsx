import { MousePointerClick, NotebookPen, Ribbon } from 'lucide-react'
import React from 'react'

function HowItWorks() {
    return (
        <div className='flex flex-col justify-between items-start gap-8 px-20 py-10'>
            <p className='mt-16 font-bold text-red-700 uppercase'>how it works ?</p>
            <div className='flex flex-row gap-4'>
                <div className='bg-white py-6 px-8 rounded-3xl min-h-[60vh] max-w-[30rem] flex flex-col justify-start items-start gap-6 shadow-md'>
                    <span className='flex flex-row gap-2 font-semibold text-p'>
                        <NotebookPen color='#FF3300' fill='#FFC2B3' />
                        Registration
                    </span>
                    <h3 className='text-h4 text-black/50 font-medium'>Students register in teams of 3–4 and submit basic project interests.</h3>
                    
                </div>
                <div className='bg-white py-6 px-8 rounded-3xl min-h-[60vh] max-w-[30rem] flex flex-col justify-start items-start gap-6 shadow-md'>
                    <span className='flex flex-row gap-2 font-semibold text-p'>
                        <MousePointerClick color='#FF3300' fill='#FFC2B3' />
                        Shortlisting
                    </span>
                    <h3 className='text-h4 text-black/50 font-medium'>Top 80 teams are shortlisted based on project and intent.</h3>
                    
                </div>
                <div className='bg-white py-6 px-8 rounded-3xl min-h-[60vh] max-w-[30rem] flex flex-col justify-start items-start gap-6 shadow-md'>
                    <span className='flex flex-row gap-2 font-semibold text-p'>
                        <Ribbon color='#FF3300' fill='#FFC2B3' />
                        Final Hackathon
                    </span>
                    <h3 className='text-h4 text-black/50 font-medium'>60 teams compete in a 24-hour on-campus hackathon</h3>
                    <h3 className='text-h5 mt-44 text-black/50 font-medium'>Final presentations to <span className='text-red-700'>Judges</span></h3>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
