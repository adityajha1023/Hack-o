import React, { useEffect, useRef, useState } from 'react';
import App from '../App.jsx';
import { MoveRight } from 'lucide-react';

function Home() {
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const text = "Hack O'Clock 2.0 is a high-impact hackathon bridging academic learning with real-world tech challenges. Teams collaborate with industry mentors, use modern tools and APIs, and present to expert judges, while sponsors connect with top emerging talent. More than a hackathon, it's a launchpad for careers, products, and innovation.";
    
    const words = text.split(' ');

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const element = containerRef.current;
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Calculate scroll progress through the element
                const start = rect.top - windowHeight + 200;
                const end = rect.bottom - windowHeight / 2;
                const total = end - start;
                const current = -start;
                
                const progress = Math.max(0, Math.min(1, current / total));
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div data-nav-theme="light" className="min-h-[50vh] bg-white">
            <App />
            {/* Spacer for scroll */}
            <div className="h-[10vh]"></div>
            
            <div ref={containerRef} className='flex flex-row justify-between items-start min-h-[100vh] px-20 py-10'>
                <p className='mt-16 font-bold text-red-700 uppercase'>about</p>
                <div className='w-[75%] flex-col justify-center items-center'>
                <h1 ref={textRef} className='mt-16 text-h3 w-full font-semibold tracking-tight leading-relaxed'>
                    {words.map((word, index) => {
                        const wordProgress = (scrollProgress * words.length) - index;
                        const opacity = Math.max(0, Math.min(1, wordProgress));
                        
                        return (
                             <span
                                key={index}
                                style={{
                                    color: `rgba(0, 0, 0, ${0.2 + (0.8 * opacity)})`,
                                    transition: 'color 0.1s ease-out'
                                }}>
                                {word}{' '}
                            </span>
                        );
                    })}
                </h1>
                <p className='mt-16 font-bold text-red-700 uppercase flex flex-row gap-2'>event details <MoveRight /></p>
                <div className='flex flex-row flex-wrap mt-6 gap-8'>
                    <p className='text-h6 font-medium p-6 border rounded-md shadow-sm'><span className='font-semibold text-red-700'>100+</span> Teams expected to <br /> participate in the Hackathon</p>
                    <p className='text-h6 font-medium p-6 border rounded-md shadow-sm'><span className='font-semibold text-red-700'>80</span> Teams will qualify <br /> for the on-campus final round</p>
                    <p className='text-h6 font-medium p-6 border rounded-md shadow-sm'><span className='font-semibold text-red-700'>60</span> Teams will stay overnight for the <br /> <span className='font-semibold'>24-Hour</span> Hackathon Experience</p>
                    <p className='text-h6 font-medium p-6 border rounded-md shadow-sm'>Each Teams will consist of <br /><span className='font-semibold'>3-4</span> student developers</p>
                </div>
                </div>
            </div>
            
            {/* Spacer for scroll */}
            <div className="h-[10vh]">
            </div>
        </div>
    );
}

export default Home;