import React from "react";
import { motion } from "framer-motion";
import Marquee from "../../components/ui/marquee";

// Placeholder partner logos - these would be replaced with actual logo images
const partners = [
  {
    name: "Riyadh Air",
    logo: "https://via.placeholder.com/200x80/3b82f6/ffffff?text=Riyadh+Air",
  },
  {
    name: "Sela",
    logo: "https://via.placeholder.com/200x80/8b5cf6/ffffff?text=Sela",
  },
  {
    name: "National Space Company",
    logo: "https://via.placeholder.com/200x80/10b981/ffffff?text=NSC",
  },
  {
    name: "Saudi Aramco",
    logo: "https://via.placeholder.com/200x80/f59e0b/ffffff?text=Aramco",
  },
  {
    name: "NEOM",
    logo: "https://via.placeholder.com/200x80/ef4444/ffffff?text=NEOM",
  },
  {
    name: "Stregis",
    logo: "https://via.placeholder.com/200x80/06b6d4/ffffff?text=Stregis",
  },
  {
    name: "Dubai Holding",
    logo: "https://via.placeholder.com/200x80/ec4899/ffffff?text=Dubai+Holding",
  },
  {
    name: "Qatar Airways",
    logo: "https://via.placeholder.com/200x80/6366f1/ffffff?text=Qatar+Airways",
  },
];

const PartnerCard = ({ partner }) => (
  <div className="group relative w-[250px] mx-4">
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-32 flex items-center justify-center">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-w-full max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
      />
    </div>
  </div>
);

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with industry leaders across the Middle East to deliver
            exceptional service
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* First row - moving right */}
          <Marquee className="py-4" pauseOnHover>
            {partners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </Marquee>

          {/* Second row - moving left */}
          <Marquee className="py-4" reverse pauseOnHover>
            {partners.map((partner) => (
              <PartnerCard key={`reverse-${partner.name}`} partner={partner} />
            ))}
          </Marquee>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Industry Sectors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
