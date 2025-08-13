import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-blue-950 flex flex-col items-start justify-between gap-8 md:p-14 p-5 pt-10">
      <div className="absolute top-14 left-1/4 w-64 h-64 bg-cyan-400/10 blur-3xl rounded-full animate-pulse -z-10"/>
      <div className="absolute bottom-24 right-1/4 w-80 h-80 bg-purple-400/10 blur-3xl rounded-full animate-pulse -z-10"/>

      <div className="flex flex-wrap gap-7 items-center mb-6">
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-cyan-400/30 shadow-xl p-5 w-56 rounded-2xl transition hover:scale-105 hover:border-cyan-400">
          <img src={assets.patients_icon} alt="" className="w-10 h-10"/>
          <div>
            <p className="text-3xl font-bold text-cyan-300 drop-shadow">
              {dashboardData.enrolledStudentsData.length}
            </p>
            <p className="text-base text-cyan-100">Total Enrollments</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-cyan-400/30 shadow-xl p-5 w-56 rounded-2xl transition hover:scale-105 hover:border-cyan-400">
          <img src={assets.appointments_icon} alt="" className="w-10 h-10"/>
          <div>
            <p className="text-3xl font-bold text-cyan-300 drop-shadow">
              {dashboardData.totalCourses}
            </p>
            <p className="text-base text-cyan-100">Total Courses</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-cyan-400/30 shadow-xl p-5 w-56 rounded-2xl transition hover:scale-105 hover:border-cyan-400">
          <img src={assets.earning_icon} alt="" className="w-10 h-10"/>
          <div>
            <p className="text-3xl font-bold text-cyan-300 drop-shadow">
              {currency}{dashboardData.totalEarnings}
            </p>
            <p className="text-base text-cyan-100">Total Earnings</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-3 rounded-2xl overflow-hidden shadow-xl border border-cyan-400/20 bg-white/10 backdrop-blur-xl">
        <h2 className="pb-4 px-4 md:px-8 pt-6 text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Latest Enrollments
        </h2>
        <table className="table-fixed md:table-auto w-full">
          <thead className="border-b border-cyan-300/20 text-sm text-left uppercase bg-cyan-400/10 text-cyan-200">
            <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
              <th className="px-4 py-3">Student Name</th>
              <th className="px-4 py-3">Course Title</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.enrolledStudentsData.map((item, index) => (
              <tr key={index} className="border-b border-cyan-300/10 hover:bg-white/10 transition">
                <td className="px-4 py-3 text-center hidden sm:table-cell text-cyan-200">{index + 1}</td>
                <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                  <img src={item.student.imageUrl} alt="profile" className="w-10 h-10 rounded-full border-2 border-cyan-400"/>
                  <span className="truncate text-cyan-100 font-medium">{item.student.name}</span>
                </td>
                <td className="px-4 py-3 truncate text-cyan-200">{item.courseTitle}</td>
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

export default Dashboard;
