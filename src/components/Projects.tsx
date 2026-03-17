import React from 'react';
import { CardStack, CardStackItem } from './ui/card-stack';

const projects: CardStackItem[] = [
  {
    id: 1,
    title: 'Nexgen Academy',
    description: 'A comprehensive courses and learning application platform designed for personal branding and educational excellence.',
    imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: 'https://nex-gen2.vercel.app/',
    ctaLabel: 'View Project',
    tag: 'Web Application'
  },
  {
    id: 2,
    title: 'Aertz AI',
    description: 'An AI service landing page featuring detailed information and comprehensive demo videos for each feature.',
    imageSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: 'https://aertzai.vercel.app/',
    ctaLabel: 'View Project',
    tag: 'AI Service Landing Page'
  },
  {
    id: 3,
    title: 'Rhy Gen',
    description: 'Revolutionizing commercial transport. Empowering Indian heavy-duty trucks with high-performance hybrid powertrains, reducing emissions without compromising on power.',
    imageSrc: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: 'https://rhygen.vercel.app/',
    ctaLabel: 'View Project',
    tag: 'Company Landing Page'
  },
  {
    id: 4,
    title: 'Aertz AI Dental Dashboard',
    description: 'A specialized dashboard tailored for dentists, featuring daily needs tools to monitor clinic performance and patient analytics seamlessly.',
    imageSrc: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: 'https://denti-view-ai-dashboard.vercel.app/',
    ctaLabel: 'View Project',
    tag: 'Dashboard Design'
  },
  {
    id: 5,
    title: 'Notes Hub',
    description: 'Smart notes. Better grades. Discover curated student notes, sell your best summaries, and earn with transparent commissions. Fast search and secure delivery.',
    imageSrc: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: 'https://nbnoteshub.vercel.app/',
    ctaLabel: 'View Project',
    tag: 'Productivity App'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-semibold text-lg mb-2 uppercase tracking-wider">Our Projects</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Builds
          </h2>
          <p className="text-gray-600 text-lg">
            Take a look at some of our recent work. We pride ourselves on delivering high-quality, custom solutions for our clients.
          </p>
        </div>

        <div className="flex justify-center items-center w-full max-w-5xl mx-auto">
          <CardStack 
            items={projects} 
            cardWidth={600}
            cardHeight={400}
            overlap={0.5}
            spreadDeg={40}
            autoAdvance={true}
            intervalMs={4000}
          />
        </div>

        <div className="text-center mt-16">
          <a href="#" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-primary-light transition-colors">
            View All Projects
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
