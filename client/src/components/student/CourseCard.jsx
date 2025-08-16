import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext.jsx';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency,calculateRating } = useContext(AppContext);

  return (
    <Link
      to={`/courses/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="bg-white/10 backdrop-blur-lg border border-cyan-400/30 rounded-2xl shadow-xl pb-7 overflow-hidden transition 
                 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-cyan-500/10 flex flex-col"
    >

      <img
        className="w-full h-44 object-cover rounded-t-2xl"
        src={course.courseThumbnail}
        alt={course.courseTitle}
      />

      <div className="p-4 text-left flex-1 flex flex-col justify-between">
 
        <h3 className="font-bold text-lg text-white mb-1 line-clamp-1">{course.courseTitle}</h3>

        <p className="text-cyan-200 text-sm mb-2">{course.educator?.name}</p>

        <div className="flex items-center gap-2 mb-3">
          <span className="font-medium text-cyan-300">{calculateRating(course)}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img className="w-4 h-4" key={i} src={ i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="star" />
            ))}
          </div>
          <span className="text-cyan-100 text-xs ml-2">{course.courseRatings.length || 0}</span>
        </div>

        <p className="font-bold text-xl text-cyan-200">
          {currency}
          {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
