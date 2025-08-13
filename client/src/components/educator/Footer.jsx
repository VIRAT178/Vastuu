import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-900 via-indigo-950 to-blue-950 px-8 py-5 border-t border-cyan-400/10 flex md:flex-row flex-col items-center justify-between mt-auto gap-4">
      <div className="flex gap-4 items-center">
        <img src={assets.logo} alt="" className="w-10" />
        <p className="text-xs text-cyan-300">
          © {new Date().getFullYear()} Vastuu Vidhya. All Rights Reserved.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <a href="#"><img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6 hover:scale-110 transition"/></a>
        <a href="#"><img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6 hover:scale-110 transition"/></a>
        <a href="#"><img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6 hover:scale-110 transition"/></a>
      </div>
    </footer>
  );
};

export default Footer;
