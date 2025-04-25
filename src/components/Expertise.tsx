import React from 'react';
import { BookOpen, Target, Clock, Trophy } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Why Choose BillyEssays?</h2>
            <p className="text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our team of PhD-qualified writers and editors brings years of experience across disciplines, 
              ensuring your work meets the highest academic standards. We understand the unique challenges of 
              academic writing and provide personalized support to help you excel.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="border border-sage/20 rounded-lg p-5">
                <div className="text-lg font-bold font-serif mb-2">10+ Experts</div>
                <p className="text-sm text-gray-600">Specialized academics covering all major disciplines and subjects.</p>
              </div>
              
              <div className="border border-sage/20 rounded-lg p-5">
                <div className="text-lg font-bold font-serif mb-2">5+ Years</div>
                <p className="text-sm text-gray-600">Providing trusted academic assistance to students worldwide.</p>
              </div>
              
              <div className="border border-sage/20 rounded-lg p-5">
                <div className="text-lg font-bold font-serif mb-2">24/7 Support</div>
                <p className="text-sm text-gray-600">Round-the-clock assistance for inquiries and updates.</p>
              </div>
              
              <div className="border border-sage/20 rounded-lg p-5">
                <div className="text-lg font-bold font-serif mb-2">98% Satisfaction</div>
                <p className="text-sm text-gray-600">Consistently high ratings from our student clients.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="bg-navy p-7 rounded-lg shadow-xl text-white">
                <h3 className="text-xl font-bold mb-6">Your Path to Academic Excellence</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <BookOpen size={24} className="mr-3 text-coral" />
                      <div>
                        <div className="font-bold">Comprehensive Support</div>
                        <div className="text-sm text-white/70">From research to final submission</div>
                      </div>
                    </div>
                    <div className="text-sm text-white/80">
                      Get expert guidance at every step of your academic journey, ensuring your work meets the highest standards.
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Target size={24} className="mr-3 text-sage" />
                      <div>
                        <div className="font-bold">Precision & Quality</div>
                        <div className="text-sm text-white/70">Meticulous attention to detail</div>
                      </div>
                    </div>
                    <div className="text-sm text-white/80">
                      Every project undergoes rigorous quality checks to ensure academic integrity and excellence.
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Clock size={24} className="mr-3 text-ochre" />
                      <div>
                        <div className="font-bold">Timely Delivery</div>
                        <div className="text-sm text-white/70">Never miss a deadline</div>
                      </div>
                    </div>
                    <div className="text-sm text-white/80">
                      We understand the importance of deadlines and ensure your work is delivered on time, every time.
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 text-sm">
                    <Trophy size={16} className="mr-2" />
                    Start your journey to academic success today
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage/30 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-coral/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
