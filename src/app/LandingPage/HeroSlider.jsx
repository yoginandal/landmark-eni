import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  FileText,
  Info,
  Library,
  Globe,
} from "lucide-react";
import { cn } from "../../lib/utils";
import WordFadeIn from "../../components/ui/word-fade-in";
import WordPullUp from "../../components/ui/word-pull-up";

// --- Data for the slides ---
const slides = [
  {
    title: "Your Gateway to Middle East Careers",
    subtitle:
      "Connecting Indian professionals with premier opportunities across UAE, Saudi Arabia, Qatar, and beyond. Your dream career awaits.",
    ctaText: "Explore Opportunities",
    bgImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2000&auto=format&fit=crop&q=80", // Dubai skyline
  },
  {
    title: "Seamless Immigration Services",
    subtitle:
      "Expert visa processing, work permits, and documentation support. We handle the complexities while you focus on your future.",
    ctaText: "Start Your Journey",
    bgImage:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=2000&auto=format&fit=crop&q=80", // Middle East business professionals
  },
  {
    title: "Trusted by Thousands of Indian Professionals",
    subtitle:
      "From application to arrival, our dedicated team ensures a smooth transition to your new life in the Middle East.",
    ctaText: "Get Started Today",
    bgImage:
      "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=2000&auto=format&fit=crop&q=80", // Airport/Travel scene
  },
];

// --- Data for the features ---
const features = [
  {
    icon: <FileText size={28} className="text-red-600" />,
    title: "Online Visa Application",
    description: "A streamlined, secure online portal for all your visa needs.",
    href: "#",
  },
  {
    icon: <Info size={28} className="text-red-600" />,
    title: "Visa Information",
    description:
      "Access detailed requirements and FAQs for all visa categories.",
    href: "#",
  },
  {
    icon: <Library size={28} className="text-red-600" />,
    title: "Immigration Resources",
    description: "Utilize our comprehensive guides and document checklists.",
    href: "#",
  },
  {
    icon: <Globe size={28} className="text-red-600" />,
    title: "Online Passport Services",
    description: "Apply for or renew your passport from anywhere, anytime.",
    href: "#",
  },
];

export default function ImmigrationHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setSlideKey((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setSlideKey((prev) => prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setSlideKey((prev) => prev + 1);
  };

  return (
    <div className="relative bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[700px] lg:h-[90vh] w-full flex items-center justify-center text-white overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {slides.map((s, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
                index === currentSlide ? "opacity-100" : "opacity-0"
              )}
              style={{ backgroundImage: `url(${s.bgImage})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WordPullUp
                words={slides[currentSlide].title}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
              />

              <div className="mt-6 max-w-3xl mx-auto">
                <WordFadeIn
                  words={slides[currentSlide].subtitle}
                  delay={0.08}
                  className="text-lg md:text-xl text-gray-200 leading-relaxed"
                />
              </div>

              <motion.a
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="mt-10 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-xl hover:bg-red-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {slides[currentSlide].ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 z-20 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft
            size={28}
            className="group-hover:-translate-x-0.5 transition-transform duration-300"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 z-20 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight
            size={28}
            className="group-hover:translate-x-0.5 transition-transform duration-300"
          />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setSlideKey((prev) => prev + 1);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </section>

      {/* Overlapping Features Section */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.a
              key={feature.title}
              href={feature.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="group block bg-white rounded-xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-red-500/20 border border-gray-100"
            >
              <motion.div
                className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6 transition-transform duration-300 group-hover:scale-110"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
              <div className="mt-6 font-semibold text-red-600 flex items-center">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Add some padding at the bottom of the whole component */}
      <div className="h-32 bg-gray-100"></div>
    </div>
  );
}
