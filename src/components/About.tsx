import React from 'react';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 text-center mb-10 sm:mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
              alt="Developer working"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 sm:w-48 h-32 sm:h-48 bg-sage-100 rounded-lg -z-10"></div>
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <p className="text-base sm:text-lg text-sage-800 leading-relaxed">
              I’m a passionate Web Developer and aspiring Product Manager with a
              strong foundation in business development and sales. With
              experience in both technical development and strategic client
              engagement, I excel at blending design, user experience, and
              market insights.
            </p>
            <p className="text-base sm:text-lg text-sage-800 leading-relaxed">
              My approach is driven by data and collaboration, ensuring that
              every project not only looks great but also delivers measurable
              business value. From developing effective sales strategies to
              building strong client relationships, I bring a unique combination
              of technical and sales expertise to help companies grow.
            </p>
            {/* <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              <div className="text-center p-2 sm:p-4">
                <span className="block text-2xl sm:text-3xl font-bold text-sage-600">5+</span>
                <span className="text-sm sm:text-base text-sage-700">Years Experience</span>
              </div>
              <div className="text-center p-2 sm:p-4">
                <span className="block text-2xl sm:text-3xl font-bold text-sage-600">50+</span>
                <span className="text-sm sm:text-base text-sage-700">Projects Done</span>
              </div>
              <div className="text-center p-2 sm:p-4">
                <span className="block text-2xl sm:text-3xl font-bold text-sage-600">30+</span>
                <span className="text-sm sm:text-base text-sage-700">Happy Clients</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
