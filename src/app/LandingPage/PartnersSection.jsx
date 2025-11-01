import React from "react";
import { Building2 } from "lucide-react";
// Assuming you have a local Button component
// import { Button } from "./Button";

// Using publicly accessible logo URLs
const companyLogos = [
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
  {
    name: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
  {
    name: "Deloitte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/2560px-Logo_of_Deloitte.svg.png",
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    name: "Toshiba",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/2560px-Toshiba_logo.svg.png",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg",
  },
  {
    name: "LG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg",
  },
];

export default function PartnersSection() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-green-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-yellow-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* --- LEFT SIDE: STICKY HEADING --- */}
          <div className="lg:col-span-2 lg:self-stretch">
            <div className="sticky top-28 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                <Building2 className="w-4 h-4 text-green-700" />
                <span className="text-sm font-semibold text-green-700">
                  Placement Partners
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-700 leading-tight">
                Work With
                <br />
                <span className="text-slate-900 font-bold">Our Best</span>
                <br />
                <span className="text-green-600 font-bold">Recruiters</span>
                <span className="inline-block w-4 h-4 rounded-full bg-yellow-500 ml-2 align-middle animate-pulse" />
              </h2>
            </div>
          </div>

          {/* --- RIGHT SIDE: SCROLLING CONTENT --- */}
          <div className="lg:col-span-3 space-y-16">
            {/* Description, Button, and Stats Section */}
            <div className="space-y-8 text-left">
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Over the period of 5 batches, more than{" "}
                <span className="font-bold text-green-600">200 recruiters</span>{" "}
                have participated in on-campus & off-campus processes and
                selected{" "}
                <span className="font-bold text-green-600">
                  90% of the eligible
                </span>{" "}
                students.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                There is an addition of{" "}
                <span className="font-bold text-yellow-600">
                  35+ organisations
                </span>{" "}
                every year over a plethora of sectors who are invited to our
                campus for recruitment.
              </p>
              <button className="bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600 text-white shadow-xl hover:shadow-2xl transition-all px-8 py-3 rounded-lg text-base font-semibold">
                Learn More
              </button>
              {/* === STATS SECTION: UPDATED TO HORIZONTAL FLEX LAYOUT === */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-green-600">200+</div>
                  <div className="text-base text-slate-600 font-medium">
                    Recruiters
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-green-600">90%</div>
                  <div className="text-base text-slate-600 font-medium">
                    Placement Rate
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-yellow-600">35+</div>
                  <div className="text-base text-slate-600 font-medium">
                    New Companies Annually
                  </div>
                </div>
              </div>
            </div>

            {/* Logos Grid Section */}
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                {companyLogos.map((company, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-green-400 p-6 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative w-full h-16">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-slate-500 text-sm">
                  And{" "}
                  <span className="font-bold text-green-600">many more</span>{" "}
                  leading companies across various sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
