import React from 'react';
import { ShoppingBag, Menu, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext'; // <--- FIXED PATH

interface NavbarProps {
    onNavigate: (page: 'home' | 'shop' | 'product-single' | 'cart') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    const { cartTotal, cartCount } = useCart();

    return (
        <>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');`}
            </style>

            <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-[#E6C288]">
                <div className="md:hidden">
                    <Menu className="w-6 h-6" />
                </div>

                {/* LEFT: Navigation Links */}
                <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase items-center">
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="hover:text-white transition-colors uppercase tracking-[0.2em]"
                    >
                        Home
                    </button>

                    {/* SHOP DROPDOWN */}
                    <div className="relative group py-2">
                        <button 
                            onClick={() => onNavigate('shop')} 
                            className="hover:text-white transition-colors uppercase tracking-[0.2em]"
                        >
                            Shop
                        </button>

                        <div className="absolute top-full left-0 mt-0 w-48 bg-[#FFC470] shadow-lg rounded-[2px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                            <div className="flex flex-col py-0 text-[#0F281E] normal-case tracking-normal font-sans font-medium text-sm">
                                <button 
                                    onClick={() => onNavigate('product-single')}
                                    className="px-6 py-3 hover:bg-[#2A352B] hover:text-[#E6C288] transition-colors block text-left"
                                >
                                    Product Single
                                </button>
                                <button 
                                    onClick={() => onNavigate('cart')}
                                    className="px-6 py-3 hover:bg-[#2A352B] hover:text-[#E6C288] transition-colors block text-left"
                                >
                                    Cart
                                </button>
                                <button className="px-6 py-3 hover:bg-[#2A352B] hover:text-[#E6C288] transition-colors block text-left">
                                    Checkout
                                </button>
                                <button className="px-6 py-3 hover:bg-[#2A352B] hover:text-[#E6C288] transition-colors block text-left">
                                    My account
                                </button>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => onNavigate('home')} 
                        className="hover:text-white transition-colors uppercase tracking-[0.2em]"
                    >
                        Our Story
                    </button>
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="hover:text-white transition-colors uppercase tracking-[0.2em]"
                    >
                        Learn
                    </button>
                </div>

                {/* CENTER: Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap cursor-pointer" onClick={() => onNavigate('home')}>
                    <span 
                        style={{ fontFamily: '"Kaushan Script", cursive' }} 
                        className="text-3xl md:text-5xl text-white block leading-none"
                    >
                        Mushroom Island
                    </span>
                </div>

                {/* RIGHT: Utilities */}
                <div className="flex items-center gap-6 font-sans">
                    <a href="#" className="hidden md:block text-white text-sm font-medium hover:text-[#E6C288] transition-colors">
                        Get 10% off
                    </a>
                    <a href="#" className="hidden md:block text-white text-sm font-medium hover:text-[#E6C288] transition-colors">
                        Login
                    </a>

                    {/* WIRED UP CART BUTTON */}
                    <button 
                        onClick={() => onNavigate('cart')}
                        className="bg-[#FFC470] text-[#1a241b] px-4 py-2 rounded-[2px] font-medium flex items-center gap-3 hover:bg-[#E6C288] transition-colors shadow-md"
                    >
                        <span>₹{cartTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <div className="relative">
                            <ShoppingCart size={18} />
                            <span className="absolute -top-2 -right-2 bg-[#0F281E] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        </div>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
