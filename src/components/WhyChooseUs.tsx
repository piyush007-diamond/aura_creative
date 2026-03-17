import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Clock, HeadphonesIcon, MonitorSmartphone, PenTool, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <MonitorSmartphone size={48} />,
    title: '100% Responsive',
    desc: 'Websites that look and perform beautifully on all devices and screen sizes.',
    color: 'rgba(59, 130, 246, 0.8)'
  },
  {
    icon: <PenTool size={48} />,
    title: 'Custom Design',
    desc: 'Unique, tailor-made designs that perfectly align with your brand identity.',
    color: 'rgba(16, 185, 129, 0.8)'
  },
  {
    icon: <Clock size={48} />,
    title: 'On-Time Delivery',
    desc: 'We respect your deadlines and ensure timely project completion.',
    color: 'rgba(245, 158, 11, 0.8)'
  },
  {
    icon: <HeadphonesIcon size={48} />,
    title: '24/7 Support',
    desc: 'Round-the-clock technical support to keep your website running smoothly.',
    color: 'rgba(239, 68, 68, 0.8)'
  },
  {
    icon: <ShieldCheck size={48} />,
    title: 'Secure & Reliable',
    desc: 'Built with the latest security standards to protect your data and users.',
    color: 'rgba(139, 92, 246, 0.8)'
  },
  {
    icon: <CheckCircle2 size={48} />,
    title: 'Affordable Pricing',
    desc: 'Premium quality web development services at cost-effective rates.',
    color: 'rgba(236, 72, 153, 0.8)'
  }
];

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
    totalCards: number;
    color: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, index, totalCards, color }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const container = containerRef.current;
        if (!card || !container) return;

        const targetScale = 1 - (totalCards - index) * 0.05;

        // Set initial state
        gsap.set(card, {
            scale: 1,
            transformOrigin: "center top"
        });

        // Create scroll trigger for stacking effect
        ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const scale = gsap.utils.interpolate(1, targetScale, progress);

                gsap.set(card, {
                    scale: Math.max(scale, targetScale),
                    transformOrigin: "center top"
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [index, totalCards]);

    return (
        <div
            ref={containerRef}
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                top: 0
            }}
        >
            <div
                ref={cardRef}
                style={{
                    position: 'relative',
                    width: '90%',
                    maxWidth: '800px',
                    height: '450px',
                    borderRadius: '24px',
                    isolation: 'isolate',
                    top: `calc(-5vh + ${index * 25}px)`,
                    transformOrigin: 'top'
                }}
                className="card-content"
            >
                {/* Electric Border Effect */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '-3px',
                        borderRadius: '27px',
                        padding: '3px',
                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            ${color} 60deg,
                            ${color.replace('0.8', '0.6')} 120deg,
                            transparent 180deg,
                            ${color.replace('0.8', '0.4')} 240deg,
                            transparent 360deg
                        )`,
                        zIndex: -1
                    }}
                />

                {/* Main Card Content */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '2rem',
                    borderRadius: '24px',
                    background: `
                        linear-gradient(145deg, 
                            rgba(255, 255, 255, 0.95), 
                            rgba(255, 255, 255, 0.8)
                        )
                    `,
                    backdropFilter: 'blur(25px) saturate(180%)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.08),
                        0 2px 8px rgba(0, 0, 0, 0.04),
                        inset 0 1px 0 rgba(255, 255, 255, 0.8),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.02)
                    `,
                    overflow: 'hidden'
                }}>
                    {/* Enhanced Glass reflection overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                        pointerEvents: 'none',
                        borderRadius: '24px 24px 0 0'
                    }} />

                    {/* Glass shine effect */}
                    <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        right: '10px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.9) 50%, transparent 100%)',
                        borderRadius: '1px',
                        pointerEvents: 'none'
                    }} />

                    {/* Side glass reflection */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, transparent 50%)',
                        borderRadius: '24px 0 0 24px',
                        pointerEvents: 'none'
                    }} />

                    {/* Frosted glass texture */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.02) 1px, transparent 2px),
                            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.015) 1px, transparent 2px),
                            radial-gradient(circle at 40% 80%, rgba(0,0,0,0.01) 1px, transparent 2px)
                        `,
                        backgroundSize: '30px 30px, 25px 25px, 35px 35px',
                        pointerEvents: 'none',
                        borderRadius: '24px',
                        opacity: 0.7
                    }} />

                    <div className="relative z-10 flex flex-col items-center justify-center gap-6">
                        <div className="w-24 h-24 bg-primary/10 rounded-2xl shadow-sm flex items-center justify-center text-primary mb-2 backdrop-blur-md border border-primary/20">
                            {icon}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WhyChooseUs = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        gsap.fromTo(container,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <main ref={containerRef} id="why-choose-us" className="bg-white">
            {/* Hero Section */}
            <section style={{
                height: '70vh',
                width: '100%',
                display: 'grid',
                placeContent: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '54px 54px',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
                }} />
                
                <div className="text-center max-w-3xl mx-auto relative z-10 px-4">
                  <h4 className="text-primary font-semibold text-lg mb-2 uppercase tracking-wider">Why Choose Us?</h4>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    The Top Web Design Developers
                  </h2>
                  <p className="text-gray-600 text-xl">
                    We combine creativity, technology, and strategy to deliver exceptional digital experiences that drive results for your business.
                  </p>
                  <p className="mt-8 text-gray-400 animate-bounce">
                    Scroll down to explore 👇
                  </p>
                </div>
            </section>

            {/* Cards Section */}
            <section style={{
                width: '100%',
                paddingBottom: '20vh'
            }}>
                {features.map((feature, index) => {
                    return (
                        <Card
                            key={index}
                            title={feature.title}
                            description={feature.desc}
                            icon={feature.icon}
                            index={index}
                            totalCards={features.length}
                            color={feature.color}
                        />
                    );
                })}
            </section>
        </main>
    );
};

export default WhyChooseUs;
