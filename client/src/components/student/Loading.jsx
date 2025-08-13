import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-800">
      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg border-4 border-cyan-400/40 flex items-center justify-center shadow-lg">
        <div className="w-14 h-14 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
