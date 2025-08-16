import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import axios from "axios";
import { toast } from "react-toastify";

const MyCourses = () => {
  const { currency , backendUrl , isEducator, getToken} = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  const fetchEducatorCourses = async () => {
    try {
      const token = await getToken()
      const {data} = await axios.get(backendUrl+ '/api/educator/courses' , {headers: {Authorization: `Bearer ${token}`}})
      data.success && setCourses(data.courses)
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (isEducator) {
      fetchEducatorCourses();
    }
  }, [isEducator]);

  return courses ? (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-blue-950 md:p-14 p-5 pt-10">
      <div className="absolute top-14 left-1/4 w-64 h-64 bg-cyan-400/10 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-14 right-1/4 w-72 h-72 bg-purple-400/10 blur-3xl rounded-full animate-pulse -z-10" />

      <h2 className="pb-6 text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
        My Courses
      </h2>

      <div className="overflow-hidden rounded-2xl shadow-xl border border-cyan-400/20 bg-white/10 backdrop-blur-xl max-w-6xl w-full">
        <table className="w-full table-fixed">
          <thead className="uppercase bg-cyan-400/10 text-cyan-200 text-sm">
            <tr>
              <th className="px-4 py-3 font-semibold truncate text-left">
                Course
              </th>
              <th className="px-4 py-3 font-semibold truncate text-left">
                Earnings
              </th>
              <th className="px-4 py-3 font-semibold truncate text-left">
                Students
              </th>
              <th className="px-4 py-3 font-semibold truncate text-left">
                Published On
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr
                key={course._id}
                className="border-b border-cyan-400/10 hover:bg-white/10 transition"
              >
                <td className="px-4 py-4 flex items-center gap-3">
                  <img
                    src={course.courseThumbnail}
                    alt="Course"
                    className="w-16 h-12 rounded-lg object-cover border border-cyan-400/30 shadow"
                  />
                  <span className="truncate text-cyan-100 font-medium hidden md:block">
                    {course.courseTitle}
                  </span>
                </td>

                <td className="px-4 py-4 text-cyan-200">
                  {currency}{" "}
                  {Math.floor(
                    course.enrolledStudents.length *
                      (course.coursePrice -
                        (course.discount * course.coursePrice) / 100)
                  )}
                </td>

                <td className="px-4 py-4 text-cyan-200">
                  {course.enrolledStudents.length}
                </td>

                <td className="px-4 py-4 text-cyan-200">
                  {new Date(course.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
