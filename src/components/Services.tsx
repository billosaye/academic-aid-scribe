
import React from 'react';
import { FileText, Book, Edit } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-md border border-sage/20 card-hover animate-slide-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-sage/10 h-16 w-16 rounded-full flex items-center justify-center mb-6 text-sage">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-serif text-navy">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-ivory">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Tailored Academic Support for Every Need</h2>
          <p className="text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our comprehensive suite of services is designed to help you excel in your academic journey,
            no matter your discipline or level of study.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<FileText size={32} />} 
            title="Essay Writing" 
            description="Custom essays crafted to meet your requirements and academic standards."
            delay={0.2}
          />
          
          <ServiceCard 
            icon={<Book size={32} />} 
            title="Dissertation & Thesis Support" 
            description="Expert guidance for structuring, researching, and writing your major projects."
            delay={0.4}
          />
          
          <ServiceCard 
            icon={<Edit size={32} />} 
            title="Editing & Proofreading" 
            description="Polish your work with professional edits for clarity and academic rigor."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
