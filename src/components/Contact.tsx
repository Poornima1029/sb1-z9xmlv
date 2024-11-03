import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-sage-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 text-center mb-10 sm:mb-16">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-sage-900 mb-4 sm:mb-6">
              Let's Talk
            </h3>
            <p className="text-base sm:text-lg text-sage-700 mb-6 sm:mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-sage-600 mr-4 flex-shrink-0" />
                <span className="text-sm sm:text-base text-sage-800">
                  poornimavipparthi590.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-sage-600 mr-4 flex-shrink-0" />
                <span className="text-sm sm:text-base text-sage-800">
                  +91 9515703489
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-sage-600 mr-4 flex-shrink-0" />
                <span className="text-sm sm:text-base text-sage-800">
                  Telangana, India
                </span>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 order-1 md:order-2"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base text-sage-700 mb-1 sm:mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-500 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base text-sage-700 mb-1 sm:mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-500 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base text-sage-700 mb-1 sm:mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 rounded-lg border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-500 text-sm sm:text-base"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sage-600 text-white py-2 sm:py-3 rounded-lg hover:bg-sage-700 transition-colors text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
