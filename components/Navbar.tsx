import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <>
            {/* 1. Load the Brush Font (Kaushan Script) to match the 'Myco' style 
               This runs automatically when the Navbar loads.
            */}
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');`}
            </style>

            <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-[#E6C288]">
                {/* Left: Mobile Menu */}
                <div className="md:hidden">
                    <Menu className="w-6 h-6" />
                </div>

                {/* Left: Desktop Links */}
                <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
                    <a href="#" className="hover:text-white transition-colors">Shop</a>
                    <a href="#" className="hover:text-white transition-colors">Our Story</a>
                    <a href="#" className="hover:text-white transition-colors">Learn</a>
                </div>

                {/* Center: BRAND LOGO (Text styled like the Image) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
                    <span 
                        style={{ fontFamily: '"Kaushan Script", cursive' }} 
                        className="text-3xl md:text-5xl text-white block leading-none"
                    >
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
        </>
    );
};

export default Navbar;
