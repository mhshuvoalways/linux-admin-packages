'use client';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

const packages = [
  {
    name: "Basic Admin",
    description: "Essential Linux administration for small projects",
    price: "€299",
    period: "/month",
    features: [
      "Basic server monitoring",
      "Security updates",
      "Email support",
      "Monthly reports",
      "Basic backup setup"
    ],
    popular: false
  },
  {
    name: "Professional Admin",
    description: "Comprehensive Linux management for growing businesses",
    price: "€599",
    period: "/month",
    features: [
      "24/7 server monitoring",
      "Advanced security setup",
      "Phone & email support",
      "Weekly reports",
      "Automated backups",
      "Performance optimization"
    ],
    popular: true
  },
  {
    name: "Enterprise Admin",
    description: "Full-scale Linux infrastructure management",
    price: "€999",
    period: "/month",
    features: [
      "Complete infrastructure management",
      "Dedicated admin specialist",
      "Priority support",
      "Daily reports",
      "Disaster recovery planning",
      "Custom automation scripts",
      "Load balancing setup"
    ],
    popular: false
  },
  {
    name: "Startup Package",
    description: "Perfect for new companies getting started",
    price: "€199",
    period: "/month",
    features: [
      "Basic server setup",
      "Essential monitoring",
      "Email support",
      "Getting started guide",
      "Basic security hardening"
    ],
    popular: false
  },
  {
    name: "E-commerce Admin",
    description: "Specialized for online stores and high-traffic sites",
    price: "€799",
    period: "/month",
    features: [
      "E-commerce optimization",
      "High-availability setup",
      "SSL certificate management",
      "Database optimization",
      "CDN configuration",
      "Payment security hardening"
    ],
    popular: false
  },
  {
    name: "Custom Solutions",
    description: "Tailored Linux administration for unique requirements",
    price: "Contact",
    period: "for quote",
    features: [
      "Custom requirements analysis",
      "Bespoke solution design",
      "Flexible pricing",
      "Dedicated project manager",
      "Custom SLA agreements",
      "Specialized expertise"
    ],
    popular: false
  }
];

export default function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderNow = (packageData) => {
    setSelectedPackage(packageData);
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Linux Admin Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect Linux administration package for your business needs. 
            All packages include professional support and expert technical knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                pkg.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600 ml-1">{pkg.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleOrderNow(pkg)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {pkg.price === 'Contact' ? 'Contact Us' : 'Order Now'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </section>
  );
}