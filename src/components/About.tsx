import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

// Replace these URLs with your uploaded image paths
const aboutImages = [
  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80"
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + aboutImages.length) % aboutImages.length;
    let offset = diff;
    if (diff > Math.floor(aboutImages.length / 2)) {
      offset = diff - aboutImages.length;
    }

    if (offset === 0) {
      return {
        x: "0%",
        z: 0,
        rotateY: 0,
        opacity: 1,
        scale: 1,
        zIndex: 10,
      };
    } else if (offset === -1) {
      return {
        x: "-45%",
        z: -100,
        rotateY: 20,
        opacity: 0.8,
        scale: 0.85,
        zIndex: 5,
      };
    } else if (offset === 1) {
      return {
        x: "45%",
        z: -100,
        rotateY: -20,
        opacity: 0.8,
        scale: 0.85,
        zIndex: 5,
      };
    } else {
      return {
        x: offset < 0 ? "-75%" : "75%",
        z: -200,
        rotateY: offset < 0 ? 40 : -40,
        opacity: 0,
        scale: 0.7,
        zIndex: 1,
      };
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Side Carousel */}
          <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="relative w-full flex justify-center items-center h-[350px] md:h-[450px]" style={{ perspective: 1200 }}>
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl z-0"></div>
              {aboutImages.map((img, index) => {
                const style = getCardStyle(index);
                return (
                  <motion.div
                    key={index}
                    className="absolute w-[75%] max-w-[350px] rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
                    initial={false}
                    animate={{
                      x: style.x,
                      z: style.z,
                      rotateY: style.rotateY,
                      opacity: style.opacity,
                      scale: style.scale,
                      zIndex: style.zIndex,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ transformOrigin: "center center" }}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="relative aspect-square bg-gray-900 border-4 border-white/20 rounded-2xl overflow-hidden">
                      <img 
                        src={img} 
                        alt={`About Aura Creative ${index + 1}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Text Side */}
          <div ref={textRef} className="w-full lg:w-1/2 order-1 lg:order-2">
            <h4 className="text-primary font-semibold text-lg mb-2 uppercase tracking-wider">Define us!</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Aura Creative - A Top Web Development Agency
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Aura Creative is a trusted and registered web design agency providing the best web development and web design services. We offer multi-functional web portals, ensuring that a well-developed and attractive website helps our clients record ROI-driven results.
              </p>
              <p>
                Our experts are highly experienced in delivering websites that are easy to use, visually appealing, and accessible across a wide range of devices. We pull in audiences mesmerized by your layout, web design ideas, graphics, and typography.
              </p>
              <p>
                A capable web design firm can assist you in creating a website that is user-friendly, search engine optimized, and visually beautiful. We are your one-stop shop for creating a potential website for your business with end-to-end services.
              </p>
            </div>
            
            <div className="mt-8">
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors shadow-md">
                Explore Our Services
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
