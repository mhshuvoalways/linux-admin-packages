"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SEOContent() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Linux Administration Services in Prague
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              Learn more about our services →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Linux Admin Packages?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi morbi tempus iaculis urna id volutpat lacus. Arcu vitae
              elementum curabitur vitae nunc sed velit dignissim sodales. Mauris
              augue neque gravida in fermentum et sollicitudin ac orci
              phasellus.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Egestas purus viverra accumsan in nisl nisi scelerisque eu
              ultrices. Nunc sed augue lacus viverra vitae congue eu.
              Suspendisse potenti nullam ac tortor vitae purus faucibus ornare
              suspendisse.
            </p>
            <Link
              href="#pricing"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              View all pricing packages →
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            We have been providing Linux administration for more than 17 years.
          </h2>
          <p className="text-xl text-gray-600 mb-8">Our services also use:</p>
          <div className="flex flex-wrap justify-between items-center gap-8">
            <Image src="/service1.png" width={140} height={140} alt="cPanel" />
            <Image src="/service2.png" width={140} height={140} alt="cPanel" />
            <Image src="/service3.png" width={140} height={140} alt="cPanel" />
            <Image src="/service4.png" width={140} height={140} alt="cPanel" />
            <Image src="/service5.png" width={140} height={140} alt="cPanel" />
            <Image src="/service6.png" width={140} height={140} alt="cPanel" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
