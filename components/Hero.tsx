import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* 1. VIDEO BACKGROUND */}
      {/* I used a high-quality forest background here. You can replace the 'src' link with any video URL you like later. */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-mysterious-forest-with-sun-rays-1375-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. DARK OVERLAY */}
      {/* This ensures your white text pops against the video */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 3. CONTENT (Centered) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
        
        {/* Small Tagline */}
        <p className="text-[#E6C288] tracking-[0.2em] text-xs md:text-sm font-bold uppercase mb-6">
          Rare. Wild. Potent.
        </p>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
          Watch Nature <br />
          <span className="text-[#E6C288]">Awaken</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-sm md:text-base max-w-lg mb-10 leading-relaxed opacity-90">
          Experience the magnificent growth of our medicinal fungi. Cultivated with precision to unlock their full potential.
        </p>

        {/* Call to Action Button */}
        <button className="group bg-[#E6C288] text-[#1a241b] px-8 py-4 rounded-[2px] font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white transition-all duration-300">
          Start the Ritual
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
};

export default Hero;
