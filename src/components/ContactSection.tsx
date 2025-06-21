import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');

    try {
      const response = await fetch('https://hook.eu2.make.com/g5jkqnxnuamufcwqgcumfobs026ivgw1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      toast.success('Your message has been sent successfully!', {
        id: toastId,
        duration: 3000,
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
      toast.error(errorMessage, {
        id: toastId,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-white text-gray-800 font-inter"
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-white text-gray-800 font-inter"
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Your Phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-white text-gray-800 font-inter"
                />
                <textarea 
                  name="message"
                  placeholder="Tell us about your project..." 
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-white text-gray-800 font-inter resize-none"
                  required
                ></textarea>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-earth-500 hover:bg-earth-600 text-white py-4 rounded-lg font-inter font-semibold transition-colors duration-300 disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
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
