import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code,
  Briefcase,
  User,
  MessageSquare,
} from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-sage-50">
      <Navigation />

      <main className="w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-sage-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/Poornima1029"
              className="hover:text-sage-200 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/poornima-vipparthi-804002273/"
              className="hover:text-sage-200 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="poornimavipparthi590@gmail.com"
              className="hover:text-sage-200 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sage-200">
            © 2024 VipparthiPoornima. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
