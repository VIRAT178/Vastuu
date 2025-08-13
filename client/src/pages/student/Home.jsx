import React from 'react';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import CoursesSection from '../../components/student/CoursesSection';
import TestonomilsSection from '../../components/student/TestonomilsSection';
import CallToAction from '../../components/student/CallToAction';
import Footer from '../../components/student/Footer';

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-10 text-center w-full bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-800">
      <Hero/>
      <Companies/>
      <CoursesSection/>
      <TestonomilsSection/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default Home;
