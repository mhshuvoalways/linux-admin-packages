'use client';
import Link from 'next/link';
import { Server, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">LinuxAdmin.cz</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional Linux administration services in Prague. 
              Expert technical support, server management, and 24/7 monitoring 
              for businesses of all sizes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+420 733 127 235</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@linuxadmin.cz</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Prague, Czech Republic</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-green-400 transition-colors">Linux Administration</Link></li>
              <li><Link href="/" className="hover:text-green-400 transition-colors">Server Management</Link></li>
              <li><Link href="/" className="hover:text-green-400 transition-colors">Security Hardening</Link></li>
              <li><Link href="/" className="hover:text-green-400 transition-colors">Backup Solutions</Link></li>
              <li><Link href="/" className="hover:text-green-400 transition-colors">Performance Optimization</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link href="#pricing" className="hover:text-green-400 transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
              <li><Link href="/" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/" className="hover:text-green-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Options */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © 2025 LinuxAdmin.cz. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Secure payments:</span>
              <div className="flex space-x-3">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">PayPal</div>
                <div className="bg-red-500 text-white px-3 py-1 rounded text-xs font-bold">MC</div>
                <div className="bg-blue-700 text-white px-3 py-1 rounded text-xs font-bold">Visa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}