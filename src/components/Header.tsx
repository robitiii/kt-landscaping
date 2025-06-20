import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Leaf className="h-10 w-10 text-nature-500 animate-bounce-gentle" />
            <div>
              <h1 className="text-2xl font-playfair font-bold text-nature-700">
                KT Landscaping
              </h1>
              <p className="text-sm text-nature-600 font-inter">For the Love of Nature</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-nature-500 transition-colors font-inter font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-nature-500 transition-colors font-inter font-medium">
              Services
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-nature-500 transition-colors font-inter font-medium">
              Gallery
            </a>
            <a href="#about" className="text-gray-700 hover:text-nature-500 transition-colors font-inter font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-nature-500 transition-colors font-inter font-medium">
              Contact
            </a>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className="block h-0.5 bg-gray-600"></span>
              <span className="block h-0.5 bg-gray-600"></span>
              <span className="block h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#home" className="block py-2 text-gray-700 hover:text-nature-500 transition-colors font-inter">
              Home
            </a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-nature-500 transition-colors font-inter">
              Services
            </a>
            <a href="#gallery" className="block py-2 text-gray-700 hover:text-nature-500 transition-colors font-inter">
              Gallery
            </a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-nature-500 transition-colors font-inter">
              About
            </a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-nature-500 transition-colors font-inter">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
