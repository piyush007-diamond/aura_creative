import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center">
              <span className="text-4xl font-signature text-white">
                Aura
              </span>
              <span className="text-xl font-montserrat font-bold tracking-widest uppercase ml-2 text-white/90">
                Creative
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Aura Creative is India's No 1 Web development Company. We provide unique and best quality websites to customers at a very affordable price.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> Our Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> E-Commerce Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={16} /> SEO Services</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to get latest updates and offers.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-accent border border-gray-700"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-lg transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Aura Creative. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
