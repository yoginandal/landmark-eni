import React from "react";
import { ArrowRight, FileText, Info, Library, Globe } from "lucide-react";

const features = [
  {
    icon: <FileText size={32} />,
    title: "Online Visa Application",
    description:
      "Submit your application quickly and securely through our online portal.",
    href: "#",
  },
  {
    icon: <Info size={32} />,
    title: "Visa Information",
    description:
      "Find all the details, requirements, and FAQs about different visa types.",
    href: "#",
  },
  {
    icon: <Library size={32} />,
    title: "Immigration Resources",
    description:
      "Access helpful guides, document checklists, and support tools.",
    href: "#",
  },
  {
    icon: <Globe size={32} />,
    title: "Online Passport Services",
    description:
      "Apply for or renew your passport entirely from the comfort of your home.",
    href: "#",
  },
];

export default function ProfessionalFeatures() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-blue-100 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-5xl">
            A Simpler, Faster Way Forward
          </h2>
          <p className="mt-4 text-lg leading-8 text-blue-800">
            End-to-end solutions for your global mobility needs, backed by
            expert support and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-blue-200/50 bg-white/60 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-700 text-white shadow-md group-hover:from-blue-600 group-hover:to-blue-800 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>

              <div className="pt-12">
                <h3 className="text-lg font-semibold text-blue-950">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-blue-900/80">
                  {feature.description}
                </p>
              </div>

              <a
                href={feature.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-800"
              >
                Proceed
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
