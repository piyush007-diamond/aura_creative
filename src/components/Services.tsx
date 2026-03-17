import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, BookOpen, Briefcase, User, ShoppingCart, PenTool } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    icon: <Layout size={40} strokeWidth={1.5} />,
    title: 'Landing Page',
    subtitle: 'High-Converting Single Page',
    desc: 'A focused, single-page website designed to drive a specific action or capture leads effectively.',
    features: [
      'Hero section with clear CTA',
      'About & Benefits section',
      'Contact form connected to Google Sheets',
      'Responsive Footer section'
    ]
  },
  {
    id: 2,
    icon: <BookOpen size={40} strokeWidth={1.5} />,
    title: 'Course Website',
    subtitle: 'E-Learning Platform',
    desc: 'A comprehensive platform to host, manage, and sell your online courses and educational content.',
    features: [
      'User Registration & Login',
      'Course Curriculum Layout',
      'Payment Gateway Integration',
      'Student Progress Tracking'
    ]
  },
  {
    id: 3,
    icon: <Briefcase size={40} strokeWidth={1.5} />,
    title: 'Business Website',
    subtitle: 'Corporate Online Presence',
    desc: 'A professional multi-page website to showcase your company services, team, and establish trust.',
    features: [
      'Dynamic Services Pages',
      'Company Portfolio/Case Studies',
      'Blog/News Section',
      'Advanced SEO Optimization'
    ]
  },
  {
    id: 4,
    icon: <User size={40} strokeWidth={1.5} />,
    title: 'Portfolio Website',
    subtitle: 'Showcase Your Work',
    desc: 'A visually stunning personal website to display your projects, skills, and resume to potential clients.',
    features: [
      'Interactive Project Gallery',
      'Detailed Case Study Pages',
      'Downloadable Resume Link',
      'Animated UI Elements'
    ]
  },
  {
    id: 5,
    icon: <ShoppingCart size={40} strokeWidth={1.5} />,
    title: 'E-Commerce Website',
    subtitle: 'Online Storefront',
    desc: 'A fully functional online store to sell physical or digital products with secure checkout.',
    features: [
      'Product Catalog & Categories',
      'Shopping Cart & Checkout',
      'Inventory Management',
      'Order Tracking System'
    ]
  },
  {
    id: 6,
    icon: <PenTool size={40} strokeWidth={1.5} />,
    title: 'Custom Web App',
    subtitle: 'Tailored Solutions',
    desc: 'A bespoke web application built from scratch to solve your unique business challenges.',
    features: [
      'Custom Database Architecture',
      'User Roles & Permissions',
      'Third-party API Integrations',
      'Scalable Cloud Hosting'
    ]
  }
];

const cardStyles = [
  'from-emerald-300 to-emerald-500',
  'from-slate-500 to-slate-700',
  'from-amber-400 to-orange-500',
  'from-sky-300 to-blue-500',
  'from-rose-400 to-red-500',
  'from-indigo-400 to-purple-500',
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-semibold text-lg mb-2 uppercase tracking-wider">Services</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Provide
          </h2>
          <p className="text-gray-600 text-lg">
            Your Business Deserves a Great Website. We make professional web design simple and accessible. Explore our tailored solutions to find the perfect fit for your unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative h-[380px] w-full perspective-1000"
            >
              {/* Card Inner */}
              <div className="w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180 shadow-lg rounded-2xl">
                
                {/* Front Side */}
                <div className={`absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br ${cardStyles[index % cardStyles.length]} rounded-2xl p-6 flex flex-col text-left overflow-hidden`}>
                  <div className="relative z-10">
                    <p className="text-white/90 text-xs font-bold uppercase tracking-wider mb-2">{service.subtitle}</p>
                    <h3 className="text-2xl font-bold text-white leading-tight max-w-[85%]">{service.title}</h3>
                  </div>
                  
                  <div className="absolute right-[-20px] bottom-[-20px] opacity-40 transform rotate-[-15deg] transition-transform duration-500 group-hover:scale-110">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 220, strokeWidth: 1, className: "text-white drop-shadow-2xl" })}
                  </div>

                  <div className="mt-auto relative z-10">
                    <span className="inline-block bg-white/20 backdrop-blur-md text-white text-sm font-bold px-4 py-2 rounded-lg border border-white/30 shadow-sm">
                      Learn More
                    </span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white rotate-y-180 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3 border-b border-white/20 pb-2">{service.title}</h3>
                  <p className="text-sm text-white/90 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">Features Included:</h4>
                    <ul className="text-sm space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span className="text-white/80 leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
