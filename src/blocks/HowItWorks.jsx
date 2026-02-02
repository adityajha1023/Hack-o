import { MousePointerClick, NotebookPen, Ribbon } from 'lucide-react'
import React from 'react'

function HowItWorks() {
    return (
        <section className="flex flex-col gap-8 px-6 sm:px-10 lg:px-20 py-10">
            <p className="mt-10 sm:mt-16 font-bold text-red-700 uppercase">
                how it works ?
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 w-full">
                
                {/* Card 1 */}
                <div className="bg-white py-6 px-8 rounded-3xl w-full lg:max-w-[25rem] flex flex-col gap-6 shadow-md">
                    <span className="flex items-center gap-2 font-semibold text-p">
                        <NotebookPen color="#E10600" fill='#fff' />
                        Registration
                    </span>

                    <h3 className="text-h4 text-black/50 font-medium">
                        Students register in teams of 3–4 and submit basic project interests.
                    </h3>
                </div>

                {/* Card 2 */}
                <div className="bg-white py-6 px-8 rounded-3xl w-full lg:max-w-[25rem] flex flex-col gap-6 shadow-md">
                    <span className="flex items-center gap-2 font-semibold text-p">
                        <MousePointerClick color="#E10600" fill='#fff' />
                        Shortlisting
                    </span>

                    <h3 className="text-h4 text-black/50 font-medium">
                        Top 80 teams are shortlisted based on project and intent.
                    </h3>
                </div>

                {/* Card 3 */}
                <div className="bg-white py-6 px-8 rounded-3xl w-full lg:max-w-[25rem] flex flex-col gap-6 shadow-md">
                    <span className="flex items-center gap-2 font-semibold text-p">
                        <Ribbon color="#E10600" fill='#fff' />
                        Final Hackathon
                    </span>

                    <h3 className="text-h4 text-black/50 font-medium">
                        <span className="text-black font-semibold">60</span> teams compete in a 24-hour on-campus hackathon
                    </h3>

                    {/* Pushes content to bottom naturally */}
                    <div className="flex-grow" />

                    <h3 className="text-h5 text-black/50 font-medium">
                        Final presentations to <span className="text-red-700">Judges</span>
                    </h3>
                </div>

            </div>
        </section>
    )
}

export default HowItWorks
