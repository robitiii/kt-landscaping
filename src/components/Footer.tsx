
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nature-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Leaf className="h-8 w-8 text-earth-300" />
            <div>
              <h3 className="text-xl font-playfair font-bold">KT Landscaping & Gardening</h3>
              <p className="text-earth-300 font-inter">For the Love of Nature</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-earth-300 font-inter mb-2">
              © 2024 KT Landscaping & Gardening. All rights reserved.
            </p>
            <p className="text-earth-300 font-inter text-sm">
              Creating natural masterpieces, one garden at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
