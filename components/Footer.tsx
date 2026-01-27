import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

// Custom TikTok Icon since Lucide might not have it in your version
const TikTok = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
    </svg>
);

const Footer: React.FC = () => {
  return (
    <footer>
        {/* =============================================
            PART 1: NEWSLETTER (Stay Connected)
            Moved inside Footer for consistency
           ============================================= */}
        <div className="bg-[#2A352B] text-white py-20 border-b border-[#E6C288]/10 relative overflow-hidden">
             {/* Decorative Background Element */}
             <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
                 <img src="https://www.svgrepo.com/show/50543/mushroom.svg" className="w-full h-full invert" alt="mushroom pattern"/>
             </div>

             <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="font-serif text-3xl md:text-5xl mb-4 text-[#E6C288]">Stay Connected</h2>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                    Join for rituals, botanical education, and early access to limited seasonal blends.
                </p>
                
                {/* Email Signup Form */}
                <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
                    <input 
                        type="email" 
                        placeholder="Insert your email here" 
                        className="flex-1 bg-white text-[#2A352B] px-6 py-4 focus:outline-none placeholder:text-gray-400" 
                    />
                    <button className="bg-[#0F281E] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#1a4030] transition-colors">
                        Join the Ritual
                    </button>
                </div>
             </div>
        </div>

        {/* =============================================
            PART 2: LINKS & SOCIALS (Darker Green)
           ============================================= */}
        <div className="bg-[#0F281E] text-white py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                
                {/* Column 1: About */}
                <div className="space-y-6">
                    <h3 className="font-serif text-2xl mb-6">About</h3>
                    <p className="text-gray-400 leading-relaxed max-w-xs">
                        Potent mushrooms and adaptogens refined into modern rituals for clarity, balance, and grounded energy. Crafted with intention, inspired by the wild.
                    </p>
                    {/* Social Icons with Yellow Backgrounds */}
                    <div className="flex gap-2">
                        <a href="#" className="w-8 h-8 bg-[#E6C288] text-[#0F281E] flex items-center justify-center rounded-sm hover:bg-white transition-colors"><Facebook size={16} /></a>
                        <a href="#" className="w-8 h-8 bg-[#E6C288] text-[#0F281E] flex items-center justify-center rounded-sm hover:bg-white transition-colors"><Youtube size={16} /></a>
                        <a href="#" className="w-8 h-8 bg-[#E6C288] text-[#0F281E] flex items-center justify-center rounded-sm hover:bg-white transition-colors"><Twitter size={16} /></a> {/* Using X/Twitter icon */}
                        <a href="#" className="w-8 h-8 bg-[#E6C288] text-[#0F281E] flex items-center justify-center rounded-sm hover:bg-white transition-colors"><TikTok size={16} /></a>
                    </div>
                </div>

                {/* Column 2: Shop */}
                <div>
                    <h4 className="font-serif text-xl mb-6">Shop</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">Shipping</a></li>
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">Returns</a></li>
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">FAQ</a></li>
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">Customer help</a></li>
                    </ul>
                </div>

                {/* Column 3: Learn */}
                <div>
                    <h4 className="font-serif text-xl mb-6">Learn</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">How to Use</a></li>
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">Recipes</a></li>
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">Ritual Journal</a></li>
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">Sustainability</a></li>
                    </ul>
                </div>

                {/* Column 4: Connect */}
                <div>
                    <h4 className="font-serif text-xl mb-6">Connect</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">Facebook</a></li>
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">YouTube</a></li>
                        <li><a href="#" className="hover:text-[#E6C288] transition-colors">TikTok</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>© 2026 Mushroom Island. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Terms</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Cookies</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
