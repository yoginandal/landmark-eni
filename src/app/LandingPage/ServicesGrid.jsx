import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  FileText,
  Globe2,
  Award,
  Building2,
  FileCheck,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Visa Services for KSA",
    description:
      "Comprehensive visa processing for Saudi Arabia with expert guidance and fast turnaround times.",
    href: "/services/visa-ksa",
  },
  {
    icon: Globe2,
    title: "Visa Services for GCC Countries",
    description:
      "Complete visa solutions for UAE, Qatar, Bahrain, Oman, and Kuwait with local expertise.",
    href: "/services/visa-gcc",
  },
  {
    icon: Award,
    title: "Premium & Golden Visa",
    description:
      "Specialized assistance for long-term residence and golden visa applications across the Middle East.",
    href: "/services/golden-visa",
  },
  {
    icon: Building2,
    title: "Company Formation",
    description:
      "End-to-end support for business setup, registration, and corporate structuring in GCC countries.",
    href: "/services/company-formation",
  },
  {
    icon: FileCheck,
    title: "Documents Legalization",
    description:
      "Professional document attestation, notarization, and legalization services for all official paperwork.",
    href: "/services/documents",
  },
  {
    icon: Users,
    title: "Recruitment Services",
    description:
      "Strategic talent acquisition and HR support connecting skilled professionals with Middle East opportunities.",
    href: "/services/recruitment",
  },
];

const BounceServiceCards = () => {
  const transformStyles = [
    "rotate(8deg) translate(-240px)",
    "rotate(4deg) translate(-120px)",
    "rotate(-2deg)",
    "rotate(-8deg) translate(120px)",
    "rotate(3deg) translate(240px)",
    "rotate(-4deg) translate(360px)",
  ];

  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      { scale: 0, rotation: 0, y: 50, opacity: 0 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power3.out",
        duration: 0.8,
        delay: 0.3,
      }
    );
  }, []);

  const getNoRotationTransform = (transformStr) => {
    return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    }
    return `${baseTransform} translate(${offsetX}px)`;
  };

  const pushSiblings = (hoveredIdx) => {
    services.forEach((_, i) => {
      const selector = `.service-card-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i];

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          scale: 1.08,
          zIndex: 50,
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        const offsetX = i < hoveredIdx ? -180 : 180;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);
        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.04;

        gsap.to(selector, {
          transform: pushedTransform,
          scale: 0.9,
          duration: 0.6,
          ease: "power2.out",
          delay,
        });
      }
    });
  };

  const resetSiblings = () => {
    services.forEach((_, i) => {
      const selector = `.service-card-${i}`;
      gsap.killTweensOf(selector);

      const distance = Math.abs(i - services.length / 2);
      const delay = distance * 0.03;

      gsap.to(selector, {
        transform: transformStyles[i],
        scale: 1,
        zIndex: 10 + i,
        duration: 0.7,
        ease: "power2.inOut",
        delay,
      });
    });
  };

  return (
    <div className="relative flex items-center justify-center min-h-[500px] py-12">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className={`service-card service-card-${idx} absolute w-[260px] cursor-pointer`}
              style={{
                transform: transformStyles[idx],
                zIndex: 10 + idx,
              }}
              onMouseEnter={() => pushSiblings(idx)}
              onMouseLeave={resetSiblings}
            >
              <a
                href={service.href}
                className="block bg-white rounded-3xl p-7 shadow-2xl border-4 border-white transition-all duration-500 ease-out overflow-hidden group hover:shadow-3xl"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-gray-900 to-black flex items-center justify-center shadow-lg mb-4 transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-7 h-7 text-white transition-transform duration-500 ease-out" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-semibold text-red-600 pt-2 border-t border-gray-200 transition-all duration-300 ease-out">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-2" />
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MobileServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="lg:hidden relative px-4">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="w-full flex-shrink-0 px-4">
                <a
                  href={service.href}
                  className="block bg-white rounded-3xl p-8 shadow-xl border border-gray-200 transition-all duration-300 ease-out hover:shadow-2xl hover:scale-[1.02]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-gray-900 to-black flex items-center justify-center shadow-lg mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 font-semibold text-red-600">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-gray-900" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-gray-900" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-red-600"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-linear-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-red-600 via-gray-900 to-black font-extrabold">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive immigration and corporate solutions
            tailored for your success in the Middle East, ensuring a seamless
            and professional experience.
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">
            Hover over the cards to interact with them
          </p>
        </div>

        {/* Bounce Cards */}
        <BounceServiceCards />

        {/* Mobile Auto Slider */}
        <MobileServicesSlider />
      </div>
    </section>
  );
}
