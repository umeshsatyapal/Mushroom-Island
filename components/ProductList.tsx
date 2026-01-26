import React, { useState } from 'react';
import { ShoppingBag, Minus, Plus, Check } from 'lucide-react';

const ProductSection: React.FC = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type: 'inc' | 'dec') => {
        if (type === 'dec' && quantity > 1) setQuantity(quantity - 1);
        if (type === 'inc') setQuantity(quantity + 1);
    };

    return (
        <section className="py-24 bg-[#F9F8F6] text-[#2A352B]" id="shop">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    
                    {/* LEFT: Product Image Area */}
                    <div className="relative group">
                        {/* Background Decorative Circle */}
                        <div className="absolute inset-0 bg-[#E6C288]/20 rounded-full transform scale-90 blur-3xl group-hover:scale-105 transition-transform duration-700"></div>
                        
                        <div className="relative z-10 bg-white p-12 rounded-sm shadow-xl border border-[#E6C288]/20 flex items-center justify-center h-[500px]">
                            {/* Placeholder for Product Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1615485925763-867862f80903?q=80&w=1974&auto=format&fit=crop" 
                                alt="Mushroom Extract Bottle" 
                                className="max-h-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Floating Tag */}
                            <div className="absolute top-6 right-6 bg-[#C85515] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                                Best Seller
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Product Details */}
                    <div>
                        <h3 className="text-[#C85515] font-bold tracking-[0.2em] uppercase text-sm mb-4">
                            Pure Extract
                        </h3>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                            Lion's Mane <br/>
                            <span className="italic text-[#E6C288]">Focus Blend</span>
                        </h2>
                        
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Unlock your brain's potential with our dual-extracted Lion's Mane. 
                            Grown on our own farms, processed in-house, and tested for maximum potency. 
                            The ultimate daily ritual for clarity and memory.
                        </p>

                        {/* Price & Rating */}
                        <div className="flex items-center gap-6 mb-8">
                            <span className="text-3xl font-bold text-[#2A352B]">$49.00</span>
                            <div className="flex items-center gap-1">
                                <span className="flex text-[#C85515]">★★★★★</span>
                                <span className="text-sm text-gray-400">(128 Reviews)</span>
                            </div>
                        </div>

                        {/* Benefits List */}
                        <ul className="space-y-3 mb-10 text-gray-700">
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#E6C288]/30 flex items-center justify-center text-[#C85515]">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                Enhances memory and focus
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#E6C288]/30 flex items-center justify-center text-[#C85515]">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                Supports nerve health (NGF)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#E6C288]/30 flex items-center justify-center text-[#C85515]">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                100% Fruiting Body (No Fillers)
                            </li>
                        </ul>

                        {/* Add to Cart Controls */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-300 rounded-full w-max">
                                <button 
                                    onClick={() => handleQuantity('dec')}
                                    className="px-4 py-3 hover:text-[#C85515] transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-8 text-center font-bold">{quantity}</span>
                                <button 
                                    onClick={() => handleQuantity('inc')}
                                    className="px-4 py-3 hover:text-[#C85515] transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            {/* Main Button */}
                            <button className="flex-1 bg-[#2A352B] text-[#E6C288] px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#1a241b] transition-all duration-300 shadow-lg flex items-center justify-center gap-3">
                                <ShoppingBag size={20} />
                                Add to Cart — ${(49 * quantity).toFixed(2)}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductSection;
