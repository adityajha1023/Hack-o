import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#000001] text-white">
      
      {/* Background Title */}
      <h2
        className="
          text-white/20 font-semibold text-center
          text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]
          leading-none
          py-6 sm:py-8
        "
      >
        Hack O&apos; Clock
      </h2>

      {/* Footer Links */}
      <div
        className="
          flex flex-col sm:flex-row
          justify-center sm:justify-between
          items-center
          gap-3 sm:gap-0
          mx-6 pb-4
          text-[0.833rem] sm:text-[1rem]
          text-white/90
        "
      >
        <a href="#" className="hover:text-white transition">About</a>
        <a href="#" className="hover:text-white transition">Judges</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>

    </footer>
  )
}

export default Footer
