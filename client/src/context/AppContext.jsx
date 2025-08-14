import { createContext, useEffect, useState } from "react";
import { DummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import {useAuth , useUser} from '@clerk/clerk-react'

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([]);
  const [enrolledCorses, setEnrolledCourses] = useState([]);
  const [isEducator, setIsEductor] = useState(true);
  const naviagte = useNavigate();

  const {getToken} = useAuth()
  const {user} = useUser()

  const fetchAllCourses = async () => {
    setAllCourses(DummyCourses);  
  };

  const calculateRating = (course) => {
    if (
      !Array.isArray(course.courseRatings) ||
      course.courseRatings.length === 0
    ) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => {
      time += lecture.lectureDuration;
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) => {
      chapter.chapterContent.map(
        (lecture) => (time += lecture.lectureDuration)
      );
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateNumberOfLecture = (course)=>{
      let totalLectures = 0 
      course.courseContent.forEach(chapter=>{
        if (Array.isArray(chapter.chapterContent)) {
          totalLectures += chapter.chapterContent.length
        }
      })
      return totalLectures;
  }

  const fetchUserEnrolledCourses = async () => {
       setEnrolledCourses(DummyCourses)
  }

  useEffect(() => {
    fetchAllCourses();
   fetchUserEnrolledCourses()
  }, []);

  const callUpdateRole = async () => {
  const token = await getToken();
  console.log(token);
}

  useEffect(()=>{
   if(user){
    callUpdateRole()
   }
  },[user])

  const value = {
    currency,
    allCourses,
    naviagte,
    calculateRating,
    isEducator,
    setIsEductor,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNumberOfLecture,
    enrolledCorses,
    fetchUserEnrolledCourses,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
