import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
// ⬇️ NEW: This imports the image securely from your main folder
import logoImg from '../logo.jpg';

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
            <div className="bg-greenlays-lime text-greenlays-dark text-xs text-center py-2 font-bold tracking-widest uppercase">
                Free Shipping over ₹1,499 + 30-Day Returns
            </div>

            {/* Main Header */}
            <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#2A352B] shadow-xl py-2' : 'bg-transparent py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        
                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white p-2">
                                <Menu size={24} />
                            </button>
                        </div>

                        {/* Navigation - Desktop */}
                        <nav className="hidden md:flex space-x-10 text-xs font-bold tracking-[0.2em] text-gray-300 uppercase items-center">
                            <a href="#" className="hover:text-greenlays-lime transition-colors">Shop</a>
                            <a href="#" className="hover:text-greenlays-lime transition-colors">Our Story</a>
                            <a href="#" className="hover:text-greenlays-lime transition-colors">Learn</a>
                        </nav>

                        {/* LOGO SECTION */}
                        <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none px-4">
                           <a href="#" className="group relative">
                               {/* Updated to use the imported image variable */}
                               <img 
                                src={logoImg} 
                                alt="Mushroom Island" 
                                className="h-20 w-20 rounded-full object-cover border-2 border-greenlays-lime/20 group-hover:border-greenlays-lime transition-all duration-300 shadow-2xl"
                               />
                           </a>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-6">
                            <button 
                                onClick={onOpenAI} 
                                className="hidden md:flex items-center gap-2 text-greenlays-lime font-bold text-xs uppercase tracking-wider hover:text-white transition-colors"
                            >
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-greenlays-lime opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-greenlays-lime"></span>
                                </span>
                                AI Lab
                            </button>

                            <div className="flex items-center space-x-4 text-white">
                                <button className="hover:text-greenlays-lime transition-colors relative">
                                    <ShoppingBag size={20} />
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-greenlays-lime text-[10px] font-bold text-greenlays-dark">0</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="relative z-50 w-4/5 max-w-xs bg-[#2A352B] h-full shadow-2xl flex flex-col border-r border-white/10">
                        <div className="flex justify-between items-center p-6 border-b border-white/10">
                            <span className="font-serif text-xl font-bold text-white">Menu</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="flex-1 p-6 space-y-6">
                            <a href="#" className="block text-xl font-serif text-white hover:text-greenlays-lime">Shop</a>
                            <a href="#" className="block text-xl font-serif text-white hover:text-greenlays-lime">About</a>
                            <a href="#" className="block text-xl font-serif text-white hover:text-greenlays-lime">Learn</a>
                            <button onClick={() => { onOpenAI(); setIsMobileMenuOpen(false); }} className="w-full mt-4 bg-greenlays-lime text-greenlays-dark py-4 rounded-lg font-bold uppercase tracking-wider">
                                Open AI Lab
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
