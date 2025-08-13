import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({data}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : '');
  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate('/course-list/' + input);
  };
  return (
    <form onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center
      bg-white/20 backdrop-blur-2xl border border-cyan-300/40
      rounded-full shadow-2xl overflow-hidden transition">
      <img src={assets.search_icon} alt="Search" className="w-8 md:w-10 px-3 opacity-80" />
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for Classes"
        className="w-full h-full bg-transparent text-blue-900 placeholder-cyan-600 font-medium outline-none"
      />
      <button type="submit"
        className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white font-bold rounded-full md:px-8 px-5
        md:py-3 py-2 mx-1 shadow-lg hover:scale-105 hover:bg-gradient-to-tr active:scale-95 transition-all"
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
