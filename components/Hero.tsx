import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2A352B]">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A352B] via-[#1a241b] to-[#0d120e] opacity-100 z-0"></div>

            {/* Main Content - Centered */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="block text-[#E6C288] font-bold tracking-[0.2em] uppercase mb-6 text-sm">
                    Rare. Wild. Potent.
                </span>
                
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
                    Watch Nature <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C288] to-white">
                        Awaken
                    </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Experience the magnificent growth of our medicinal fungi. Cultivated with precision to unlock their full potential.
                </p>
                
                <div className="flex justify-center">
                    <button className="group bg-[#E6C288] text-[#2A352B] px-12 py-5 rounded-full font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(230,194,136,0.3)] hover:shadow-[0_0_40px_rgba(230,194,136,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-3">
                        Start the Ritual
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
