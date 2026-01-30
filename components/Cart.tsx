import React from 'react';
import { ShoppingBag, Trash2 } from 'lucide-react';
import Footer from './Footer';
import { useCart } from '../context/CartContext'; // Import context

// Cross-sell Data
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
    // Get actual cart data from Context
    const { items, cartTotal, removeFromCart } = useCart();

    return (
        <div className="bg-[#2A352B] min-h-screen pt-20">
            
            {/* HERO TITLE */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
                <h1 className="text-4xl md:text-5xl font-serif text-white text-center md:text-left">
                    {items.length > 0 ? "Checkout" : "You are one step closer to magic."}
                </h1>
            </div>

            {/* CHECKOUT CONTENT AREA */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                
                {/* STATE 1: CART IS EMPTY (Your Original Design) */}
                {items.length === 0 ? (
                    <div>
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
                ) : (
                    /* STATE 2: CHECKOUT SUMMARY (New Design) */
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* LEFT COLUMN: Item List */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-white rounded-[2px] p-6 shadow-sm">
                                <h2 className="font-serif text-2xl text-[#2A352B] mb-6 border-b pb-4">Order Details</h2>
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-6 py-6 border-b border-gray-100 last:border-0 items-center">
                                        <div className="w-24 h-24 bg-[#F4F4F4] flex items-center justify-center flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-20 h-20 object-contain mix-blend-multiply" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-serif text-[#2A352B] text-lg">{item.name}</h3>
                                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-[#2A352B] text-lg">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-xs text-red-500 underline mt-2 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-[2px] p-8 shadow-sm sticky top-24">
                                <h3 className="font-serif text-xl text-[#2A352B] mb-6">Order Summary</h3>
                                
                                <div className="space-y-4 mb-6 text-sm text-[#2A352B]">
                                    <div className="flex justify-between">
                                        <span>Items Subtotal</span>
                                        <span>₹{cartTotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-bold">Free</span>
                                    </div>
                                </div>
                                
                                <div className="border-t border-gray-200 pt-6 mb-8">
                                    <div className="flex justify-between items-center text-xl font-bold text-[#2A352B]">
                                        <span>Total</span>
                                        <span>₹{cartTotal.toLocaleString()}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-[#C85515] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#A04411] transition-colors rounded-[2px]">
                                    Proceed to Payment
                                </button>
                                
                                <button 
                                    onClick={() => onNavigate('shop')}
                                    className="w-full mt-4 text-xs font-bold uppercase tracking-widest text-[#2A352B] hover:text-[#C85515] transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* WHITE CONTENT AREA (Testimonial & Cross-Sell) - Keeping this for professionalism */}
            <div className="bg-white py-24 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    
                    {/* Testimonial Section */}
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

                    {/* "Others Also Bought" Grid */}
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
