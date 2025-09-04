'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Server className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">LinuxAdmin.cz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-gray-600">+420 733 127 235</span>
            <Link 
              href="/contact" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-600 block mb-2">+420 733 127 235</span>
                <Link 
                  href="/contact" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}