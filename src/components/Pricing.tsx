
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-sage/20">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable Support for Every Student</h2>
          <p className="text-gray-700">
            Transparent pricing tailored to your project's complexity. Get a free quote with no hidden fees.
            We offer competitive rates to ensure academic excellence remains accessible.
          </p>
        </div>
        
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-sage/20 max-w-md w-full">
            <h3 className="text-xl font-bold mb-6 text-center font-serif">Request Your Free Quote Today</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-navy" htmlFor="project-type">
                  Project Type
                </label>
                <select 
                  id="project-type"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage/20 p-2 bg-white border"
                >
                  <option value="">Select Project Type</option>
                  <option value="essay">Essay</option>
                  <option value="dissertation">Dissertation</option>
                  <option value="thesis">Thesis</option>
                  <option value="research">Research Paper</option>
                  <option value="editing">Editing & Proofreading</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-navy" htmlFor="academic-level">
                  Academic Level
                </label>
                <select 
                  id="academic-level"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage/20 p-2 bg-white border"
                >
                  <option value="">Select Academic Level</option>
                  <option value="high-school">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="masters">Master's</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-navy" htmlFor="deadline">
                  Deadline
                </label>
                <select 
                  id="deadline"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage/20 p-2 bg-white border"
                >
                  <option value="">Select Deadline</option>
                  <option value="24h">24 Hours</option>
                  <option value="48h">48 Hours</option>
                  <option value="3d">3 Days</option>
                  <option value="7d">7 Days</option>
                  <option value="14d">14 Days</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-navy" htmlFor="pages">
                  Number of Pages
                </label>
                <input 
                  type="number" 
                  id="pages"
                  min="1"
                  placeholder="Enter number of pages"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage/20 p-2 bg-white border"
                />
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full btn-primary">
                  Request Quote
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              No obligation to proceed. We'll prepare a detailed quote for your specific requirements.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
