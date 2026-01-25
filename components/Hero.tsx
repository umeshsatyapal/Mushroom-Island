import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// ⚠️ FINAL CONFIGURATION
// ==========================================
// 1. Frame Count: 0 to 191 = 192 total frames
const frameCount = 192; 

// 2. Standard 1080p Dimensions
const frameWidth = 1920; 
const frameHeight = 1080; 

// 3. EXACT Filename Pattern
// Matches: "frame_000_delay-0.05s.webp"
const currentFrame = (index: number) => `/frames/frame_${index.toString().padStart(3, '0')}_delay-0.05s.webp`;
// ==========================================

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLSectionElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textContentRef = useRef<HTMLDivElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // -------------------------------------------
    // 1. Preload All Images
    // -------------------------------------------
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        // Loop from 0 to 191
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
                loadedImages[i] = img;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                 console.error(`Error loading frame ${i}`);
                 loadedCount++;
                 if (loadedCount === frameCount) {
                     setImages(loadedImages);
                     setImagesLoaded(true);
                 }
            }
        }
    }, []);

    // -------------------------------------------
    // 2. Setup Scroll Animation
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
                // Clear entire canvas to ensure transparency
                context.clearRect(0, 0, canvas.width, canvas.height);
                // Draw new frame
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
             { opacity: 0, x: -50 },
             { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [imagesLoaded, images]);

    return (
        <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-[#2A352B]">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A352B] via-[#1a241b] to-[#0d120e] opacity-100 z-0"></div>

            {/* Loading Screen */}
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
                {/* GRID LAYOUT EXPLAINED:
                   grid-cols-2 splits the screen in half.
                   - Div 1 (Text): Goes to Left
                   - Div 2 (Canvas): Goes to Right
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
                    
                    {/* LEFT: Text Content */}
                    <div ref={textContentRef} className="relative z-20 flex flex-col justify-center h-full opacity-0 pl-4 md:pl-0">
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
                        
                        <div>
                            <button className="group bg-[#E6C288] text-[#2A352B] px-10 py-4 rounded-full font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(230,194,136,0.3)] hover:shadow-[0_0_40px_rgba(230,194,136,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-3">
                                Start the Ritual
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Canvas Animation 
                        - 'justify-end' pushes the mushroom to the far right edge.
                        - 'translate-x' nudges it further if you want it off-center.
                    */}
                    <div className="relative h-full w-full flex items-center justify-end pointer-events-none">
                        <canvas 
                            ref={canvasRef} 
                            className={`relative z-10 w-full md:w-[130%] h-auto object-contain transition-opacity duration-1000 translate-x-10 md:translate-x-20 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
