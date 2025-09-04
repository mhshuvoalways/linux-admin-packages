"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "/accessibility.svg",
    title: "Availability",
    description: "99.9% uptime. Your service availability is our priority.",
  },
  {
    icon: "/support.svg",
    title: "24/7 Support",
    description:
      "Our experts are ready to help you 24/7. Our wiki contains various tutorials and is growing every day.",
  },
  {
    icon: "/technology.svg",
    title: "Technology",
    description: "To run your services we are using top technologies.",
  },
  {
    icon: "/domain.svg",
    title: "Domains",
    description: "We offer more than 850 TLDs to register.",
  },
  {
    icon: "/installation.svg",
    title: "Automated Installers",
    description: "Favorite OS and CMS automatic installation.",
  },
  {
    icon: "/location.svg",
    title: "Locality",
    description: "Located in Czech Republic.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            "We are cool, be with us"
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            If you are beginner or already deploying large project, creation of
            hosting service with LinuxAdmin.cz was never easier. We offer
            fastest hardware and network in field with scalable environment. Our
            technical support team is ready 24 hours 7 days in week to help you
            with any request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <>
                  <Image
                    src={feature.icon}
                    width={500}
                    height={500}
                    alt={feature.title}
                    className="w-16"
                  />
                </>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
