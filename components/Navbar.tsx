import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

// Define Props so Navbar can talk to App.tsx
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

                {/* LINKS: Added onClick to switch pages */}
                <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
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

                {/* LOGO: Clicks go to Home */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap cursor-pointer" onClick={() => onNavigate('home')}>
                    <span 
                        style={{ fontFamily: '"Kaushan Script", cursive' }} 
                        className="text-3xl md:text-5xl text-white block leading-none"
                    >
                        Mushroom Island
                    </span>
                </div>

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
