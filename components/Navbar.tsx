import React from 'react';
import { ShoppingBag, Menu, ShoppingCart } from 'lucide-react';

interface NavbarProps {
    onNavigate: (page: 'home' | 'shop') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
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
                <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="hover:text-white transition-colors uppercase tracking-[0.2em]"
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => onNavigate('shop')} 
                        className="hover:text-white transition-colors uppercase tracking-[0.2em]"
                    >
                        Shop
                    </button>
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

                {/* RIGHT: New Utilities Layout (Matches your 'Myco' sample) */}
                <div className="flex items-center gap-6 font-sans">
                    {/* Text Links */}
                    <a href="#" className="hidden md:block text-white text-sm font-medium hover:text-[#E6C288] transition-colors">
                        Get 10% off
                    </a>
                    <a href="#" className="hidden md:block text-white text-sm font-medium hover:text-[#E6C288] transition-colors">
                        Login
                    </a>

                    {/* Cart Button */}
                    <button className="bg-[#FFC470] text-[#1a241b] px-4 py-2 rounded-[2px] font-medium flex items-center gap-3 hover:bg-[#E6C288] transition-colors shadow-md">
                        <span>₹0.00</span>
                        <div className="relative">
                            <ShoppingCart size={18} />
                            {/* Badge */}
                            <span className="absolute -top-2 -right-2 bg-[#0F281E] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                0
                            </span>
                        </div>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
