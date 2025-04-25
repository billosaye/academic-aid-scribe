
import React from 'react';
import { FileText, Book, Edit, Search } from 'lucide-react';

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
  const services = [
    {
      icon: <FileText size={32} />,
      title: "Academic Writing",
      description: "Expert writing assistance for essays, research papers, case studies, and term papers with proper formatting and citations.",
    },
    {
      icon: <Book size={32} />,
      title: "Thesis Development",
      description: "Comprehensive assistance with thesis planning, research methodology, literature review, data analysis, and final writing.",
    },
    {
      icon: <FileText size={32} />,
      title: "Technical Projects",
      description: "Support with programming assignments, algorithm development, system design, and technical documentation.",
    },
    {
      icon: <Book size={32} />,
      title: "Dissertation Support",
      description: "In-depth guidance through every stage of your dissertation, from proposal to defense preparation.",
    },
    {
      icon: <FileText size={32} />,
      title: "Rush Assignments",
      description: "Quick turnaround for urgent academic tasks without compromising on quality and originality.",
    },
    {
      icon: <Edit size={32} />,
      title: "Revisions & Edits",
      description: "Detailed editing, proofreading, and revision services to perfect your existing academic work.",
    },
    {
      icon: <Book size={32} />,
      title: "Literature Review",
      description: "Comprehensive analysis of scholarly sources relevant to your research topic or academic field.",
    },
    {
      icon: <Search size={32} />,
      title: "Plagiarism Check",
      description: "Thorough review of your academic work to ensure originality and proper citation of sources.",
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
