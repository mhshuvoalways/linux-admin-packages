'use client';
import { motion } from 'framer-motion';
import { Server, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Hire Linux Admins in{' '}
            <span className="text-green-600">Prague</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Professional Linux administration services with 24/7 support, 
            expert technical knowledge, and reliable server management solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link 
              href="#pricing" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              View Packages
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Administration</h3>
              <p className="text-gray-600">Professional Linux server management and optimization</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock monitoring and technical assistance</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">Advanced security measures and regular updates</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}