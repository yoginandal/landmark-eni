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
      "We deliver top-tier system support services through experienced professionals, ensuring flexibility and timely execution for all your administrative needs.",
    href: "/services/admin-support",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Plane,
    title: "International Visa Assistance",
    description:
      "Expert visa assistance for UK, USA, and Schengen countries, ensuring smooth application processes tailored to individual and corporate needs.",
    href: "/services/international-visa",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: UserCheck,
    title: "HR Support Services",
    description:
      "Comprehensive HR solutions from developing strategies to outsourcing full HR functions, empowering businesses to streamline their operations.",
    href: "/services/hr-support",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Lightbulb,
    title: "General Consultancy & Advisory",
    description:
      "Expert consultancy and tailored advisory services to help businesses navigate complex challenges and optimize their growth strategies.",
    href: "/services/consultancy",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function KeyServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Our Key Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional services designed to support your business growth and
            operational excellence
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
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative">
                  {/* Animated icon background */}
                  <motion.div
                    className="relative inline-block mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                    />
                    <div
                      className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read more link */}
                  <a
                    href={service.href}
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
