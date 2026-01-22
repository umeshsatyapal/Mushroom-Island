
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AILab from './components/AILab';

const App: React.FC = () => {
    const [isAIOpen, setIsAIOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header onOpenAI={() => setIsAIOpen(true)} />
            
            <main className="flex-grow">
                <Hero />
                
                {/* Stats Section */}
                <section className="bg-mushroom-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl font-serif font-bold text-mushroom-800">94k+</p>
                            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">5-Star Reviews</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif font-bold text-mushroom-800">100%</p>
                            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Organic</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif font-bold text-mushroom-800">0</p>
                            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Fillers/Grains</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif font-bold text-mushroom-800">3rd</p>
                            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Party Tested</p>
                        </div>
                    </div>
                </section>

                <ProductList />

                {/* AI Promo Section */}
                <section className="bg-earth-800 text-white py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 backdrop-blur-sm border border-white/20">
                            New Feature
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                            Meet Your Mushroom Guide
                        </h2>
                        <p className="text-lg text-mushroom-100 mb-10 max-w-2xl mx-auto">
                            Powered by the latest Gemini Intelligence. Research strains, check facts, generate art, or visualize recipes instantly.
                        </p>
                        <button 
                            onClick={() => setIsAIOpen(true)}
                            className="bg-white text-earth-800 px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                        >
                            Open Mushroom Lab
                        </button>
                    </div>
                </section>
            </main>

            <Footer />

            <AILab isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
        </div>
    );
};

export default App;
