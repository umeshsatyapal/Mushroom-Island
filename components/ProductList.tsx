import React, { useEffect, useRef } from 'react';
import { ShoppingBag } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ProductList: React.FC = () => {
    const sectionRef = useRef<HTMLSectionElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.fromTo(headerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );

        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#2A352B] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-16">
                    <span className="text-greenlays-lime font-bold tracking-widest uppercase block mb-2">Our Collection</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        Premium Mushroom Extracts
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map((product, index) => (
                        <div 
                            key={product.id} 
                            ref={el => cardsRef.current[index] = el}
                            className="group bg-greenlays-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-greenlays-lime/30 hover:-translate-y-2 relative"
                        >
                             <div className="absolute top-4 left-4 z-10">
                                <span className="bg-greenlays-lime text-greenlays-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {product.tag}
                                </span>
                            </div>
                            <div className="relative h-64 overflow-hidden bg-greenlays-dark/50">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                     <h3 className="text-xl font-serif font-bold text-white group-hover:text-greenlays-lime transition-colors">
                                        {product.name}
                                    </h3>
                                     <span className="text-lg font-bold text-greenlays-lime">{product.price}</span>
                                </div>
                               
                                <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                    {product.description}
                                </p>
                                
                                {/* NEW BUTTON STYLE APPLIED HERE */}
                                <button className="w-full bg-greenlays-button text-white px-4 py-3 rounded-md font-bold uppercase tracking-wider shadow-md hover:bg-greenlays-button-hover hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                    <ShoppingBag size={18} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
