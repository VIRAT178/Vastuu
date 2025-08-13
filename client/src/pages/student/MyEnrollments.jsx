import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../components/student/Footer";

const MyEnrollments = () => {
  const { enrolledCorses, calculateCourseDuration, naviagte } = useContext(AppContext);
  
  const [progressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 6, totalLectures: 6 },
    { lectureCompleted: 3, totalLectures: 8 },
    { lectureCompleted: 10, totalLectures: 10 },
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 12, totalLectures: 12 },
    { lectureCompleted: 11, totalLectures: 14 },
    { lectureCompleted: 6, totalLectures: 16 },
    { lectureCompleted: 15, totalLectures: 18 },
    { lectureCompleted: 18, totalLectures: 20 },
  ]);

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-950">
    
        <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 md:px-36 px-6 pt-16 pb-10 text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text drop-shadow-lg mb-6">
            My Enrollments
          </h1>

          <div className="overflow-x-auto rounded-xl shadow-lg border border-cyan-300/20 bg-white/5 backdrop-blur-xl">
            <table className="w-full text-sm text-left text-cyan-100">
              <thead className="uppercase bg-cyan-400/10 text-cyan-200 text-xs">
                <tr>
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3 max-sm:hidden">Duration</th>
                  <th className="px-4 py-3 max-sm:hidden">Completed</th>
                  <th className="px-4 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {enrolledCorses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-b border-cyan-400/10 hover:bg-white/10 transition"
                  >
             
                    <td className="px-4 py-4 flex items-center gap-4">
                      <img
                        src={course.courseThumbnail}
                        alt={course.courseTitle}
                        className="w-16 sm:w-24 rounded-lg shadow-md"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{course.courseTitle}</p>
                        <Line
                          strokeWidth={3}
                          strokeColor="#06b6d4"
                          trailColor="#1e293b"
                          percent={
                            progressArray[index]
                              ? (progressArray[index].lectureCompleted * 100) /
                                progressArray[index].totalLectures
                              : 0
                          }
                          className="rounded-full mt-1"
                        />
                      </div>
                    </td>

                    <td className="px-4 py-3 max-sm:hidden text-cyan-200">
                      {calculateCourseDuration(course)}
                    </td>

                    <td className="px-4 py-3 max-sm:hidden text-cyan-200">
                      {progressArray[index] &&
                        `${progressArray[index].lectureCompleted}/${progressArray[index].totalLectures}`}{" "}
                      <span className="text-cyan-300">Lectures</span>
                    </td>

                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => naviagte("/player/" + course._id)}
                        className={`px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium shadow-md transition-all 
                          ${
                            progressArray[index] &&
                            progressArray[index].lectureCompleted /
                              progressArray[index].totalLectures ===
                              1
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-blue-600 hover:bg-blue-700"
                          }`}
                      >
                        {progressArray[index] &&
                        progressArray[index].lectureCompleted /
                          progressArray[index].totalLectures ===
                          1
                          ? "Completed"
                          : "On Going"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MyEnrollments;
