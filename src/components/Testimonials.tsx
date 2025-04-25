
import React from 'react';
import { Star } from 'lucide-react';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i}
          size={16} 
          className={i < rating ? "text-ochre fill-ochre" : "text-gray-300"} 
        />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-ivory">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Students Trust Our Work</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. See what students have to say about their experience with AcademicAid.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-lg p-8 shadow-md border border-sage/20 h-full">
              <div className="mb-6">
                <StarRating rating={5} />
              </div>
              
              <blockquote className="mb-6">
                <p className="text-xl font-serif italic text-gray-700">
                  "Billy helped me ace my dissertation! Their expert writer provided invaluable guidance on my methodology chapter, which had been giving me trouble for weeks. The final paper exceeded my expectations and earned me high praise from my advisor."
                </p>
              </blockquote>
              
              <div className="flex items-center">
                <div className="bg-navy/10 h-12 w-12 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-navy">Emma Richardson</div>
                  <div className="text-sm text-gray-600">Graduate Student</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-coral/10 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="mb-4">
                  <StarRating rating={5} />
                </div>
                <p className="mb-4 text-gray-700">
                  "Saved me hours of stress. The editing was thorough and improved my paper significantly."
                </p>
                <div className="flex items-center">
                  <div className="bg-navy/10 h-10 w-10 rounded-full mr-3"></div>
                  <div>
                    <div className="font-bold text-navy">Thomas L.</div>
                    <div className="text-xs text-gray-600">Undergraduate</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-sage/10 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="mb-4">
                  <StarRating rating={5} />
                </div>
                <p className="mb-4 text-gray-700">
                  "My essay scored an A+! The writer understood my requirements perfectly."
                </p>
                <div className="flex items-center">
                  <div className="bg-navy/10 h-10 w-10 rounded-full mr-3"></div>
                  <div>
                    <div className="font-bold text-navy">Sarah K.</div>
                    <div className="text-xs text-gray-600">Master's Student</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-sage/10 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="mb-4">
                  <StarRating rating={4} />
                </div>
                <p className="mb-4 text-gray-700">
                  "The formatting expertise was incredible. All citations were perfect."
                </p>
                <div className="flex items-center">
                  <div className="bg-navy/10 h-10 w-10 rounded-full mr-3"></div>
                  <div>
                    <div className="font-bold text-navy">Daniel M.</div>
                    <div className="text-xs text-gray-600">PhD Candidate</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-coral/10 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="mb-4">
                  <StarRating rating={5} />
                </div>
                <p className="mb-4 text-gray-700">
                  "Their research assistance was invaluable for my literature review."
                </p>
                <div className="flex items-center">
                  <div className="bg-navy/10 h-10 w-10 rounded-full mr-3"></div>
                  <div>
                    <div className="font-bold text-navy">Jennifer R.</div>
                    <div className="text-xs text-gray-600">Doctoral Student</div>
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

export default Testimonials;
