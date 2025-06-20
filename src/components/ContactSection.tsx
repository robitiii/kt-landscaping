
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-nature-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
            Let Nature Do the Talking
          </h2>
          
          <p className="text-xl mb-12 font-inter opacity-90">
            Ready to transform your outdoor space? Contact us today for a FREE quote 
            and discover how we can bring your vision to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Get Your Free Quote</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-lg bg-white text-gray-800 font-inter"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 rounded-lg bg-white text-gray-800 font-inter"
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full p-4 rounded-lg bg-white text-gray-800 font-inter"
                />
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="w-full p-4 rounded-lg bg-white text-gray-800 font-inter resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-earth-500 hover:bg-earth-600 text-white py-4 rounded-lg font-inter font-semibold transition-colors duration-300"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-playfair font-semibold">Why Choose KT Landscaping?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-earth-300 text-xl">✅</span>
                  <span className="font-inter">Professional, licensed, and insured</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-earth-300 text-xl">✅</span>
                  <span className="font-inter">Free consultations and estimates</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-earth-300 text-xl">✅</span>
                  <span className="font-inter">Quality materials and craftsmanship</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-earth-300 text-xl">✅</span>
                  <span className="font-inter">Flexible scheduling and maintenance plans</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-earth-300 text-xl">✅</span>
                  <span className="font-inter">100% satisfaction guarantee</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-nature-700">
                <p className="text-earth-300 font-inter text-lg">
                  📞 Call us today for immediate assistance
                </p>
                <p className="text-2xl font-bold text-earth-300 mt-2">
                  (555) 123-GROW
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
