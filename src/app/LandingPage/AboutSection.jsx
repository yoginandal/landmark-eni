import React from "react";
import { motion } from "framer-motion";
import WordPullUp from "../../components/ui/word-pull-up";
import { CheckCircle2, Globe, Users2, Award } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Operating in 70+ countries worldwide",
  },
  {
    icon: Users2,
    title: "Expert Team",
    description: "30 years of combined industry experience",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "4,000+ successful visa applications",
  },
];

const features = [
  "Comprehensive visa processing services",
  "Expert guidance on immigration requirements",
  "Fast and efficient document processing",
  "24/7 customer support availability",
  "Strategic offices across UAE, UK, Australia, India, Saudi Arabia, and Pakistan",
  "Compliance with all local regulations",
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
              >
                About Landmark ENI
              </motion.span>

              <WordPullUp
                words="Empowering Global Mobility for Over 30 Years"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Landmark ENI is your trusted partner in delivering comprehensive
              corporate solutions, covering global mobility, visa processing,
              government relations services, and recruitment services. With
              strategically positioned offices and a network spanning over 70
              countries, we have the world covered.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Whether it's visa processing for Saudi Arabia or any other country
              across the globe, preparation of Premium and Golden Visas, company
              formations, or corporate governance support - Landmark ENI is here
              to support you with confidence and expertise.
            </motion.p>

            {/* Feature List */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/about/about-us"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Content - Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 -translate-y-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
