import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import CourseCard from "../../components/student/CourseCard";
import Footer from "../../components/student/Footer";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";

const CourseList = () => {
  const { naviagte, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = [...allCourses];
      input
        ? setFilteredCourse(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-indigo-950 via-blue-900 to-blue-950">

        <div className="absolute top-24 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative z-10 md:px-36 px-6 pt-24 pb-10 text-left">
 
          <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
            <div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-1">
                Course List
              </h1>
              <p className="text-cyan-100 text-sm">
                <span
                  className="text-cyan-300 cursor-pointer hover:underline"
                  onClick={() => naviagte("/")}
                >
                  Home
                </span>
                <span className="text-cyan-400 mx-1">/</span>Course List
              </p>
            </div>

            <div className="w-full md:w-auto">
              <SearchBar data={input} />
            </div>
          </div>

          {input && (
            <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-cyan-300/40 mt-8 mb-8 text-cyan-100 shadow-lg">
              <p className="font-medium">{input}</p>
              <img
                src={assets.cross_icon}
                alt="clear"
                className="cursor-pointer hover:scale-110 transition"
                onClick={() => naviagte("/course-list")}
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-16 gap-8">
            {filteredCourse.length > 0 ? (
              filteredCourse.map((course, index) => (
                <div
                  key={index}
                  className="transition transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/20 rounded-2xl"
                >
                  <CourseCard course={course} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-cyan-200 text-lg font-medium">
                No courses found.
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CourseList;
