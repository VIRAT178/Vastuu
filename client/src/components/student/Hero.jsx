import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 pb-16 px-7 md:px-0 space-y-7 text-center 
                    bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute top-10 left-[-100px] w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-[-120px] w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <h1 className="md:text-home-heading-large text-3xl sm:text-4xl relative font-extrabold text-white max-w-3xl mx-auto drop-shadow-lg leading-tight">
        Shape your tomorrow with learning that matches{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-300 text-transparent bg-clip-text">
          your passion.
        </span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>

      <p className="hidden md:block text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
        Uniting expert mentors, engaging resources, and a vibrant community to
        empower your journey toward success.
      </p>
      
      <p className="md:hidden text-cyan-100/90 max-w-sm mx-auto leading-relaxed">
        Where knowledge, innovation, and collaboration meet to unlock your full potential.
      </p>

      <SearchBar/>
    </div>
  );
};

export default Hero;
