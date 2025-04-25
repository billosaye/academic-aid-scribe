
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section id="get-started" className="section-padding bg-gradient-to-br from-navy to-navy/90 text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Academic Journey?</h2>
          <p className="text-white/80 text-lg mb-8">
            Get started today and experience the difference professional academic support can make to your studies.
            Our experts are ready to help you achieve your academic goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#services" 
              className="btn-primary bg-ochre hover:bg-ochre/90 text-white py-3 px-8 text-lg"
            >
              Explore Our Services
            </a>
            <a 
              href="#pricing" 
              className="btn-secondary border-white text-white hover:bg-white/10 py-3 px-8 text-lg"
            >
              Request a Free Quote
            </a>
          </div>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="bg-white/10 rounded-full px-4 py-2 mb-4">
              Have questions? We're here to help.
            </div>
            <a href="#contact" className="text-white underline hover:text-sage">Contact our support team</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
