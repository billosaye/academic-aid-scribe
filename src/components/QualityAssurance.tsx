
import React from 'react';
import { Check } from 'lucide-react';

const QualityFeature: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex items-center">
      <div className="bg-ochre rounded-full p-1 mr-3 flex-shrink-0">
        <Check size={16} className="text-white" />
      </div>
      <p className="font-medium">{title}</p>
    </div>
  );
};

const QualityAssurance: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Excellence You Can Trust</h2>
            <p className="text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Every paper is written by verified academic experts, thoroughly checked for originality, and delivered on time.
              We pride ourselves on maintaining the highest standards of academic integrity and quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <QualityFeature title="PhD-Qualified Writers" />
              <QualityFeature title="Plagiarism-Free Guarantee" />
              <QualityFeature title="On-Time Delivery" />
              <QualityFeature title="Unlimited Revisions" />
              <QualityFeature title="24/7 Support" />
              <QualityFeature title="Confidential Service" />
            </div>
            
            <a href="#get-started" className="btn-primary inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>Order Now</a>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 border border-sage/20">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 bg-sage/20 rounded-full mr-3"></div>
                  <div>
                    <div className="font-bold text-navy">Quality Report</div>
                    <div className="text-sm text-gray-500">Final Assessment</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <div className="text-sm font-medium">Originality Score</div>
                      <div className="text-sm font-bold text-sage">100%</div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-sage rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <div className="text-sm font-medium">Academic Standard</div>
                      <div className="text-sm font-bold text-sage">A+ Grade</div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-sage rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <div className="text-sm font-medium">Citation Accuracy</div>
                      <div className="text-sm font-bold text-sage">Perfect</div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-sage rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-sage/30">
                  <div className="flex items-start">
                    <div className="p-1 bg-sage rounded-full mr-3 mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-navy">Verified & Approved</div>
                      <div className="text-sm text-gray-700">This document passes all quality checks and is ready for submission.</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-coral/20 rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-sage/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
