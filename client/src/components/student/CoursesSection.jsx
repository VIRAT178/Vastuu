import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-20 px-4 w-full bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-800 rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Glowing accent shapes */}
      <span className="absolute top-6 left-6 w-52 h-52 bg-cyan-400 rounded-full opacity-10 blur-2xl z-0" />
      <span className="absolute bottom-8 right-20 w-56 h-56 bg-purple-400 rounded-full opacity-10 blur-2xl z-0" />

      <div className="relative z-10 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Learn what you want
        </h2>
        <p className="text-base md:text-lg text-cyan-200 max-w-2xl mx-auto">
          Explore expert-led courses in every field — from tech and design to
          business and personal growth — designed to inspire and empower your
          success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:my-12 my-7 gap-7">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={course._id || index} course={course} />
        ))}
      </div>

      <div className="relative z-10 flex justify-center mt-9">
        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="bg-white/10 backdrop-blur-xl border border-cyan-400 text-cyan-200 px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:text-white transition-all"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
