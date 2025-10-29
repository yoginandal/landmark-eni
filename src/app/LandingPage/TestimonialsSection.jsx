import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Khalaf Alshabib",
    company: "Riyadh Air",
    role: "Operations Manager",
    content:
      "I would like to express my sincere appreciation for your exceptional effort and dedication in handling the matter. Your commitment and hard work have been truly remarkable, and we are extremely grateful for your contributions.",
    rating: 5,
    image:
      "https://ui-avatars.com/api/?name=Khalaf+Alshabib&size=200&background=3b82f6&color=fff",
  },
  {
    name: "Sulaiman Alshuwaib",
    company: "Sela Stregis",
    role: "HR Director",
    content:
      "I would like to express our heartfelt appreciation for the dedication and efforts you have put into the Musleh application. Your commitment on this journey will not go unnoticed, and your contributions are truly valued.",
    rating: 5,
    image:
      "https://ui-avatars.com/api/?name=Sulaiman+Alshuwaib&size=200&background=8b5cf6&color=fff",
  },
  {
    name: "Hassan Alzahrani",
    company: "National Space Company",
    role: "Project Lead",
    content:
      "This is amazing and super fast service!! Thank you very much Landmark ENI Team. The professionalism and efficiency exceeded all our expectations.",
    rating: 5,
    image:
      "https://ui-avatars.com/api/?name=Hassan+Alzahrani&size=200&background=10b981&color=fff",
  },
  {
    name: "Hans Juergen Gerhards",
    company: "Riyadh Air",
    role: "Recruitment Specialist",
    content:
      "I appreciate the exceptional attention and service very much, and I recommend the excellent visa service for further recruitment. The team's dedication to quality is outstanding.",
    rating: 5,
    image:
      "https://ui-avatars.com/api/?name=Hans+Gerhards&size=200&background=f59e0b&color=fff",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across the Middle East
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="relative h-[500px] md:h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 h-full border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start h-full">
                    {/* Quote Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full border-4 border-blue-100"
                        />
                        <div>
                          <div className="font-bold text-gray-900 text-lg">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-gray-600">
                            {testimonials[currentIndex].role}
                          </div>
                          <div className="text-sm text-blue-600 font-semibold">
                            {testimonials[currentIndex].company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 p-3 rounded-full bg-white shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 group z-20"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 p-3 rounded-full bg-white shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 group z-20"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
