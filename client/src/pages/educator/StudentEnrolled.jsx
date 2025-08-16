import React, { useContext, useEffect, useState } from "react";
import { dummyStudentEnrolled } from "../../assets/assets";
import Loading from "../../components/student/Loading";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const StudentEnrolled = () => {
  const {backendUrl, getToken , isEducator} = useContext(AppContext)
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    try {
      const token = await getToken()
      const {data} = await axios.get(backendUrl+ '/api/educator/enrolled-students' , {headers: {Authorization:`Bearer ${token}`}})
      if (data.success) {
        setEnrolledStudents(data.enrolledStudents.reverse())
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (isEducator) {
      fetchEnrolledStudents();
    }
  }, [isEducator]);

  return enrolledStudents ? (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-blue-950 md:p-14 p-5 pt-10">
 
      <div className="absolute top-14 left-1/4 w-64 h-64 bg-cyan-400/10 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-14 right-1/4 w-72 h-72 bg-purple-400/10 blur-3xl rounded-full animate-pulse -z-10" />

      <h2 className="pb-6 text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
        Students Enrolled
      </h2>

      <div className="overflow-hidden rounded-2xl shadow-xl border border-cyan-400/20 bg-white/10 backdrop-blur-xl max-w-6xl w-full">
        <table className="w-full table-fixed">
          <thead className="uppercase bg-cyan-400/10 text-cyan-200 text-sm">
            <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
              <th className="px-4 py-3 font-semibold text-left">Student Name</th>
              <th className="px-4 py-3 font-semibold text-left">Course Title</th>
              <th className="px-4 py-3 font-semibold text-left hidden sm:table-cell">Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((item, index) => (
              <tr
                key={index}
                className="border-b border-cyan-400/10 hover:bg-white/10 transition"
              >
           
                <td className="px-4 py-3 text-center hidden sm:table-cell text-cyan-200">
                  {index + 1}
                </td>

                <td className="md:px-4 px-2 py-3 flex items-center gap-3">
                  <img
                    src={item.student.imageUrl}
                    alt="profile"
                    className="w-9 h-9 rounded-full border border-cyan-400/30"
                  />
                  <span className="truncate text-cyan-100 font-medium">
                    {item.student.name}
                  </span>
                </td>

                <td className="px-4 py-3 truncate text-cyan-200">
                  {item.courseTitle}
                </td>
                <td className="px-4 py-3 hidden sm:table-cell text-cyan-200">
                  {new Date(item.purchaseDate).toLocaleDateString()}
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

export default StudentEnrolled;
