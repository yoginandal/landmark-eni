import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Settings,
  Plane,
  UserCheck,
  Lightbulb,
} from "lucide-react";

const keyServices = [
  {
    icon: Settings,
    title: "Admin Support Services",
    description:
      "Top-tier system support from experienced professionals, ensuring flexibility and timely execution for all your administrative needs.",
    href: "/services/admin-support",
  },
  {
    icon: Plane,
    title: "International Visa Assistance",
    description:
      "Expert visa assistance for the UK, USA, and Schengen regions, ensuring a smooth and efficient application process.",
    href: "/services/international-visa",
  },
  {
    icon: UserCheck,
    title: "HR Support Services",
    description:
      "Comprehensive HR solutions, from developing strategies to outsourcing full HR functions, empowering your business to thrive.",
    href: "/services/hr-support",
  },
  {
    icon: Lightbulb,
    title: "General Consultancy & Advisory",
    description:
      "Tailored advisory services to help businesses navigate complex challenges and optimize their long-term growth strategies.",
    href: "/services/consultancy",
  },
];

export default function KeyServices() {
  return (
    <section className="relative py-24 bg-linear-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-red-800 bg-red-950/50 text-red-400 rounded-full text-sm font-semibold mb-6">
            Our Key Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional services designed to support your business growth,
            streamline operations, and ensure compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group relative h-full"
              >
                {/* Border Glow Effect on Hover */}
                <div className="absolute -inset-px bg-linear-to-r from-red-600 to-red-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative h-full bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 border border-gray-700 group-hover:border-red-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read more link */}
                  <a
                    href={service.href}
                    className="inline-flex items-center text-red-500 font-semibold group-hover:text-red-400 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
