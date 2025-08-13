import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets.js";

const TestonomilsSection = () => {
  return (
    <div className="relative pb-16 pt-10 px-4 md:px-10 xl:px-24 bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-800 rounded-2xl shadow-2xl overflow-hidden w-full">
      {/* Accent blur circles */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-60px] right-1/4 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="relative z-10 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Testimonials
        </h2>
        <p className="md:text-base text-cyan-100 max-w-xl mx-auto font-medium">
          Discover inspiring stories from our learners as they reveal their
          achievements, growth, and the life-changing impact of our platform.
        </p>
      </div>

      <div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                   gap-4 md:gap-6 xl:gap-8 mx-auto"
      >
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm bg-white/10 backdrop-blur-xl border border-cyan-300/40 rounded-xl shadow-lg
                       transition transform hover:scale-105 hover:shadow-cyan-300/30 hover:border-cyan-400
                       flex flex-col min-h-[200px] md:min-h-[220px] max-w-xs mx-auto
                       group"
          >
            <div className="flex items-center gap-3 px-4 py-3 bg-white/30 backdrop-blur-lg border-b border-cyan-200/10 rounded-t-xl">
              <img
                className="h-9 w-9 rounded-full border-2 border-cyan-300/80 group-hover:border-purple-300 transition"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <div className="font-semibold text-white text-base">
                  {testimonial.name}
                </div>
                <div className="text-cyan-200 text-xs">{testimonial.role}</div>
              </div>
            </div>

            <div className="px-4 py-3 flex-1 flex flex-col">
              <div className="flex gap-0.5 mb-2 group-hover:scale-105 group-hover:drop-shadow-md transition origin-left">
                {[...Array(5)].map((_, i) => (
                  <img
                    className={
                      "h-4 " +
                      (i < Math.round(testimonial.rating) ? "animate-pulse" : "")
                    }
                    key={i}
                    src={
                      i < Math.round(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-cyan-100/90 text-xs mt-1">
                {testimonial.feedback}
              </p>
            </div>

            <a
              className="inline-block text-cyan-300 px-4 pb-2 font-medium underline decoration-dotted decoration-[2px] text-xs hover:text-white transition
                         hover:decoration-solid hover:scale-105"
              href="#"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestonomilsSection;
