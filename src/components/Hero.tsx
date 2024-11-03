import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-sage-50 to-yellow-50 px-4 sm:px-6">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-sage-900 mb-4 sm:mb-6 animate-fade-in leading-tight">
          Hello, I'm <span className="text-sage-600">Vipparthi Poornima</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-sage-700 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in-delay leading-relaxed">
          Web Developer & Product Manager crafting beautiful digital experiences
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
          <a
            href="#contact"
            className="bg-sage-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-sage-700 transition-colors w-full sm:w-auto text-center"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-sage-600 text-sage-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-sage-50 transition-colors w-full sm:w-auto text-center"
          >
            View Work
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sage-600 animate-bounce hidden sm:block"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}