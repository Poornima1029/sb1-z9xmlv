import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'wasteLESS-A Food waste reduction platform',
      description:
        'wasteLESS is a digital platform aimed at reducing food waste by connecting donors with receivers to share surplus food efficiently.',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      tech: ['Bootstarp', 'php', 'Static HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Smart Budget App',
      description:
        'SmartBudget is a personal finance tracking app designed to help users manage expenses, set budgets, and achieve financial goals efficiently.',
      image:
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
      tech: ['Flutter', 'Figma Designs'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Revive and Thrive - an upcycling Studio',
      description:
        'Revive and Thrive is an upcycling studio that transforms waste materials into creative, functional products, promoting sustainability and eco-conscious living.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 text-center mb-10 sm:mb-16">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-sage-900 opacity-0 group-hover:opacity-75 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white rounded-full hover:bg-sage-100 transition-colors"
                      title="View Live"
                    >
                      <ExternalLink className="w-5 h-5 text-sage-900" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white rounded-full hover:bg-sage-100 transition-colors"
                      title="View Code"
                    >
                      <Github className="w-5 h-5 text-sage-900" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-sage-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-sage-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
