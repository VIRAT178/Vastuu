import React from "react";
import { assets } from "../../assets/assets.js";

const Companies = () => {
  const companyLogos = [
    assets.microsoft_logo,
    assets.paypal_logo,
    assets.walmart_logo,
    assets.adobe_logo,
    assets.accenture_logo
  ];

  return (
    <div className="py-16 w-full bg-gradient-to-b from-blue-800 via-blue-900 to-indigo-950 text-center">
      <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 text-transparent bg-clip-text mb-10">
        Our Connections are here
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {companyLogos.map((logo, i) => (
          <div 
            key={i}
            className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-cyan-300/30 shadow-xl 
                       hover:scale-105 hover:shadow-cyan-400/50 transition-all cursor-pointer"
          >
            <img
              src={logo}
              alt="Company"
              className="w-24 md:w-32 filter grayscale hover:grayscale-0 hover:brightness-110 transition duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
