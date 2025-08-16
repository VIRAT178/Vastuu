import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { data, useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";
import Loading from "../../components/student/Loading";
import axios from "axios";
import { toast } from "react-toastify";

const Player = () => {
  const {
    enrolledCorses,
    calculateChapterTime,
    backendUrl,
    getToken,
    userData,
    fetchUserEnrolledCourses,
  } = useContext(AppContext);
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [progresData, setProgresData] = useState(null);
  const [initialRating, setInitialRating] = useState(0);

  const getCourseData = () => {
    enrolledCorses.find((course) => {
      if (course._id === courseId) {
        setCourseData(course);
        (course.courseRating || []).forEach((item) => {
          if (item.userId === userData._id) {
            setInitialRating(item.rating);
          }
        });
      }
    });
  };

  const toggleFunction = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (enrolledCorses.length > 0) {
      getCourseData();
    }
  }, [enrolledCorses]);

  const markAsCompleted = async (lectureId) => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + "/api/user/update-course-progress",
        { courseId, lectureId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        toast.success(data.message);
        userCourseProgress();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const userCourseProgress = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + "/api/user/get-course-progress",
        { courseId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        setProgresData(data.progressData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRate = async (rating) => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + "/api/user/add-rating",
        { courseId, rating },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        toast.success(data.message);
        fetchUserEnrolledCourses();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    userCourseProgress();
  }, []);
  return courseData ? (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-950 px-6 md:px-2 py-0 pt-20">
        <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full -z-10"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full -z-10"></div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-cyan-50">
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Course Structure
            </h2>
            <div className="space-y-3">
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-cyan-400/20 bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
                >
                  <div
                    onClick={() => toggleFunction(index)}
                    className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-white/5 transition"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className={`transition-transform ${
                          openSections[index] ? "rotate-180" : ""
                        }`}
                        src={assets.down_arrow_icon}
                        alt="arrow"
                      />
                      <p className="font-medium">{chapter.chapterTitle}</p>
                    </div>
                    <p className="text-sm text-cyan-200">
                      {chapter.chapterContent.length} lectures •{" "}
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSections[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-cyan-100/80 border-t border-cyan-300/10">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1">
                          <img
                            src={
                              progresData &&
                              progresData.lectureCompleted.includes(
                                lecture.lectureId
                              )
                                ? assets.blue_tick_icon
                                : assets.play_icon
                            }
                            alt="playicon"
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full text-xs md:text-sm">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.isPreviewFree && (
                                <p
                                  onClick={() =>
                                    setPlayerData({
                                      ...lecture,
                                      chapter: index + 1,
                                      lecture: i + 1,
                                    })
                                  }
                                  className="text-cyan-300 hover:text-white cursor-pointer"
                                >
                                  Watch
                                </p>
                              )}
                              <p>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 py-3 mt-8 bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl px-4">
              <h1 className="text-lg font-semibold text-white">
                Rate this Course:
              </h1>
              <Rating initialRating={initialRating} onRate={handleRate} />
            </div>
          </div>

          <div className="md:mt-0 mt-6">
            {playerData ? (
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg">
                <YouTube
                  videoId={playerData.lectureUrl.split("/").pop()}
                  iframeClassName="w-full aspect-video rounded-lg"
                />
                <div className="flex justify-between items-center mt-3 text-cyan-50">
                  <p className="text-sm">
                    {playerData.chapter}.{playerData.lecture}{" "}
                    {playerData.lectureTitle}
                  </p>
                  <button
                    onClick={() => markAsCompleted(playerData.lectureId)}
                    className="text-sm px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:scale-105 transition"
                  >
                    {progresData &&
                    progresData.lectureCompleted.includes(playerData.lectureId)
                      ? "Completed"
                      : "Mark Complete"}
                  </button>
                </div>
              </div>
            ) : (
              <img
                src={courseData.courseThumbnail}
                alt=""
                className="rounded-xl shadow-lg border border-cyan-300/20"
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Player;
