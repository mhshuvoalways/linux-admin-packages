'use client';
import { motion } from 'framer-motion';

export default function PaymentOptions() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Secure Payment Options
          </h2>
          <p className="text-gray-600 mb-8">
            We accept all major payment methods for your convenience
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold">PayPal</div>
            <div className="bg-red-500 text-white px-4 py-2 rounded font-bold">Mastercard</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded font-bold">Visa</div>
            <div className="bg-orange-500 text-white px-4 py-2 rounded font-bold">Discover</div>
            <div className="bg-green-600 text-white px-4 py-2 rounded font-bold">Bank Transfer</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}