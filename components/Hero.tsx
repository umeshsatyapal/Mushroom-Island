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
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1, delay: 0.5 }
        )
        .fromTo(textRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.6'
        )
        .fromTo(buttonRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
            '-=0.4'
        )
        .fromTo(imageRef.current,
            { opacity: 0, x: 50, scale: 1.1 },
            { opacity: 1, x: 0, scale: 1, duration: 1.2 },
            '-=1'
        );

        if (imageRef.current) {
            gsap.to(imageRef.current, {
                yPercent: 10,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-radial">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="block text-greenlays-lime font-bold tracking-[0.2em] uppercase mb-4">
                            Potent. Pure. Proven.
                        </span>
                        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                            Unlock Your <span className="text-greenlays-lime">Nature's</span> Potential
                        </h1>
                        <p ref={textRef} className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                            Discover the ancient wisdom of functional mushrooms, scientifically crafted for modern performance, immunity, and clarity.
                        </p>
                        
                        <button ref={buttonRef} className="group bg-greenlays-button text-white px-10 py-4 rounded-md font-bold uppercase tracking-wider shadow-lg hover:bg-greenlays-button-hover hover:shadow-xl transition-all duration-300 flex items-center gap-3">
                            Shop Now
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                         {/* Reliable Image Source */}
                         <img 
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1629038235832-722a6d7503f1?q=80&w=1000&auto=format&fit=crop" 
                            alt="Functional Mushrooms" 
                            className="relative w-full h-full object-contain drop-shadow-2xl z-10 rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
