import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    // 'h-screen' forces it to be the height of the screen
    // 'w-full' forces it to be the full width
    // 'relative' allows us to position the video inside
    <div className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 1. VIDEO BACKGROUND */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        // 'absolute top-0 left-0' anchors it to the top-left corner
        // 'object-cover' ensures it stretches to fill without leaving empty space
        // 'z-0' puts it behind the text
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {/* Finds hero.mp4 in your public folder */}
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. DARK OVERLAY */}
      {/* This makes the text readable. I lowered opacity to 0.3 so the video is clearer */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

      {/* 3. CONTENT */}
      {/* 'relative z-20' sits ON TOP of the video and overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
        
        <p className="text-[#E6C288] tracking-[0.2em] text-xs md:text-sm font-bold uppercase mb-6">
          Rare. Wild. Potent.
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg">
          Watch Nature <br />
          <span className="text-[#E6C288]">Awaken</span>
        </h1>

        <p className="text-gray-100 text-sm md:text-base max-w-lg mb-10 leading-relaxed drop-shadow-md">
          Experience the magnificent growth of our medicinal fungi. Cultivated with precision to unlock their full potential.
        </p>

        <button className="group bg-[#E6C288] text-[#1a241b] px-8 py-4 rounded-[2px] font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white transition-all duration-300 shadow-xl">
          Start the Ritual
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
};

export default Hero;
