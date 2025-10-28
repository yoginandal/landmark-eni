import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import { Button } from "../../components/ui/button";

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
    <div className="hidden px-5 sm:px-8 py-3 bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 md:block">
      <div className="flex flex-wrap items-center justify-between mx-auto text-sm">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Follow us</span>
          <div className="flex gap-3">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-50 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
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
        <div className="text-gray-600 justify-center items-center bg-slate-50 p-3 gap-2 rounded-full border-none shadow-sm flex">
          <div className="h-2 w-2 bg-pink-900 rounded-full animate-ping"></div>
          <marquee className="font-bold" behavior="scroll" direction="left">
            Welcome to Landmark ENI - Your trusted partner for Middle East visa
            and immigration services
          </marquee>
        </div>
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600">
          <a href="/services/visa-ksa">
            <Button className="text-xs text-white bg-black hover:bg-black/80">
              Apply for Visa
            </Button>
          </a>
          <a href="/contact-us">
            <Button className="text-xs text-white bg-black hover:bg-black/80">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
