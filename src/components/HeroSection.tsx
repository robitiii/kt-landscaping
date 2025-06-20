import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-nature-50 to-earth-100 pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2334d399%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-nature-800 mb-6 leading-tight">
            Transform Your
            <span className="block text-nature-600">Outdoor Space</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-inter">
            Where every detail is shaped with care, passion, and professionalism. 
            Create a natural masterpiece that speaks to your soul.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-nature-500 hover:bg-nature-600 text-white px-8 py-4 rounded-lg text-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get FREE Quote
            </button>
            <button className="border-2 border-nature-500 text-nature-500 hover:bg-nature-500 hover:text-white px-8 py-4 rounded-lg text-lg font-inter font-semibold transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-nature-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nature-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
