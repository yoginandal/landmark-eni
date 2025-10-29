import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Reusable Animated Counter Component (no changes needed)
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
}

const stats = [
  {
    value: 4000,
    label: "Happy Clients",
    suffix: "+",
    description: "Across 70+ countries worldwide",
  },
  {
    value: 3000,
    label: "Visas Processed",
    suffix: "+",
    description: "With a 99.8% success rate",
  },
  {
    value: 70,
    label: "Countries Coverage",
    suffix: "+",
    description: "Extensive global network reach",
  },
  {
    value: 30,
    label: "Years of Experience",
    suffix: "+",
    description: "Combined industry expertise",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-size-[30px_30px] opacity-20 pointer-events-none" />
      {/* Soft background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of clients and partners across the globe for
            our commitment and results.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/80 transition-shadow duration-300 hover:shadow-2xl shadow-lg"
              >
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-red-600">{stat.suffix}</span>
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-800 mb-6">
            Ready to join thousands of satisfied clients?
          </p>
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center px-8 py-4 bg-linear-to-r from-red-600 to-red-700 text-white font-bold rounded-lg shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-600/60 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
