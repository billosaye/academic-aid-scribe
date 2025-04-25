
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-ivory to-coral/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-navy animate-fade-in">
              Excel in Your Academic Journey with Confidence
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              BillyAid provides expert writing support for essays, dissertations, theses, and more, tailored to your academic goals.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#pricing" className="btn-secondary">Request a Quote</a>
            </div>
            <div className="mt-8 inline-block bg-navy/5 rounded-full px-4 py-2 text-sm font-medium animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Trusted by 10,000+ students worldwide
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://images.unsplash.com/photo-1627556704858-d71a32c67f09"
              alt="Student graduating in cap and gown"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
