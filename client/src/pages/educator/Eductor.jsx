import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/educator/Navbar";
import Sidebar from "../../components/educator/Sidebar";
import Footer from "../../components/educator/Footer";

const Eductor = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-indigo-950 via-blue-900 to-blue-950 text-cyan-100">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-12">{<Outlet />}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Eductor;
