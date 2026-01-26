import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-[#E6C288]">
            {/* Left: Mobile Menu (Hidden on desktop) */}
            <div className="md:hidden">
                <Menu className="w-6 h-6" />
            </div>

            {/* Left: Desktop Links */}
            <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
                <a href="#" className="hover:text-white transition-colors">Shop</a>
                <a href="#" className="hover:text-white transition-colors">Our Story</a>
                <a href="#" className="hover:text-white transition-colors">Learn</a>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                {/* You can replace this text with your Logo Image later */}
                <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-widest uppercase">
                    Mushroom Island
                </span>
            </div>

            {/* Right: Cart & Utilities */}
            <div className="flex items-center gap-6">
                <span className="hidden md:block text-xs font-bold tracking-[0.2em] uppercase text-green-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    AI Lab
                </span>
                <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
                    <ShoppingBag className="w-5 h-5 text-white" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E6C288] rounded-full"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
