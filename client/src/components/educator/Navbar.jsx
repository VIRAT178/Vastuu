import React from "react";
import { assets } from "../../assets/assets.js";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const { user } = useUser();
  return (
    <div className="w-full bg-gradient-to-r from-cyan-900 via-indigo-900 to-blue-900 px-6 md:px-14 py-4 flex items-center justify-between shadow-lg relative z-20">
      <Link to="/" className="flex items-center gap-3">
        <img
          src={assets.logo}
          alt="logo"
          className="w-10 h-10 object-contain drop-shadow-xl"
        />
        <h1 className="text-2xl font-bold text-white tracking-wide bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow">
          Vastuu
        </h1>
      </Link>
      <div className="flex items-center gap-5 text-cyan-100">
        <span>
          Hi! {user ? user.fullName : "Educator"}
        </span>
        {user ? (
          <UserButton />
        ) : (
          <img src={assets.profile_img} className="rounded-full w-8 h-8 bg-cyan-400/10 border border-cyan-400/50" alt="" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
