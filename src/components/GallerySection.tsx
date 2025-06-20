
import React from 'react';
import { Card } from '@/components/ui/card';

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      alt: "Beautiful garden landscape with trees and water feature",
      title: "Garden Transformation"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop",
      alt: "Sunlight through green trees in landscaped area",
      title: "Tree Care & Maintenance"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      alt: "Mountain landscape with professional landscaping",
      title: "Landscape Design"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      alt: "Orange flowers in maintained garden",
      title: "Garden Maintenance"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
      alt: "River and mountain landscape design inspiration",
      title: "Water Features"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      alt: "Professional landscaping project planning",
      title: "Project Planning"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-nature-50 to-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-nature-800 mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Discover the beauty we've created for our clients across various landscaping projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card 
              key={image.id}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-playfair font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-nature-500 hover:bg-nature-600 text-white px-8 py-4 rounded-lg text-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
