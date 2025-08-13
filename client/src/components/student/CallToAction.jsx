import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-6 md:px-0 bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-800 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-extrabold text-white max-w-3xl text-center drop-shadow-lg">
        Grow your skills, on your schedule
      </h1>
      <p className="text-cyan-200 sm:text-base max-w-xl text-center leading-relaxed">
        Access world-class courses across countless topics, guided by expert mentors. Learn on your own terms — wherever you are, whenever you want.
      </p>

      <div className="flex items-center justify-center gap-8 mt-6">
        <button
          className="px-12 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold shadow-lg
                     hover:scale-105 active:scale-95 transition-transform"
        >
          Get Started
        </button>
        <button
          className="flex items-center gap-2 text-cyan-300 font-medium hover:text-white transition-colors"
        >
          Learn more
          <img src={assets.arrow_icon} alt="arrow_icon" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
