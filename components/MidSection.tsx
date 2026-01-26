import React from 'react';
import { Star, Leaf, ShieldCheck, Droplet, CheckCircle } from 'lucide-react';

const MidSection: React.FC = () => {
    return (
        <div className="w-full">
            
            {/* =========================================
                SECTION 1: LIFESTYLE & TESTIMONIAL
            ========================================= */}
            <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-[#2A352B]">
                
                {/* Background Image (Placeholder - Swap with your own image later) */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1517093157544-7f55979b19d7?q=80&w=2070&auto=format&fit=crop" 
                        alt="Woman enjoying warm drink" 
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Gradient Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2A352B]/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        
                        {/* LEFT: Text */}
                        <div className="text-white space-y-6 max-w-lg">
                            <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight">
                                Daily wellness that <br/>
                                <span className="text-[#E6C288] italic">fits your rhythm.</span>
                            </h2>
                            <p className="text-lg text-gray-200 leading-relaxed">
                                Add one scoop to coffee, matcha, tea, smoothies, or warm milk. 
                                Turn everyday moments into pure joy — no complication, no overwhelm, 
                                just natural support that works with you.
                            </p>
                        </div>

                        {/* RIGHT: Testimonial Card */}
                        <div className="flex justify-start md:justify-end mt-8 md:mt-0">
                            <div className="bg-white p-8 rounded-sm shadow-2xl max-w-md transform md:translate-y-12 border-l-4 border-[#E6C288]">
                                <div className="flex gap-1 text-[#E6C288] mb-4">
                                    <Star fill="currentColor" size={20} />
                                    <Star fill="currentColor" size={20} />
                                    <Star fill="currentColor" size={20} />
                                    <Star fill="currentColor" size={20} />
                                    <Star fill="currentColor" size={20} />
                                </div>
                                <p className="text-gray-800 text-lg font-serif italic mb-6">
                                    "Feels premium and intentional. My mind stays sharper and I don't get overwhelmed as easily."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
                                            alt="Samantha" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#2A352B]">Samantha</h4>
                                        <span className="text-sm text-gray-500">Houston, TX</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* =========================================
                SECTION 2: FEATURES & BENEFITS
            ========================================= */}
            <section className="py-24 bg-[#F9F8F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="mb-16 max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#2A352B] mb-6">
                            Daily wellness that works with you
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                            <p>
                                Wild-harvested where nature thrives, extracted for maximum potency, and tested for purity.
                            </p>
                            <p>
                                We source from small growers and sustainable regions where the land, climate, and methods elevate the medicine — not dilute it.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        
                        {/* LEFT: Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <img 
                                src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1974&auto=format&fit=crop" 
                                alt="Mushroom in nature" 
                                className="w-full h-64 object-cover rounded-sm transform translate-y-8"
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=2089&auto=format&fit=crop" 
                                alt="Tea preparation" 
                                className="w-full h-64 object-cover rounded-sm"
                            />
                        </div>

                        {/* RIGHT: Feature Cards (The Orange Boxes) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            {/* Card 1 */}
                            <div className="bg-[#C85515] p-6 rounded-sm text-white shadow-lg hover:-translate-y-1 transition-transform duration-300">
                                <Leaf className="mb-4 w-8 h-8 text-[#E6C288]" />
                                <h3 className="font-bold text-lg mb-2">100% Organic & Natural Origin</h3>
                                <p className="text-sm opacity-90">Sourced directly from the earth without synthetic additives.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#C85515] p-6 rounded-sm text-white shadow-lg hover:-translate-y-1 transition-transform duration-300">
                                <ShieldCheck className="mb-4 w-8 h-8 text-[#E6C288]" />
                                <h3 className="font-bold text-lg mb-2">Lab Tested For Safety & Purity</h3>
                                <p className="text-sm opacity-90">Every batch is rigorously tested for heavy metals and toxins.</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#C85515] p-6 rounded-sm text-white shadow-lg hover:-translate-y-1 transition-transform duration-300">
                                <CheckCircle className="mb-4 w-8 h-8 text-[#E6C288]" />
                                <h3 className="font-bold text-lg mb-2">Sustainable & Ethical Farming</h3>
                                <p className="text-sm opacity-90">We protect the land that provides our medicine.</p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-[#C85515] p-6 rounded-sm text-white shadow-lg hover:-translate-y-1 transition-transform duration-300">
                                <Droplet className="mb-4 w-8 h-8 text-[#E6C288]" />
                                <h3 className="font-bold text-lg mb-2">Suitable For All Dietary Plans</h3>
                                <p className="text-sm opacity-90">Vegan, Gluten-Free, Keto, and Paleo friendly.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MidSection;
