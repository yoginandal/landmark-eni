import React from "react";
import { motion } from "framer-motion";
import WordPullUp from "../../components/ui/word-pull-up";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Updated highlights to focus on the numbers
const highlights = [
  {
    number: "70+",
    title: "Countries with a Global Network",
  },
  {
    number: "30+",
    title: "Years of Combined Experience",
  },
  {
    number: "4,000+",
    title: "Successful Visa Applications",
  },
];

const features = [
  "Comprehensive visa processing services",
  "Expert guidance on immigration requirements",
  "Fast and efficient document processing",
  "Corporate governance & compliance support",
  "Strategic offices across key global hubs",
];

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-linear-to-br from-red-950/50 to-black rounded-full blur-[150px] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 border border-red-800 bg-red-950/50 text-red-400 rounded-full text-sm font-semibold mb-6"
              >
                About Landmark ENI
              </motion.span>

              <WordPullUp
                words="Empowering Global Mobility With Decades of Expertise"
                className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Landmark ENI is your trusted partner for corporate solutions, from
              global mobility and visa processing to government relations and
              recruitment. With a network spanning over 70 countries, we have
              the world covered.
            </motion.p>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/about-us"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="group inline-flex items-center px-8 py-4 bg-linear-to-r from-red-700 to-red-800 text-white font-bold rounded-lg shadow-lg shadow-red-900/40 hover:shadow-xl hover:shadow-red-800/60 hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Right Content - Highlights Cards */}
          <div className="relative">
            <div className="space-y-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-red-500 to-red-700">
                        {highlight.number}
                      </p>
                    </div>
                    <div className="border-l border-gray-700 pl-6">
                      <h3 className="text-lg font-semibold text-white">
                        {highlight.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
