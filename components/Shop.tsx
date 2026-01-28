import React from 'react';
import { Check, Star } from 'lucide-react';
import Footer from './Footer';
import AddToCartButton from './AddToCartButton'; // Import the smart button

// 1. Define Product Data
const products = [
    { id: 1, name: "Astragalus: Rooted In Strength", price: 1499, oldPrice: 2100, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2080&auto=format&fit=crop", sale: true },
    { id: 2, name: "Chaga: Strength From Within", price: 1499, oldPrice: null, image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=2034&auto=format&fit=crop", sale: false },
    { id: 3, name: "Cordyceps Flowers: Protected", price: 2499, oldPrice: null, image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1974&auto=format&fit=crop", sale: false },
    { id: 4, name: "Lion's Mane: Focus Blend", price: 3999, oldPrice: null, image: "https://images.unsplash.com/photo-1615485925763-867862f80903?q=80&w=1974&auto=format&fit=crop", sale: false },
    { id: 5, name: "Reishi: Drift Into Calmness", price: 1899, oldPrice: 2499, image: "https://images.unsplash.com/photo-1596483789033-288219463c22?q=80&w=1974&auto=format&fit=crop", sale: true },
    { id: 6, name: "Ginger: Awaken Inner Warmth", price: 899, oldPrice: 1499, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2080&auto=format&fit=crop", sale: true },
];

// 2. Define Props Interface (Must accept onNavigate)
interface ShopProps {
    onNavigate: (page: 'home' | 'shop' | 'product-single' | 'cart') => void;
}

const Shop: React.FC<ShopProps> = ({ onNavigate }) => {
    
    // Define the specific product object for the Sidebar Widget (Chaga)
    const featuredSidebarProduct = products[1]; 

    return (
        <div className="bg-[#2A352B] min-h-screen pt-20">
            
            {/* HERO HEADER */}
            <div className="bg-[#2A352B] text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <h1 className="relative z-10 text-5xl md:text-7xl font-serif mb-4">Welcome to ritual.</h1>
                <p className="relative z-10 text-[#E6C288] uppercase tracking-widest text-sm font-bold">Rare. Wild. Potent.</p>
            </div>

            {/* SHOP CONTENT AREA */}
            <div className="bg-white w-full">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        
                        {/* SIDEBAR */}
                        <div className="hidden lg:block space-y-12">
                            <div>
                                <h3 className="font-serif text-xl mb-6 border-b border-[#2A352B]/20 pb-2">Category</h3>
                                <ul className="space-y-3 text-gray-600 text-sm">
                                    <li className="font-bold text-[#2A352B] cursor-pointer">Mushrooms (6)</li>
                                    <li className="hover:text-[#E6C288] cursor-pointer">Adaptogens</li>
                                    <li className="hover:text-[#E6C288] cursor-pointer">Gummies</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-6 border-b border-[#2A352B]/20 pb-2">Purpose</h3>
                                <ul className="space-y-3 text-gray-600 text-sm">
                                    <li className="hover:text-[#E6C288] cursor-pointer">Detox</li>
                                    <li className="hover:text-[#E6C288] cursor-pointer">Immunity</li>
                                    <li className="hover:text-[#E6C288] cursor-pointer">Performance</li>
                                    <li className="hover:text-[#E6C288] cursor-pointer">Relaxation</li>
                                </ul>
                            </div>
                            
                            {/* SIDEBAR WIDGET */}
                            <div className="bg-[#2A352B] p-6 text-white text-center flex flex-col items-center">
                                <img src={featuredSidebarProduct.image} alt="Featured" className="w-24 h-24 mx-auto mb-4 object-contain bg-white rounded-full p-2" />
                                <h4 className="font-serif mb-2">{featuredSidebarProduct.name}</h4>
                                <p className="text-[#E6C288] font-bold mb-4">₹{featuredSidebarProduct.price.toLocaleString()}</p>
                                
                                {/* ORANGE BUTTON FOR SIDEBAR */}
                                <AddToCartButton 
                                    product={featuredSidebarProduct}
                                    onNavigate={onNavigate}
                                    variant="secondary" 
                                />
                            </div>
                        </div>

                        {/* PRODUCT GRID */}
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {products.map((product) => (
                                    <div key={product.id} className="group flex flex-col h-full">
                                        <div className="relative bg-[#F9F8F6] aspect-square flex items-center justify-center mb-4 overflow-hidden">
                                            {product.sale && <span className="absolute top-3 right-3 bg-[#3E3E20] text-white text-[10px] font-bold px-2 py-1 uppercase">Sale!</span>}
                                            <img src={product.image} alt={product.name} className="w-[70%] h-[70%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                                            
                                            {/* We removed the old hover button, as we now use the static one below for mobile friendliness */}
                                        </div>
                                        
                                        <h3 className="font-serif text-[#2A352B] mb-1">{product.name}</h3>
                                        
                                        <div className="text-sm mb-4">
                                            {product.oldPrice && <span className="text-gray-400 line-through mr-2">₹{product.oldPrice.toLocaleString()}</span>}
                                            <span className="font-bold text-[#2A352B]">₹{product.price.toLocaleString()}</span>
                                        </div>

                                        {/* GREEN BUTTON FOR GRID */}
                                        <div className="mt-auto">
                                            <AddToCartButton 
                                                product={product}
                                                onNavigate={onNavigate}
                                                variant="primary"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#F9F8F6] p-10 relative">
                        <Star className="text-[#E6C288] w-8 h-8 mb-4" fill="currentColor" />
                        <p className="font-serif text-xl text-[#2A352B] mb-8 leading-relaxed">
                            "Beautiful quality and gentle but real results. My stress levels dropped in days. I add it to my coffee every morning."
                        </p>
                        <div className="flex items-center gap-4">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover" />
                            <div><h5 className="font-bold text-sm">John</h5><span className="text-xs text-gray-500">Chicago, IL</span></div>
                        </div>
                    </div>
                    <div className="bg-[#F9F8F6] p-10 relative">
                        <Star className="text-[#E6C288] w-8 h-8 mb-4" fill="currentColor" />
                        <p className="font-serif text-xl text-[#2A352B] mb-8 leading-relaxed">
                            "Feels premium and intentional. My mind stays sharper and I don't get overwhelmed as easily. Highly recommend."
                        </p>
                        <div className="flex items-center gap-4">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover" />
                            <div><h5 className="font-bold text-sm">Samantha</h5><span className="text-xs text-gray-500">Houston, TX</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Shop;
