import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button"; // Adjusted path
import { Badge } from "../../components/ui/badge"; // Adjusted path
import { cn } from "../../lib/utils"; // Adjusted path

// --- Data for the slides ---
const slides = [
  {
    badge: "Excellence in Education",
    title: "Empowering Tomorrow's Innovators",
    highlight: "Today",
    subtitle: "Join a community of achievers shaping the future",
    stats: { value: "95%", label: "Placement Success" },
    ctaText: "Start Your Journey",
    bgImage:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=2000&auto=format&fit=crop&q=80",
  },
  {
    badge: "World-Class Infrastructure",
    title: "Modern Facilities for Future",
    highlight: "Leaders",
    subtitle: "State-of-the-art learning environments designed for excellence",
    stats: { value: "500+", label: "Industry Partners" },
    ctaText: "Explore Campus",
    bgImage:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=2000&auto=format&fit=crop&q=80",
  },
  {
    badge: "Industry Integration",
    title: "An Industry Integrated Learning",
    highlight: "Campus",
    subtitle: "Bridge the gap between education and professional success",
    stats: { value: "#1", label: "Ranked Institution" },
    ctaText: "Apply Now",
    bgImage:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=2000&auto=format&fit=crop&q=80",
  },
];

export default function EducationHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative h-[95vh] min-h-[700px] w-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-1000",
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.bgImage})` }}
            />
            <div className="absolute inset-0 bg-linear-to-br from-slate-950/80 via-slate-950/50 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 md:left-8 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </Button>
      <Button
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 md:right-8 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </Button>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            {/* Badge */}
            <div
              className={cn(
                "inline-block transition-all duration-700",
                "animate-in fade-in slide-in-from-bottom-4"
              )}
            >
              <Badge
                variant="outline"
                className="px-4 py-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                {slide.badge}
              </Badge>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white drop-shadow-2xl">
                  {slide.title}
                </span>
                <span className="block bg-linear-to-r from-emerald-400 via-emerald-500 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
                  {slide.highlight}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Stats Card */}
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <div className="text-5xl md:text-6xl font-bold bg-linear-to-br from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                {slide.stats.value}
              </div>
              <div className="border-l border-white/20 pl-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">
                  {slide.stats.label}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 px-8 h-12 md:h-14 text-base md:text-lg"
              >
                {slide.ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all px-8 h-12 md:h-14 text-base md:text-lg"
              >
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "transition-all duration-300 rounded-full",
              index === currentSlide
                ? "w-8 h-2 bg-linear-to-r from-emerald-400 to-amber-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
