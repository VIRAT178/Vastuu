import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/student/Footer";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";

const CourseDetails = () => {
  const [openSection, setOpenSection] = useState({});
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const {
    allCourses,
    calculateRating,
    calculateNumberOfLecture,
    calculateCourseDuration,
    calculateChapterTime,
    currency,
  } = useContext(AppContext);

  const fetcCourseData = () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetcCourseData();
  }, [allCourses]);

  const toggleFunction = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return courseData ? (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-800 pt-20 md:pt-28">
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 flex md:flex-row flex-col-reverse gap-10 md:px-36 px-6 text-left text-cyan-50">
          <div className="max-w-3xl">
            <h1 className="md:text-4xl text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
              {courseData.courseTitle}
            </h1>
            <p
              className="pt-4 md:text-base text-sm text-cyan-100/90"
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription.slice(0, 200),
              }}
            ></p>

            <div className="flex flex-wrap items-center gap-3 mb-4 pt-3 pb-1 text-sm">
              <span className="font-medium text-cyan-300">
                {calculateRating(courseData).toFixed(1)}
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="w-4 h-4"
                    key={i}
                    src={
                      i < Math.floor(calculateRating(courseData))
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                  />
                ))}
              </div>
              <span className="text-cyan-200 text-xs ml-1">
                ({courseData.courseRatings.length}{" "}
                {courseData.courseRatings.length !== 1 ? "ratings" : "rating"})
              </span>
              <span className="text-cyan-200 text-xs">
                • {courseData.enrolledStudents.length}{" "}
                {courseData.enrolledStudents.length !== 1
                  ? "Students"
                  : "Student"}
              </span>
            </div>

            <p className="text-sm text-cyan-200 mb-6">
              Course by <span className="text-cyan-300 underline">Vishal</span>
            </p>

            <h2 className="text-xl font-semibold mb-3 text-white">
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
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none hover:bg-white/5 transition"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className={`transition-transform ${
                          openSection[index] ? "rotate-180" : ""
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
                      openSection[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-cyan-100/80 border-t border-cyan-300/10">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1">
                          <img
                            src={assets.play_icon}
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
                                      videoId: lecture.lectureUrl
                                        .split("/")
                                        .pop(),
                                    })
                                  }
                                  className="text-cyan-300 hover:text-white cursor-pointer"
                                >
                                  Preview
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

            <div className="py-10">
              <h3 className="text-xl font-semibold text-white">
                Course Description
              </h3>
              <p
                className="pt-3 text-cyan-100/90 rich-text"
                dangerouslySetInnerHTML={{
                  __html: courseData.courseDescription,
                }}
              ></p>
            </div>
          </div>

          <div className="w-full md:w-[380px] bg-white/10 backdrop-blur-lg border border-cyan-400/30 rounded-xl shadow-xl overflow-hidden">
            {playerData ? (
              <YouTube
                videoId={playerData.videoId}
                opts={{
                  playerVars: {
                    autoplay: 1,
                  },
                }}
                iframeClassName="w-full aspect-video"
              />
            ) : (
              <img
                src={courseData.courseThumbnail}
                alt=""
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <img
                  className="w-3.5"
                  src={assets.time_left_clock_icon}
                  alt="clock"
                />

                <p className="text-red-300">
                  <span className="font-medium">7 days</span> left at this price
                </p>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-white text-3xl font-semibold">
                  {currency}
                  {(
                    courseData.coursePrice -
                    (courseData.discount * courseData.coursePrice) / 100
                  ).toFixed(2)}
                </p>
                <p className="text-cyan-200 line-through">
                  {currency}
                  {courseData.coursePrice}
                </p>
                <p className="text-green-300">{courseData.discount}% off</p>
              </div>

              <div className="flex items-center text-sm gap-4 pt-4 text-cyan-100">
                <div className="flex items-center gap-1">
                  <img src={assets.star} alt="star" />
                  <p>{calculateRating(courseData)}</p>
                </div>
                <div className="h-4 w-px bg-cyan-400/30"></div>
                <div className="flex items-center gap-1">
                  <img src={assets.time_clock_icon} alt="clock" />
                  <p>{calculateCourseDuration(courseData)}</p>
                </div>
                <div className="h-4 w-px bg-cyan-400/30"></div>
                <div className="flex items-center gap-1">
                  <img src={assets.lesson_icon} alt="lessons" />
                  <p>{calculateNumberOfLecture(courseData)} lessons</p>
                </div>
              </div>

              <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-medium shadow-lg hover:scale-[1.02] active:scale-95 transition">
                {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
              </button>

              <div className="pt-6">
                <p className="text-lg font-medium text-cyan-100">
                  What's in the course
                </p>
                <ul className="ml-4 pt-2 list-disc text-cyan-200 text-sm space-y-1">
                  <li>Lifetime access with free updates.</li>
                  <li>Step-by-step, hands-on project guidance.</li>
                  <li>Downloadable resources and source code.</li>
                  <li>Quizzes to test your knowledge.</li>
                  <li>Certificate of completion.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
