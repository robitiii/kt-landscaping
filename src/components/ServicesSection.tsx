
import React from 'react';
import { TreeDeciduous, Droplet, TreePalm, Leaf, Trash2, Wrench, Shovel, Sprout } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <TreeDeciduous className="h-8 w-8" />,
      title: "Landscaping Design & Implementation",
      description: "Complete landscape transformation from concept to reality"
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      title: "Irrigation System Installation",
      description: "Professional sprinkler systems and maintenance services"
    },
    {
      icon: <Shovel className="h-8 w-8" />,
      title: "Paving Services",
      description: "Driveways, walkways & patios with expert craftsmanship"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Lawn Mowing & Grass Care",
      description: "Regular maintenance to keep your lawn pristine"
    },
    {
      icon: <Trash2 className="h-8 w-8" />,
      title: "Rubble Removal & Cleanup",
      description: "Complete yard cleanup and waste removal services"
    },
    {
      icon: <TreePalm className="h-8 w-8" />,
      title: "Artificial Grass Installation",
      description: "Low-maintenance, year-round green solutions"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tree Felling & Pruning",
      description: "Professional tree care and removal services"
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Garden Maintenance",
      description: "Full gardening services to keep your space thriving"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-nature-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Comprehensive landscaping and gardening solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-nature-50 to-earth-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-nature-500 mb-4 group-hover:text-nature-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-playfair font-semibold text-nature-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
