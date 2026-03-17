import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sujit Giri',
    role: 'Jeevandaan Foundation',
    text: 'They have a good-supported team, they respect the time delivery. All my Jeevandaan Foundation (NGO) Team thanks you for creating our website.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Arshad Jamil',
    role: 'Business Owner',
    text: 'Excellent development of my sites pages in affordable cost. All team members are very helpful and knowledgeable. Thank you so much.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Mittul Gupta',
    role: 'Entrepreneur',
    text: 'Extremely professional, easy to reach, reasonable prices and very flexible. It was a pleasure to do business with them.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    text: 'Aura Creative completely transformed our online presence. The new website is not only beautiful but converts visitors into customers at a much higher rate.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'David Chen',
    role: 'Startup Founder',
    text: 'Fast, responsive, and incredibly talented. They understood our vision from day one and delivered a product that exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Emily Rodriguez',
    role: 'E-commerce Manager',
    text: 'Our sales have doubled since launching the new e-commerce platform built by Aura. The user experience is flawless across all devices.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Michael Chang',
    role: 'Tech Lead',
    text: 'The code quality and architecture they provided for our custom web app was top-notch. Highly recommend their development team.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Jessica Taylor',
    role: 'Creative Director',
    text: 'As a design agency ourselves, we have high standards. Aura Creative met and surpassed them with their pixel-perfect implementation.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Robert Wilson',
    role: 'Restaurant Owner',
    text: 'They built a beautiful website for my restaurant with an integrated reservation system. It has streamlined our operations immensely.',
    image: 'https://images.unsplash.com/photo-1504257432389-523431e1a18b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-lg shadow-primary/5 max-w-xs w-full mx-auto" key={i}>
                  <div className="text-gray-700 leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-gray-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-gray-900 tracking-tight leading-5">{name}</div>
                      <div className="leading-5 text-gray-500 text-sm tracking-tight mt-1">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  // Split testimonials into 3 columns for a masonry-like scrolling effect
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-primary font-semibold text-lg mb-2 uppercase tracking-wider">Reviews</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Client Testimonials
          </h2>
          <p className="text-gray-600 text-lg">
            We have established a record of happy clientele, as customer satisfaction is our topmost priority.
          </p>
        </div>

        {/* Scrolling Columns Container */}
        <div className="flex justify-center gap-6 h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn testimonials={col1} duration={15} />
          <TestimonialsColumn testimonials={col2} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={col3} duration={17} className="hidden lg:block" />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
