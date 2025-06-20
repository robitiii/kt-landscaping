
import React from 'react';
import { Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-earth-50 to-nature-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Leaf className="h-16 w-16 text-nature-500 animate-bounce-gentle" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-nature-800 mb-8">
            For the Love of Nature
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 font-inter leading-relaxed">
            <p>
              At KT Landscaping & Gardening, we believe that every garden deserves to thrive. 
              Our passion for nature drives everything we do, from the smallest garden detail 
              to complete landscape transformations.
            </p>
            
            <p>
              Whether you need a complete landscape makeover or reliable monthly garden maintenance, 
              we're your trusted partner in creating outdoor spaces that speak to your soul and 
              enhance your quality of life.
            </p>
            
            <p className="text-xl font-semibold text-nature-600">
              📍 Proudly serving local homes, businesses, and estates
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-nature-600 mb-2">100+</div>
              <div className="text-gray-600 font-inter">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nature-600 mb-2">5+</div>
              <div className="text-gray-600 font-inter">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nature-600 mb-2">24/7</div>
              <div className="text-gray-600 font-inter">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
