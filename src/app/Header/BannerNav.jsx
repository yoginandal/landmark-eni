import { MapPin, Mail, Phone } from "lucide-react";
import Drawer from "./Drawer"; // Adjust this path based on your project structure
import landmarkLogo from "../../assets/landmark_logo.png"; // Logo import

export default function BannerNav() {
  return (
    <div className="bg-slate-900 py-3 px-4 text-sm border-b border-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={landmarkLogo}
              alt="Landmark ENI - Immigration Services"
              className="h-12 sm:h-14 object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>

        {/* Contact Info + Drawer */}
        <div className="flex items-center gap-8">
          {/* Contact Links - Hidden on Mobile */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-300">
            <a
              href="#location"
              className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300 group"
            >
              <MapPin
                size={16}
                className="text-red-500 group-hover:text-red-400"
              />
              <span className="text-sm">Dubai, United Arab Emirates</span>
            </a>
            <a
              href="mailto:info@landmarkeni.com"
              className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300 group"
            >
              <Mail
                size={16}
                className="text-red-500 group-hover:text-red-400"
              />
              <span className="text-sm">info@landmarkeni.com</span>
            </a>
            <a
              href="tel:+97150XXXXXXX"
              className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300 group"
            >
              <Phone
                size={16}
                className="text-red-500 group-hover:text-red-400"
              />
              <span className="text-sm">+971 50 XXX XXXX</span>
            </a>
          </div>

          {/* Mobile Drawer */}
          <Drawer />
        </div>
      </div>
    </div>
  );
}
