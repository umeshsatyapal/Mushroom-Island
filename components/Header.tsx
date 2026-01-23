import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';

interface HeaderProps {
    onOpenAI: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAI }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Announcement Bar */}
            <div className="bg-mushroom-950 text-white text-xs text-center py-2 font-medium tracking-wide">
                FREE SHIPPING OVER ₹1,499 + 30-DAY FREE RETURNS
            </div>

            {/* Main Header */}
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <button onClick={() => setIsMobileMenuOpen(true)} className="text-gray-800 p-2">
                                <Menu size={24} />
                            </button>
                        </div>

                        {/* Navigation - Desktop */}
                        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-gray-800 uppercase">
                            <a href="#" className="hover:text-mushroom-800 transition-colors">Shop</a>
                            <a href="#" className="hover:text-mushroom-800 transition-colors">About</a>
                            <a href="#" className="hover:text-mushroom-800 transition-colors">Learn</a>
                            <button onClick={onOpenAI} className="text-mushroom-800 font-bold hover:text-mushroom-600 transition-colors flex items-center gap-1">
                                <span className="relative flex h-2 w-2 mr-1">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mushroom-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mushroom-500"></span>
                                </span>
                                Mushroom Intelligence
                            </button>
                        </nav>

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none">
                           <a href="#" className="font-serif text-2xl md:text-3xl font-bold text-mushroom-950 tracking-tight">
                               Mushroom Island
                           </a>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-4 text-gray-800">
                            <button className="p-2 hover:text-mushroom-800 transition-colors hidden sm:block">
                                <Search size={20} />
                            </button>
                            <button className="p-2 hover:text-mushroom-800 transition-colors hidden sm:block">
                                <User size={20} />
                            </button>
                            <button className="p-2 hover:text-mushroom-800 transition-colors relative">
                                <ShoppingBag size={20} />
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-mushroom-800 rounded-full">0</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="relative z-50 w-4/5 max-w-xs bg-white h-full shadow-xl flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b">
                            <span className="font-serif text-lg font-bold text-mushroom-950">Menu</span>
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="flex-1 overflow-y-auto p-4 space-y-4">
                            <a href="#" className="block text-lg font-medium text-gray-800">Shop</a>
                            <a href="#" className="block text-lg font-medium text-gray-800">About</a>
                            <a href="#" className="block text-lg font-medium text-gray-800">Learn</a>
                            <button onClick={() => { onOpenAI(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-lg font-bold text-mushroom-800 bg-mushroom-50 p-3 rounded-md">
                                Mushroom Intelligence
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
