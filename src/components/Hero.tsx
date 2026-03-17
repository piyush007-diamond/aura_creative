import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'motion/react';
import { AuroraBackground } from './ui/aurora-background';
import ShinyButton from './ui/shiny-button';

// Replace these URLs with your uploaded image paths (e.g., "/slide1.png")
// You can drag and drop your images into the "public" folder in the file explorer.
const carouselImages = [
  "/hero/slide-1.png",
  "/hero/slide-2.png",
  "/hero/slide-3.png",
  "/hero/slide-4.png",
  "/hero/slide-5.png"
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from(subHeadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + carouselImages.length) % carouselImages.length;
    let offset = diff;
    if (diff > Math.floor(carouselImages.length / 2)) {
      offset = diff - carouselImages.length;
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
    <AuroraBackground 
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-gradient-to-b from-primary to-primary-light dark:bg-gradient-to-b dark:from-primary dark:to-primary-light"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              No 1 Website Development Company
            </h1>
            
            <p 
              ref={subHeadingRef}
              className="text-3xl md:text-4xl font-caveat text-white flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <span>You Imagine.</span>
              <span className="bg-accent text-primary px-3 py-1 rounded-md font-bold transform -rotate-2">
                We Create.
              </span>
            </p>
            
            <div className="mt-10">
              <ShinyButton 
                onClick={() => window.open("https://calendly.com/balkinikshay/30min", "_blank")}
                className="font-bold text-lg py-4 px-10 rounded-full hover:-translate-y-1 h-auto"
              >
                Get Started
              </ShinyButton>
            </div>
          </div>

          {/* Hero Image Carousel */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[450px] md:h-[550px]" style={{ perspective: 1200 }}>
            {carouselImages.map((img, index) => {
              const style = getCardStyle(index);
              return (
                <motion.div
                  key={index}
                  className="absolute w-[85%] max-w-[480px] rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
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
                  <div className="relative aspect-[16/10] bg-gray-900 border-4 border-white/20 rounded-2xl overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Portfolio ${index + 1}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.8,192.27,108.86,236.4,98.3,279.7,77.3,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
