import React from 'react';
import {
  Code,
  Layout,
  Terminal,
  Database,
  Briefcase,
  Users,
} from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: 'Frontend Development',
      icon: Layout,
      items: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      category: 'Development Tools',
      icon: Code,
      items: ['Github', 'Figma', ''],
    },
    {
      category: 'Soft Skills',
      icon: Users,
      items: [
        'Leadership',
        'Communication',
        'English Proficiency(Spoken & Written',
        'Team Building',
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-sage-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 text-center mb-10 sm:mb-16">
          Skills & Expertise
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-sage-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-sage-900">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 sm:px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-xs sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
