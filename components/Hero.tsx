import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const mushroomImageRef = useRef<HTMLImageElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 1. Initial "Growth" Animation on Page Load
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Text fades in
        tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
          .fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
          .fromTo(buttonRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.4');

        // Mushroom "Blooms" up from the bottom
        tl.fromTo(mushroomImageRef.current, 
            { y: 200, opacity: 0, scale: 0.8, filter: 'blur(10px)' }, 
            { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' },
            0 // Start immediately
        );

        // 2. Scroll Animation (Parallax Growth)
        // As user scrolls down, the mushroom keeps growing and glowing
        if (heroRef.current && mushroomImageRef.current) {
            gsap.to(mushroomImageRef.current, {
                yPercent: 20, // Moves slightly slower than scroll (Parallax)
                scale: 1.1,   // Continues to grow bigger
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
            
            // The glow pulse gets more intense on scroll
            gsap.to(glowRef.current, {
                opacity: 0.8,
                scale: 1.5,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'center top',
                    scrub: true,
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#2A352B]">
            
            {/* Background Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A352B] via-[#1f2820] to-[#0d120e] opacity-90"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                    
                    {/* LEFT: Text Content */}
                    <div className="relative z-20 pt-10 md:pt-0">
                        <span className="block text-[#E6C288] font-bold tracking-[0.2em] uppercase mb-4 text-sm animate-pulse">
                            Rare. Wild. Potent.
                        </span>
                        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
                            Unlock Nature's <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C288] to-white">
                                Hidden Light
                            </span>
                        </h1>
                        <p ref={textRef} className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed border-l-2 border-[#E6C288]/30 pl-6">
                            Experience the awakening power of bioluminescent fungi. Ethically harvested at night to preserve their peak active compounds.
                        </p>
                        
                        <button ref={buttonRef} className="group bg-[#E6C288] text-[#2A352B] px-10 py-4 rounded-full font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(230,194,136,0.3)] hover:shadow-[0_0_40px_rgba(230,194,136,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-3">
                            Start the Ritual
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* RIGHT: Bioluminescent Mushroom Animation */}
                    <div className="relative h-[600px] md:h-[800px] w-full flex items-end justify-center md:justify-end pointer-events-none">
                        
                        {/* The Glow Effect behind the mushroom */}
                        <div 
                            ref={glowRef}
                            className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#4ade80] rounded-full blur-[120px] opacity-20 mix-blend-screen"
                        ></div>

                        {/* The Mushroom Image */}
                        {/* Using a specific glowing mushroom image that blends with dark green */}
                        <img 
                            ref={mushroomImageRef}
                            src="https://images.unsplash.com/photo-1629038235832-722a6d7503f1?q=80&w=1200&auto=format&fit=crop" 
                            alt="Bioluminescent Mushroom" 
                            className="relative z-10 w-auto h-[80%] object-contain drop-shadow-2xl"
                            style={{ 
                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                            }}
                        />
                    </div>
                </div>
            </div>
            
            {/* Ambient Floating Spores (Particles) */}
            <div className="absolute inset-0 pointer-events-none z-10">
                 {[...Array(15)].map((_, i) => (
                    <div key={i} className="absolute rounded-full bg-[#E6C288]/40 animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 15}s`
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
