import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartSidebarProps {
    onNavigate: (page: 'cart') => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ onNavigate }) => {
    const { isCartOpen, closeCart, items, cartTotal, removeFromCart } = useCart();

    return (
        // We use z-index 100 to ensure it sits on top of everything
        <div className={`fixed inset-0 z-[100] flex justify-end pointer-events-none`}>
            
            {/* 1. Backdrop (Fades in/out) */}
            <div 
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
                    isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeCart}
            ></div>

            {/* 2. The Sliding Panel (Slides Right/Left) */}
            {/* transform translate-x-full hides it off-screen to the right */}
            {/* transform translate-x-0 brings it into view */}
            <div 
                className={`relative w-full max-w-md bg-[#0F281E] h-full shadow-2xl flex flex-col text-white transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto ${
                    isCartOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="font-serif text-2xl tracking-wide text-[#E6C288]">Your Cart</h2>
                    <button onClick={closeCart} className="hover:text-[#E6C288] transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60">
                            <p className="font-serif italic text-lg">Your cart is currently empty.</p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 items-start border-b border-white/5 pb-4 last:border-0 animate-fadeIn">
                                {/* Product Image */}
                                <div className="w-20 h-20 bg-white rounded-[2px] flex items-center justify-center flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain mix-blend-multiply" />
                                </div>
                                
                                {/* Product Details */}
                                <div className="flex-1">
                                    <h4 className="font-serif text-sm text-[#E6C288] mb-1 leading-tight">{item.name}</h4>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-xs text-gray-300">
                                            Qty: {item.quantity}
                                        </p>
                                        <p className="font-bold text-sm">₹{(item.quantity * item.price).toLocaleString()}</p>
                                    </div>
                                </div>

                                {/* Remove Icon */}
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-gray-500 hover:text-red-400 transition-colors pt-1"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="p-6 bg-[#0a1c15] border-t border-white/10">
                        <div className="flex justify-between items-center mb-6 text-lg font-bold">
                            <span>Subtotal:</span>
                            <span className="text-[#E6C288]">₹{cartTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => {
                                    closeCart();
                                    onNavigate('cart');
                                }}
                                className="bg-transparent border border-white text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0F281E] transition-colors"
                            >
                                View Cart
                            </button>
                            <button className="bg-[#C85515] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#A04411] transition-colors">
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
