import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// You must install react-slick and its carousel CSS
// npm install react-slick slick-carousel

// Custom Arrow Components for the Slider
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow absolute top-1/2 right-[-25px] md:right-[-50px] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-red-600/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
        <ChevronRight className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow absolute top-1/2 left-[-25px] md:left-[-50px] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-red-600/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
        <ChevronLeft className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

// Partner data with publicly available SVG logos
const partners = [
  {
    name: "Microsoft",
    logo: "https://www.svgrepo.com/show/303144/microsoft-logo.svg",
  },
  { name: "Adobe", logo: "https://www.svgrepo.com/show/303173/adobe-logo.svg" },
  {
    name: "Netflix",
    logo: "https://www.svgrepo.com/show/303126/netflix-2-logo.svg",
  },
  {
    name: "Spotify",
    logo: "https://www.svgrepo.com/show/303108/spotify-1-logo.svg",
  },
  { name: "Amazon", logo: "https://www.svgrepo.com/show/3031 Amazon-logo.svg" },
  {
    name: "Google",
    logo: "https://www.svgrepo.com/show/303107/google-logo.svg",
  },
  { name: "Slack", logo: "https://www.svgrepo.com/show/303115/slack-logo.svg" },
  {
    name: "HubSpot",
    logo: "https://www.svgrepo.com/show/303244/hubspot-logo.svg",
  },
];

const stats = [
  { value: "100+", label: "Partner Companies" },
  { value: "50+", label: "Industry Sectors" },
  { value: "95%", label: "Client Success Rate" },
  { value: "24/7", label: "Support Available" },
];

const PartnerCard = ({ logo, name }) => (
  <div className="px-3">
    <div className="h-32 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 flex items-center justify-center p-6 transition-all duration-300 group-hover:bg-gray-800">
      <img
        src={logo}
        alt={name}
        className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
      />
    </div>
  </div>
);

export default function PartnersSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

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
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We are proud to partner with industry leaders across the globe to
            deliver exceptional and reliable service.
          </p>
        </motion.div>

        {/* Partner Logo Slider */}
        <div className="relative group">
          <Slider {...sliderSettings}>
            {partners.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </Slider>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
