import { MapPin, Mail, Phone } from "lucide-react";
import Drawer from "./Drawer"; // Adjust this path based on your project structure
import ssimLogo from "../../assets/landmark_logo.png"; // Example for importing the logo

export default function BannerNav() {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm block">
      <div className="mx-auto flex justify-between sm:items-center">
        <div className="flex items-center space-x-4">
          <a href="/">
            <img
              src={ssimLogo}
              alt="Indo Global Group of Colleges"
              className="h-12 sm:h-16 object-contain"
            />
          </a>
        </div>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex text-black justify-end sm:items-center space-x-4">
            <a href="#location" className="flex items-center">
              <MapPin size={16} className="text-blue-800 mr-1" />
              <span>Dubai, United Arab Emirates</span>
            </a>
            <a href="mailto:info@landmarkeni.com" className="flex items-center">
              <Mail size={16} className="text-blue-800 mr-1" />
              <span>info@landmarkeni.com</span>
            </a>
            <a href="tel:+97150XXXXXXX" className="flex items-center">
              <Phone size={16} className="text-blue-800 mr-1" />
              <span>+971 50XXX XXXX</span>
            </a>
          </div>
          <Drawer className="text-black bg-black" />
        </div>
      </div>
    </div>
  );
}
