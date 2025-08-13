import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-800 text-left w-full mt-10 overflow-hidden">

      <div className="absolute top-0 left-[20%] w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-[15%] w-72 h-72 bg-purple-400/10 blur-3xl rounded-full"></div>


      <div className="relative z-10 flex flex-col md:flex-row items-start px-8 md:px-20 justify-center gap-10 md:gap-24 py-12 border-b border-white/20">
        
    
        <div className="flex flex-col md:items-start items-center w-full max-w-sm">
          <img 
            src={assets.logo} 
            alt="logo"   
            className="w-12 h-12 object-contain drop-shadow-xl"
          />
          <p className="mt-6 text-center md:text-left text-sm text-cyan-100 leading-relaxed">
            From beginners to professionals, we deliver engaging, high‑quality courses 
            that fuel skills, spark creativity, and advance your career.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-cyan-200 md:space-y-2">
            {["Home", "About Us", "Contact Us", "Privacy Policy"].map((link, i) => (
              <li key={i}>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

      
        <div className="hidden md:flex flex-col items-start w-full max-w-sm">
          <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
          <p className="text-sm text-cyan-200">
            The latest news, articles, and resources sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input 
              className="border border-cyan-300/30 bg-white/10 backdrop-blur-md text-cyan-100 placeholder-cyan-300/70 outline-none w-64 h-10 rounded px-3 text-sm focus:border-cyan-300 transition"
              type="email" 
              placeholder="Enter your email" 
            />
            <button 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 w-28 h-10 text-white font-medium rounded shadow-lg hover:scale-105 active:scale-95 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className="relative z-10 py-4 text-center text-xs md:text-sm text-cyan-300 border-t border-white/10">
        © {new Date().getFullYear()} Vastuu Vidhya. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
