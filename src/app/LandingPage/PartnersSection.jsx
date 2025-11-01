import React from "react";
import { Globe } from "lucide-react";

// Middle East focused country flags - primary destinations for Landmark ENI
const countryPartners = [
  {
    name: "Saudi Arabia",
    logo: "https://flagcdn.com/w320/sa.png",
  },
  {
    name: "United Arab Emirates",
    logo: "https://flagcdn.com/w320/ae.png",
  },
  {
    name: "Qatar",
    logo: "https://flagcdn.com/w320/qa.png",
  },
  {
    name: "Oman",
    logo: "https://flagcdn.com/w320/om.png",
  },
  {
    name: "Kuwait",
    logo: "https://flagcdn.com/w320/kw.png",
  },
  {
    name: "Bahrain",
    logo: "https://flagcdn.com/w320/bh.png",
  },
  {
    name: "Jordan",
    logo: "https://flagcdn.com/w320/jo.png",
  },
  {
    name: "Lebanon",
    logo: "https://flagcdn.com/w320/lb.png",
  },
  {
    name: "Egypt",
    logo: "https://flagcdn.com/w320/eg.png",
  },
  {
    name: "Turkey",
    logo: "https://flagcdn.com/w320/tr.png",
  },
  {
    name: "Iraq",
    logo: "https://flagcdn.com/w320/iq.png",
  },
  {
    name: "Iran",
    logo: "https://flagcdn.com/w320/ir.png",
  },
  {
    name: "Pakistan",
    logo: "https://flagcdn.com/w320/pk.png",
  },
  {
    name: "Indonesia",
    logo: "https://flagcdn.com/w320/id.png",
  },
  {
    name: "Bangladesh",
    logo: "https://flagcdn.com/w320/bd.png",
  },
  {
    name: "Philippines",
    logo: "https://flagcdn.com/w320/ph.png",
  },
  {
    name: "Nepal",
    logo: "https://flagcdn.com/w320/np.png",
  },
  {
    name: "Sri Lanka",
    logo: "https://flagcdn.com/w320/lk.png",
  },
];

export default function PartnersSection() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-red-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gray-200 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* --- LEFT SIDE: STICKY HEADING --- */}
          <div className="lg:col-span-2 lg:self-stretch">
            <div className="sticky top-28 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full">
                <Globe className="w-4 h-4 text-red-700" />
                <span className="text-sm font-semibold text-red-700">
                  Middle East Specialists
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-700 leading-tight">
                Your Gateway
                <br />
                <span className="text-slate-900 font-bold">To The</span>
                <br />
                <span className="text-red-600 font-bold">Middle East</span>
                <span className="inline-block w-4 h-4 rounded-full bg-gray-500 ml-2 align-middle animate-pulse" />
              </h2>
            </div>
          </div>

          {/* --- RIGHT SIDE: SCROLLING CONTENT --- */}
          <div className="lg:col-span-3 space-y-16">
            {/* Description, Button, and Stats Section */}
            <div className="space-y-8 text-left">
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Landmark ENI specializes in Middle East work visas and
                immigration, having successfully processed{" "}
                <span className="font-bold text-red-600">
                  4,000+ applications
                </span>{" "}
                for Saudi Arabia, UAE, Qatar, Oman, Kuwait, and other GCC
                nations with{" "}
                <span className="font-bold text-red-600">
                  95% approval success
                </span>
                .
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                From{" "}
                <span className="font-bold text-gray-700">
                  work permits and employment visas
                </span>{" "}
                to business setup and family sponsorship, we provide
                comprehensive immigration solutions for professionals, skilled
                workers, and families seeking opportunities in the Middle East
                region.
              </p>
              <button className="bg-gradient-to-r from-red-600 to-gray-700 hover:from-red-700 hover:to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all px-8 py-3 rounded-lg text-base font-semibold">
                Explore Services
              </button>
              {/* === STATS SECTION: HORIZONTAL FLEX LAYOUT === */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-red-600">4,000+</div>
                  <div className="text-base text-slate-600 font-medium">
                    Visas Processed
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-red-600">95%</div>
                  <div className="text-base text-slate-600 font-medium">
                    Success Rate
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-gray-700">30+</div>
                  <div className="text-base text-slate-600 font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Country Flags Grid Section */}
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                {countryPartners.map((country, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-red-400 p-6 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative w-full h-16 flex items-center justify-center">
                      <img
                        src={country.logo}
                        alt={`${country.name} flag`}
                        className="object-contain max-w-full max-h-12 transition-all duration-300 group-hover:scale-110"
                        title={country.name}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-slate-500 text-sm">
                  Specializing in{" "}
                  <span className="font-bold text-red-600">GCC nations</span>{" "}
                  and broader Middle East region with expert knowledge of local
                  immigration laws and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
