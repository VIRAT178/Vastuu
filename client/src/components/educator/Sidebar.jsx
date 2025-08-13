import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);
  const menuItems = [
    { Name: "Dashboard", path: "/educator", icon: assets.home_icon },
    { Name: "Add Course", path: "/educator/add-course", icon: assets.add_icon },
    { Name: "My Courses", path: "/educator/my-courses", icon: assets.my_course_icon },
    { Name: "Student Enrolled", path: "/educator/student-enrolled", icon: assets.person_tick_icon },
  ];
  return isEducator && (
    <div className="md:w-64 w-16 min-h-[calc(100vh-80px)] bg-gradient-to-b from-blue-950 via-indigo-900 to-indigo-950 border-r border-cyan-400/20 py-4 flex flex-col shadow-lg">
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.Name}
          end={item.path === '/educator'}
          className={({ isActive }) =>
            `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-8 gap-3 rounded-xl mx-2 my-1 transition ${
              isActive
                ? "bg-cyan-400/10 border-r-4 border-cyan-400 text-cyan-300"
                : "hover:bg-white/10 border-r-4 border-transparent text-cyan-100"
            }`
          }
        >
          <img src={item.icon} alt="" className="w-6 h-6" />
          <span className="md:block hidden text-sm font-medium">{item.Name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
