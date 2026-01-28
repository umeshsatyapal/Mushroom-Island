import React from 'react';
import { ShoppingBag } from 'lucide-react';
import Footer from './Footer';

// Data for "Others also bought" section
const crossSellProducts = [
    { id: 1, name: "Cordyceps Flowers: Protected", price: 2499, image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1974&auto=format&fit=crop" },
    { id: 2, name: "Chaga: Strength From Within", price: 1499, image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=2034&auto=format&fit=crop" },
    { id: 3, name: "Ginger: Awaken Inner Warmth", price: 1499, salePrice: 899, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2080&auto=format&fit=crop", sale: true },
    { id: 4, name: "Astragalus: Rooted In Strength", price: 1699, salePrice: 1099, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2080&auto=format&fit=crop", sale: true }
];

interface CartProps {
    onNavigate: (page: 'home' | 'shop' | 'product-single' | 'cart') => void;
}

const Cart: React.FC<CartProps> = ({ onNavigate }) => {
    return (
        <div className="bg-[#2A352B] min-h-screen pt-20">
            
            {/* 1. HERO & EMPTY STATE MESSAGE */}
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center md:text-left">
                    You are one step closer to magic.
                </h1>

                {/* Notification Bar */}
                <div className="bg-[#0F281E] border-t-4 border-[#0F281E] text-white px-6 py-4 flex items-center gap-4 mb-8 shadow-sm">
                    <ShoppingBag size={20} className="text-[#E6C288]" />
                    <span className="font-sans text-sm">Your cart is currently empty.</span>
                </div>

                <button 
                    onClick={() => onNavigate('shop')}
                    className="bg-[#E6C288] text-[#2A352B] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-[2px]"
                >
                    Return to shop
                </button>
            </div>

            {/* 2. WHITE CONTENT AREA (Testimonial & Cross-Sell) */}
            <div className="bg-white py-24 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    
                    {/* Testimonial Section (Matches image_cfab6f.jpg) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-6">
                            <h2 className="font-serif text-3xl text-[#2A352B] leading-tight">
                                I feel a noticeable shift in my mood and focus. Everything feels steadier, aligned, and more supported throughout the entire day.
                            </h2>
                            <div className="flex items-center gap-4">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" className="w-10 h-10 rounded-full object-cover" alt="Jessica" />
                                <div>
                                    <h5 className="font-bold text-sm text-[#2A352B]">Jessica</h5>
                                    <span className="text-xs text-gray-400">Houston, TX</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-80 lg:h-96">
                            <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2121&auto=format&fit=crop" className="w-full h-full object-cover rounded-[2px]" alt="Tea Ritual" />
                        </div>
                    </div>

                    {/* "Others Also Bought" Grid (Matches image_cfaaf3.png) */}
                    <div>
                        <h3 className="font-serif text-2xl text-[#2A352B] mb-12">Others also bought</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {crossSellProducts.map((product) => (
                                <div key={product.id} className="group">
                                    <div className="bg-[#F4F4F4] aspect-square flex items-center justify-center mb-6 relative">
                                        {product.salePrice && <span className="absolute top-2 right-2 bg-[#3E3E20] text-white text-[10px] font-bold px-2 py-1 uppercase">Sale!</span>}
                                        <img src={product.image} alt={product.name} className="w-[80%] h-[80%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <h3 className="font-serif text-sm mb-2 h-10 text-[#2A352B]">{product.name}</h3>
                                    <div className="text-sm font-medium mb-4 text-[#2A352B]">
                                        {product.salePrice ? (
                                            <>
                                                <span className="text-gray-400 line-through mr-2">₹{product.price}</span>
                                                <span className="border-b border-black">₹{product.salePrice}</span>
                                            </>
                                        ) : (
                                            <span>₹{product.price}</span>
                                        )}
                                    </div>
                                    <button className="bg-[#0F281E] text-white text-xs font-bold uppercase px-6 py-3 hover:bg-[#1a4030] transition-colors">
                                        Add to cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;
