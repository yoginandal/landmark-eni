import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Saudi Arabia",
    description:
      "Comprehensive visa services for KSA including work permits, business visas, and family sponsorship.",
    image:
      "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&auto=format&fit=crop&q=80",
    services: ["Work Visa", "Business Visa", "Family Visa", "Residence Permit"],
    href: "/services/visa-ksa",
  },
  {
    name: "United Arab Emirates",
    description:
      "Complete UAE visa solutions including Golden Visa, employment visas, and premium residence programs.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80",
    services: [
      "Golden Visa",
      "Employment Visa",
      "Business Setup",
      "Investor Visa",
    ],
    href: "/services/visa-gcc",
  },
  {
    name: "Qatar",
    description:
      "Professional visa processing for Qatar with expertise in work permits and business establishment.",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&auto=format&fit=crop&q=80",
    services: [
      "Work Permit",
      "Business Visa",
      "Family Sponsorship",
      "Residence",
    ],
    href: "/services/visa-gcc",
  },
  {
    name: "Bahrain",
    description:
      "Streamlined visa services for Bahrain covering employment, business, and residency requirements.",
    image:
      "https://images.unsplash.com/photo-1577717770508-1e19c9814810?w=800&auto=format&fit=crop&q=80",
    services: ["Work Visa", "Business Visa", "Flexi Permit", "Residence Visa"],
    href: "/services/visa-gcc",
  },
];

export default function TopDestinations() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Grid Pattern */}
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
            Top Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Where We Serve
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Expert visa and immigration services for the Middle East&apos;s
            leading business hubs and destinations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <motion.a
              key={destination.name}
              href={destination.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group relative block bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800"
            >
              {/* Top Image Section */}
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                {/* Gradient to blend image into content */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-gray-900 to-transparent" />
              </div>

              {/* Bottom Content Section */}
              <div className="p-6 pt-4">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {destination.name}
                </h3>
                <p className="text-gray-400 mb-5 leading-relaxed">
                  {destination.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-red-500 font-semibold transition-colors duration-300 group-hover:text-red-400">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-700 transition-colors duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
