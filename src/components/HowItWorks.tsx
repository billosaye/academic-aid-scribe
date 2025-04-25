import React from 'react';
import { FileText, Users, Check } from 'lucide-react';

const ProcessStep: React.FC<{ number: number; icon: React.ReactNode; title: string; description: string }> = ({ 
  number, icon, title, description 
}) => {
  return (
    <div className="flex items-start">
      <div className="bg-sage h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">
        {number}
      </div>
      <div>
        <div className="flex items-center mb-2">
          <div className="text-sage mr-2">{icon}</div>
          <h3 className="text-xl font-bold font-serif">{title}</h3>
        </div>
        <p className="text-white/90">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding bg-navy text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Path to Academic Success, Simplified</h2>
            <p className="mb-10 text-white/80">
              Submit your requirements, connect with a subject-matter expert, and receive a polished, 
              high-quality paper tailored to your needs.
            </p>
            
            <div className="space-y-10 animate-fade-in">
              <ProcessStep 
                number={1}
                icon={<FileText size={20} />}
                title="Submit Your Brief"
                description="Tell us about your assignment, including requirements, deadlines, and any specific instructions."
              />
              
              <ProcessStep 
                number={2}
                icon={<Users size={20} />}
                title="Match with an Expert"
                description="We'll pair you with a qualified academic writer specialized in your field of study."
              />
              
              <ProcessStep 
                number={3}
                icon={<Check size={20} />}
                title="Receive Your Paper"
                description="Get your completed work delivered on time, with opportunity for revisions to ensure your satisfaction."
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-6 text-navy relative animate-fade-in">
              <div className="absolute -top-4 -left-4 bg-sage/30 h-20 w-20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 bg-coral/30 h-16 w-16 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="bg-navy/5 rounded-full py-1 px-4 text-xs font-medium inline-block mb-4">Process Timeline</div>
                
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="bg-sage rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">1</div>
                    <div className="h-1 flex-1 bg-sage/20 mx-2"></div>
                    <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center text-gray-400 font-bold">2</div>
                    <div className="h-1 flex-1 bg-gray-200 mx-2"></div>
                    <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center text-gray-400 font-bold">3</div>
                  </div>
                  
                  <div className="bg-sage/10 rounded-lg p-4 border-l-4 border-sage">
                    <h4 className="font-bold text-lg mb-2">Submit Your Brief</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-sage/20 rounded-full mr-2 flex-shrink-0"></div>
                        <div>Assignment details</div>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-sage/20 rounded-full mr-2 flex-shrink-0"></div>
                        <div>Academic level</div>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-sage/20 rounded-full mr-2 flex-shrink-0"></div>
                        <div>Deadline requirements</div>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <div className="bg-navy/10 h-8 w-32 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
