import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';
import ShinyButton from './ui/shiny-button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center z-50">
          <span className={`text-4xl font-signature ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Aura
          </span>
          <span className={`text-xl font-montserrat font-bold tracking-widest uppercase ml-2 ${isScrolled ? 'text-gray-800' : 'text-white/90'}`}>
            Creative
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2">
          <nav>
            <ul className="flex items-center gap-6 px-4">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <ShinyButton
            onClick={() => window.open("https://calendly.com/balkinikshay/30min", "_blank")}
            className="hidden xl:flex items-center gap-2 font-bold px-6 py-2.5 rounded-lg hover:-translate-y-0.5 h-auto"
          >
            <Calendar size={16} />
            Book Now
          </ShinyButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden z-50 p-2 rounded-md ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-primary z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-xl font-medium flex items-center justify-between"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={20} />}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto mb-10">
            <ShinyButton
              onClick={() => window.open("https://calendly.com/balkinikshay/30min", "_blank")}
              className="flex items-center justify-center gap-2 w-full font-bold px-6 py-4 rounded-xl text-lg h-auto"
            >
              <Calendar size={20} />
              Book Now
            </ShinyButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
