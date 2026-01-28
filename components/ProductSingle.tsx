import React, { useState } from 'react';
import { Search, Minus, Plus } from 'lucide-react';
import Footer from './Footer';
import AddToCartButton from './AddToCartButton'; // Import the smart button

// Define Props
interface ProductSingleProps {
    onNavigate: (page: 'home' | 'shop' | 'product-single' | 'cart') => void;
}

// Data for the MAIN product shown at the top
const mainProduct = {
    id: 5, 
    name: "Reishi: Drift Into Calmness", 
    price: 1699, // Current selling price
    image: "https://images.unsplash.com/photo-1596483789033-288219463c22?q=80&w=1974&auto=format&fit=crop"
};

// Data for Related Products
const relatedProducts = [
    { id: 1, name: "Cordyceps Flowers: Protected", price: 2499, salePrice: null, image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1974&auto=format&fit=crop" },
    { id: 2, name: "Chaga: Strength From Within", price: 1499, salePrice: null, image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=2034&auto=format&fit=crop" },
    { id: 3, name: "Ginger: Awaken Inner Warmth", price: 1499, salePrice: 899, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2080&auto=format&fit=crop", sale: true },
    { id: 4, name: "Astragalus: Rooted In Strength", price: 1699, salePrice: 1099, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2080&auto=format&fit=crop", sale: true }
];

const ProductSingle: React.FC<ProductSingleProps> = ({ onNavigate }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="bg-[#2A352B] min-h-screen pt-20">
            
            {/* SECTION 1: PRODUCT DETAIL */}
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left: Product Image */}
                    <div className="bg-[#F4F4F4] aspect-square relative flex items-center justify-center rounded-sm shadow-xl">
                        <div className="absolute top-4 right-4 text-[#2A352B]">
                             <Search size={24} />
                        </div>
                        <img 
                            src={mainProduct.image} 
                            alt={mainProduct.name} 
                            className="w-[80%] h-[80%] object-contain mix-blend-multiply"
                        />
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-5xl font-serif font-light mb-4 leading-tight">Reishi: Drift Into <br/> Calmness</h1>
                            <div className="flex items-center gap-3 text-lg">
                                <span className="line-through opacity-60">₹2,499</span>
                                <span className="font-bold border-b border-white">₹1,699</span>
                            </div>
                        </div>

                        <p className="opacity-90 leading-relaxed max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>

                        {/* ACTION AREA */}
                        <div className="flex gap-4">
                            {/* Quantity Selector (Visual only for now, keeps UI intact) */}
                            <div className="bg-white text-[#2A352B] flex items-center px-4 rounded-[2px] h-auto">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14}/></button>
                                <span className="w-10 text-center font-bold">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}><Plus size={14}/></button>
                            </div>
                            
                            {/* SMART ADD TO CART BUTTON (Orange Variant) */}
                            {/* We use flex-1 to make it stretch like the original design */}
                            <div className="flex-1"> 
                                <AddToCartButton 
                                    product={mainProduct}
                                    onNavigate={onNavigate}
                                    variant="secondary" // Orange style
                                />
                            </div>
                        </div>

                        {/* Testimonial Card */}
                        <div className="bg-[#1a241b] p-6 rounded-[2px] mt-8 flex gap-6 items-center shadow-lg border border-white/5">
                            <div className="flex-1">
                                <p className="font-serif italic text-lg leading-snug mb-4 text-gray-200">
                                    "Such an easy ritual to keep. Calmer mood, better focus, and it actually tastes surprisingly delicious."
                                </p>
                                <div>
                                    <h5 className="font-bold text-sm text-[#E6C288]">Mary</h5>
                                    <span className="text-xs opacity-60">Miami, FL</span>
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" className="w-16 h-16 object-cover rounded-[2px]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: RELATED PRODUCTS */}
            <div className="bg-white py-24 text-[#2A352B]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-serif mb-12">Others also liked these</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.map((product) => (
                            <div key={product.id} className="group flex flex-col h-full">
                                <div className="relative bg-[#F4F4F4] aspect-square flex items-center justify-center mb-6 relative">
                                    {product.salePrice && <span className="absolute top-2 right-2 bg-[#3E3E20] text-white text-[10px] font-bold px-2 py-1 uppercase">Sale!</span>}
                                    <img src={product.image} alt={product.name} className="w-[80%] h-[80%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                
                                <h3 className="font-serif text-sm mb-2 h-10">{product.name}</h3>
                                
                                <div className="text-sm font-medium mb-4">
                                    {product.salePrice ? (
                                        <>
                                            <span className="text-gray-400 line-through mr-2">₹{product.price}</span>
                                            <span className="border-b border-black">₹{product.salePrice}</span>
                                        </>
                                    ) : (
                                        <span>₹{product.price}</span>
                                    )}
                                </div>

                                {/* SMART BUTTON (Green Variant) */}
                                <div className="mt-auto">
                                    <AddToCartButton 
                                        product={{
                                            ...product,
                                            price: product.salePrice || product.price
                                        }}
                                        onNavigate={onNavigate}
                                        variant="primary"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 3: FEATURES */}
            <div className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520206183501-b80df61043c2?q=80&w=1974&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-black/20"></div> 
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="bg-white p-8 rounded-[2px] relative md:mt-0">
                            <div className="absolute -right-3 top-8 w-6 h-6 bg-[#0F281E] rounded-full flex items-center justify-center border-4 border-white">
                                <div className="w-2 h-2 bg-[#E6C288] rounded-full"></div>
                            </div>
                            <h3 className="text-[#C85515] font-serif text-lg mb-2">Focused Clarity</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Helps clear mental fog and sharpen attention throughout the day. Feel present, grounded, and mentally aligned with ease.
                            </p>
                         </div>
                         <div className="bg-white p-8 rounded-[2px] relative md:mt-24">
                            <div className="absolute -left-3 top-8 w-6 h-6 bg-[#0F281E] rounded-full flex items-center justify-center border-4 border-white">
                                <div className="w-2 h-2 bg-[#E6C288] rounded-full"></div>
                            </div>
                             <h3 className="text-[#C85515] font-serif text-lg mb-2">Balanced Energy</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Steady, clean vitality that supports your day without spikes or crashes. Calm, dependable strength you can return to daily.
                            </p>
                         </div>
                         <div className="bg-white p-8 rounded-[2px] relative md:mt-12">
                            <div className="absolute -left-3 top-8 w-6 h-6 bg-[#0F281E] rounded-full flex items-center justify-center border-4 border-white">
                                <div className="w-2 h-2 bg-[#E6C288] rounded-full"></div>
                            </div>
                             <h3 className="text-[#C85515] font-serif text-lg mb-2">Gentle Resilience</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Supports your body's natural balance over time and change. Helping you adapt, restore, and stay centered with ease.
                            </p>
                         </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default ProductSingle;
