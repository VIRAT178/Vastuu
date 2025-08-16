import React, { useContext, useState } from 'react';
import { data, Link, useLocation } from 'react-router-dom';
import { assets } from './../../assets/assets.js';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { HiMenu, HiX } from 'react-icons/hi';
import { AppContext } from '../../context/AppContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const {naviagte,isEducator,backendUrl,getToken,setIsEductor} = useContext(AppContext)
  const [menuOpen, setMenuOpen] = useState(false);

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        naviagte('/educator')
        return;
      }
      const token = await getToken()
      const {data} = await axios.get(backendUrl + '/api/educator/update-role',{headers:{Authorization: `Bearer ${token}`}})
      if (data.success) {
        setIsEductor(true)
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <nav className={`sticky top-0 z-50 shadow-lg transition-all duration-300 ${
      isCourseListPage 
        ? 'bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900 '
        : 'bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900'
    }`}>
      <div className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-3">

        <Link to="/" className="flex items-center gap-3">
          <img src={assets.logo} alt="logo" onClick={()=>naviagte('/')} className="w-10 h-10 object-contain drop-shadow-xl" />
          <h1 className="text-xl font-bold text-white tracking-wide drop-shadow">Vastuu</h1>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-slate-100 font-medium">
          {user && ( 
            <>
              <button onClick={becomeEducator} className="hover:text-cyan-300 transition">{isEducator ? 'Teacher Dashboard': 'Become Teachar'}</button>
              <span className="text-purple-400">|</span>
              <Link to="/my-enrollments" className="hover:text-cyan-300 transition">My Enrollments</Link>
            </>
          )}
          {user ? (
            <UserButton />
          ) : (
            <button 
              onClick={openSignIn}
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white px-5 py-2 rounded-full shadow-lg font-bold hover:scale-105 active:scale-95 transition"
            >
              Create Account
            </button>
          )}
        </div>


        <div className="md:hidden flex items-center gap-3">
          {user ? (
            <UserButton />
          ) : (
            <button onClick={openSignIn}>
              <img src={assets.user_icon} alt="user" className="w-7 h-7" />
            </button>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="text-2xl text-cyan-300"/> : <HiMenu className="text-2xl text-cyan-300"/>}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-gradient-to-b from-indigo-950 to-blue-900 shadow-xl">
          {user && (
            <>
              <button onClick={becomeEducator} className="hover:text-cyan-300 transition"> {isEducator ? 'Teacher Dashboard': 'Become Teachar'}</button>
              <Link to="/my-enrollments" className="hover:text-cyan-300 text-white transition">My Enrollments</Link>
            </>
          )}
          {!user && (
            <button 
              onClick={() => { openSignIn(); setMenuOpen(false); }}
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full shadow-lg font-bold hover:scale-105 active:scale-95 transition"
            >
              Create Account
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
