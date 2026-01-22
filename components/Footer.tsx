
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-mushroom-950 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-serif text-2xl font-bold mb-6">Mushroom Island</h3>
                        <p className="text-mushroom-200 text-sm leading-relaxed mb-6">
                            Real Mushrooms was born from a decades-long mission to transform the functional mushroom industry from the ground up through unmatched quality, responsible sourcing, and rigorous testing.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-mushroom-300 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-white hover:text-mushroom-300 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-white hover:text-mushroom-300 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-white hover:text-mushroom-300 transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-mushroom-300">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Lion's Mane</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Reishi</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cordyceps</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Chaga</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Turkey Tail</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-mushroom-300">Learn</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Mushroom Academy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Recipes</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Science Team</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-mushroom-300">Newsletter</h4>
                        <p className="text-sm text-gray-300 mb-4">Join our community and get 10% off your first order.</p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 bg-white/10 border border-white/20 rounded-l px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
                            />
                            <button className="bg-white text-mushroom-950 px-4 py-2 rounded-r font-bold hover:bg-mushroom-100 transition-colors">
                                JOIN
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <div className="mb-4 md:mb-0">
                        &copy; 2026 Mushroom Island. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Shipping</a>
                    </div>
                </div>
                
                <div className="mt-8 text-[10px] text-gray-600 text-center max-w-3xl mx-auto">
                    † These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
