import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Top Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert visa and immigration services for the Middle East's leading
            business destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <motion.a
              key={destination.name}
              href={destination.href}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div className="relative h-96 overflow-hidden">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                    Visa Services
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {destination.name}
                </h3>

                <p className="text-gray-200 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
