
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
             {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://picsum.photos/1920/1080?grayscale&blur=2" 
                    alt="Mushroom Forest" 
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                <p className="text-sm md:text-base font-bold tracking-widest uppercase mb-4 opacity-90 animate-fade-in-up">
                    Backed by 90,000+ 5-star reviews
                </p>
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Real Ingredients.<br/>
                    Real Results.
                </h1>
                <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
                    Tested ingredients you can trust. No grains, no starch, no fillers. Just pure mushroom extracts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-mushroom-800 hover:bg-mushroom-700 text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide transition-all transform hover:scale-105 shadow-lg">
                        Shop Mushrooms
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-mushroom-950 px-8 py-4 rounded text-sm font-bold uppercase tracking-wide transition-all">
                        Our Story
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
