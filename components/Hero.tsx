import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// ⚠️ FINAL CONFIGURATION (Do not change)
// ==========================================
const frameCount = 290; 
const frameWidth = 1920; 
const frameHeight = 1012; 

// Path to your frames in the public folder
const currentFrame = (index: number) => `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;
// ==========================================

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLSectionElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textContentRef = useRef<HTMLDivElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // -------------------------------------------
    // 1. Preload All 290 Images
    // -------------------------------------------
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
                loadedImages[i - 1] = img;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                 console.error(`Failed to load frame ${i}`);
                 loadedCount++;
                 if (loadedCount === frameCount) {
                     setImages(loadedImages);
                     setImagesLoaded(true);
                 }
            }
        }
    }, []);

    // -------------------------------------------
    // 2. Setup Scroll Sequence
    // -------------------------------------------
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = frameWidth;
        canvas.height = frameHeight;

        const renderFrame = (index: number) => {
            if (images[index]) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(images[index], 0, 0);
            }
        };

        renderFrame(0);

        const sequence = { frame: 0 };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0.5,
                pin: true, 
                anticipatePin: 1,
            },
        });

        tl.to(sequence, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            onUpdate: () => renderFrame(sequence.frame),
        });
        
        gsap.fromTo(textContentRef.current, 
             { opacity: 0, y: 30 },
             { opacity: 1, y: 0, duration: 1, delay: 0.5 }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [imagesLoaded, images]);

    return (
        <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-[#2A352B]">
            
            {/* Background Gradient - Made slightly darker to make the mushroom pop */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A352B] via-[#1a241b] to-[#0d120e] opacity-95 z-0"></div>

            {/* Loading Indicator */}
            {!imagesLoaded && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#2A352B]">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-[#E6C288] border-t-transparent rounded-full animate-spin"></div>
                        <div className="text-[#E6C288] font-serif text-xl tracking-widest animate-pulse">
                            PREPARING NATURE...
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 h-full relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                    
                    {/* LEFT: Text Content */}
                    <div ref={textContentRef} className="relative z-20 pt-10 md:pt-0 opacity-0">
                        <span className="block text-[#E6C288] font-bold tracking-[0.2em] uppercase mb-4 text-sm animate-pulse">
                            Rare. Wild. Potent.
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
                            Watch Nature <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C288] to-white">
                                Awaken
                            </span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed border-l-2 border-[#E6C288]/30 pl-6">
                            Scroll to witness the magnificent growth of our medicinal fungi. Cultivated with precision to unlock their full potential.
                        </p>
                        
                        <button className="group bg-[#E6C288] text-[#2A352B] px-10 py-4 rounded-full font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(230,194,136,0.3)] hover:shadow-[0_0_40px_rgba(230,194,136,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-3">
                            Start the Ritual
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* RIGHT: Canvas Animation with Blend Mode */}
                    <div className="relative h-full w-full flex items-center justify-center md:justify-end pointer-events-none">
                        {/* UPDATES HERE:
                           1. Removed 'drop-shadow-2xl' (looks weird with blend mode)
                           2. Added 'mix-blend-mode: screen' to style
                        */}
                        <canvas 
                            ref={canvasRef} 
                            className={`relative z-10 w-auto h-[80vh] max-h-[900px] object-contain transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                            style={{ 
                                // This line makes the black background transparent!
                                mixBlendMode: 'screen', 
                                // Kept the bottom fade for a smooth transition into the next section
                                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
