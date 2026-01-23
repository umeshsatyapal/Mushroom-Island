import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#023428] text-white pt-24 pb-8 font-sans">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                
                {/* Top Section: 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    
                    {/* Column 1: About & Social Icons */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-3xl font-light tracking-wide text-white">About</h3>
                        <p className="text-gray-300 text-sm leading-7 pr-4">
                            Potent mushrooms and adaptogens refined into modern rituals for clarity, balance, and grounded energy. Crafted with intention, inspired by the wild.
                        </p>
                        
                        {/* Gold Social Buttons */}
                        <div className="flex gap-3 pt-2">
                            <a href="#" className="bg-[#F3C969] text-[#023428] p-3 rounded hover:bg-white hover:scale-110 transition-all duration-300">
                                <Facebook size={20} fill="currentColor" strokeWidth={0} />
                            </a>
                            <a href="#" className="bg-[#F3C969] text-[#023428] p-3 rounded hover:bg-white hover:scale-110 transition-all duration-300">
                                <Youtube size={20} fill="currentColor" strokeWidth={0} />
                            </a>
                             {/* Using Twitter icon as X placeholder */}
                            <a href="#" className="bg-[#F3C969] text-[#023428] p-3 rounded hover:bg-white hover:scale-110 transition-all duration-300">
                                <Twitter size={20} fill="currentColor" strokeWidth={0} />
                            </a>
                             <a href="#" className="bg-[#F3C969] text-[#023428] p-3 rounded hover:bg-white hover:scale-110 transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Shop */}
                    <div>
                        <h3 className="font-serif text-3xl font-light tracking-wide text-white mb-8">Shop</h3>
                        <ul className="space-y-4 text-sm text-gray-200">
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">Shipping</a></li>
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">Returns</a></li>
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">Customer help</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Learn */}
                    <div>
                        <h3 className="font-serif text-3xl font-light tracking-wide text-white mb-8">Learn</h3>
                        <ul className="space-y-4 text-sm text-gray-200">
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">How to Use</a></li>
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">Recipes</a></li>
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">Ritual Journal</a></li>
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">Sustainability</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="font-serif text-3xl font-light tracking-wide text-white mb-8">Connect</h3>
                        <ul className="space-y-4 text-sm text-gray-200">
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">YouTube</a></li>
                            <li><a href="#" className="hover:text-[#F3C969] transition-colors">TikTok</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 bg-[#022c22] -mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12 pb-8 mt-12">
                    <div className="mb-4 md:mb-0">
                        &copy; 2026 Mushroom Island. All rights reserved.
                    </div>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
