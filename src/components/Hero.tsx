
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
              AcademicAid provides expert writing support for essays, dissertations, theses, and more, tailored to your academic goals.
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
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 transform rotate-1 relative z-10">
                <div className="bg-gray-50 rounded p-4">
                  <div className="h-6 w-3/4 bg-navy/10 rounded mb-4"></div>
                  <div className="h-4 w-full bg-navy/5 rounded mb-3"></div>
                  <div className="h-4 w-full bg-navy/5 rounded mb-3"></div>
                  <div className="h-4 w-2/3 bg-navy/5 rounded mb-6"></div>
                  
                  <div className="h-6 w-1/2 bg-navy/10 rounded mb-4"></div>
                  <div className="h-4 w-full bg-navy/5 rounded mb-3"></div>
                  <div className="h-4 w-full bg-navy/5 rounded mb-3"></div>
                  <div className="h-4 w-5/6 bg-navy/5 rounded"></div>
                </div>
                
                <div className="absolute top-8 right-8 h-16 w-16 bg-sage/20 rounded-full flex items-center justify-center">
                  <div className="h-8 w-8 bg-sage rounded-full"></div>
                </div>
                
                <div className="mt-4 flex items-center space-x-2">
                  <div className="h-3 w-3 bg-sage rounded-full"></div>
                  <div className="h-3 w-24 bg-sage/30 rounded-full"></div>
                  <div className="h-3 w-12 bg-sage/20 rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage/20 rounded-full z-0"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-coral/20 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
