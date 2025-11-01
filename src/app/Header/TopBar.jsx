import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";

const TopBar = () => {
  const [iconsLoaded, setIconsLoaded] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    // Animate icons one by one with a delay
    const timers = [0, 1, 2, 3, 4].map((index) =>
      setTimeout(() => {
        setIconsLoaded((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 150)
    );

    // Cleanup timeouts on component unmount
    return () => timers.forEach(clearTimeout);
  }, []);

  const socialIcons = [
    {
      icon: <Instagram className="w-4 h-4" />,
      url: "#instagram",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      url: "#linkedin",
    },
    { icon: <Youtube className="w-4 h-4" />, url: "#youtube" },
    {
      icon: <Facebook className="w-4 h-4" />,
      url: "#facebook",
    },
    { icon: <Twitter className="w-4 h-4" />, url: "#twitter" },
  ];

  return (
    <div className="hidden px-5 sm:px-8 py-3 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 md:block border-b border-slate-700">
      <div className="flex flex-wrap items-center justify-between mx-auto text-sm">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <span className="text-gray-400 font-medium">Follow us</span>
          <div className="flex gap-3">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white bg-red-600 hover:bg-red-700 rounded-full p-2 transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110 shadow-lg"
                initial={{ y: -50, opacity: 0 }}
                animate={
                  iconsLoaded[index]
                    ? { y: 0, opacity: 1 }
                    : { y: -50, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1,
                }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Marquee Announcement */}
        <div className="text-gray-300 justify-center items-center bg-slate-800/50 backdrop-blur-sm p-3 gap-2 rounded-full border border-red-600/30 shadow-lg flex max-w-xl">
          <div className="h-2 w-2 bg-red-500 rounded-full animate-ping"></div>
          <marquee className="font-semibold" behavior="scroll" direction="left">
            Welcome to Landmark ENI - Your trusted partner for Middle East visa
            and immigration services
          </marquee>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 text-gray-300">
          <a href="/services/visa-ksa">
            <button className="px-5 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
              Apply for Visa
            </button>
          </a>
          <a href="/contact-us">
            <button className="px-5 py-2 text-xs font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
