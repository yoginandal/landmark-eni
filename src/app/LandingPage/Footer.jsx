import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import landmarkLogo from "../../assets/landmark_logo.png";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ],
  services: [
    { name: "Visa Services - KSA", href: "#visa-ksa" },
    { name: "Visa Services - UAE", href: "#visa-uae" },
    { name: "Visa Services - Qatar", href: "#visa-qatar" },
    { name: "Visa Services - Oman", href: "#visa-oman" },
    { name: "Work Permits", href: "#work-permits" },
    { name: "Recruitment Services", href: "#recruitment" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#facebook", label: "Facebook" },
  { icon: Instagram, href: "#instagram", label: "Instagram" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Youtube, href: "#youtube", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-red-900/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={landmarkLogo}
              alt="Landmark ENI"
              className="h-16 mb-6 object-contain brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for Middle East visa and immigration
              services. Empowering global mobility with expertise and
              dedication.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-slate-900 border border-red-900/30 rounded-lg hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-red-600 mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-red-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-red-600 mr-3"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-red-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-red-600 mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#location"
                  className="flex items-start gap-3 text-gray-400 hover:text-red-400 transition-colors group"
                >
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-red-500" />
                  <span>Dubai, United Arab Emirates</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@landmarkeni.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span>info@landmarkeni.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+97150XXXXXXX"
                  className="flex items-start gap-3 text-gray-400 hover:text-red-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-red-500" />
                  <div>
                    <div>+971 50 XXX XXXX</div>
                    <div className="text-sm text-gray-500">(Middle East)</div>
                  </div>
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-slate-900 border border-red-900/30 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300 text-white font-medium text-sm shadow-lg hover:shadow-red-500/50"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Landmark ENI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
