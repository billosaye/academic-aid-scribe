import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappLink = "https://wa.me/254746220913";
  
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="container mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="font-serif text-2xl font-bold mb-4 block">
              Billy<span className="text-sage">Aid</span>
            </a>
            <p className="text-white/70 mb-4">
              Empowering students since 2020 with professional academic writing support and guidance.
            </p>
            <div className="flex items-center">
              <a href="#app" className="bg-white/10 hover:bg-white/20 rounded-md py-2 px-4 text-sm transition-colors duration-300">
                Web App
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Essay Writing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Dissertation Support</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Thesis Help</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Research Assistance</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Editing Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition-colors duration-200">Testimonials</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Terms & Privacy</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for academic tips and exclusive offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-sage"
                />
                <button 
                  type="submit" 
                  className="bg-ochre hover:bg-ochre/90 rounded-r-md px-4 py-2 transition-colors duration-300"
                >
                  <MessageCircle size={18} />
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a 
                href={whatsappLink}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} AcademicAid. All rights reserved.</p>
          <p className="mt-2">This service is intended to be used for research and reference purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
