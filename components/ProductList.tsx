import React from 'react';

const products = [
    {
        id: 1,
        name: "Cordyceps Flowers: Protected",
        price: 2499, // Realistic INR price
        salePrice: null,
        // Using a Cordyceps-like placeholder image
        image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1974&auto=format&fit=crop", 
        isSale: false
    },
    {
        id: 2,
        name: "Chaga: Strength From Within",
        price: 1499,
        salePrice: null,
        // Using a Chaga-like placeholder image
        image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=2034&auto=format&fit=crop",
        isSale: false
    },
    {
        id: 3,
        name: "Ginger: Awaken Inner Warmth",
        price: 1499,
        salePrice: 899,
        // Using a Ginger root placeholder
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2080&auto=format&fit=crop",
        isSale: true
    },
    {
        id: 4,
        name: "Astragalus: Rooted In Strength",
        price: 1699,
        salePrice: 1099,
        // Using a Root/Bark placeholder
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2080&auto=format&fit=crop",
        isSale: true
    }
];

const ProductList: React.FC = () => {
    return (
        <section className="py-24 bg-white text-[#2A352B]" id="shop">
            
            {/* 1. Intro Text Section */}
            <div className="max-w-4xl mx-auto px-6 text-center mb-20">
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-gray-900">
                    Our formulas begin in the wild—potent mushrooms and adaptogens refined into 
                    modern rituals for clarity, balance, and grounded energy. 
                    <br className="hidden md:block" />
                    Nature’s depth, distilled into everyday magic.
                </p>
            </div>

            {/* 2. Product Grid (4 Columns) */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {products.map((product) => (
                    <div key={product.id} className="group flex flex-col">
                        
                        {/* Image Container */}
                        <div className="relative bg-[#F4F4F4] aspect-square flex items-center justify-center mb-6 overflow-hidden">
                            {/* Sale Badge */}
                            {product.isSale && (
                                <span className="absolute top-4 right-4 bg-[#3E3E20] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
                                    Sale!
                                </span>
                            )}
                            
                            {/* Product Image */}
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-[80%] h-[80%] object-contain mix-blend-multiply filter contrast-110 group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-[15px] font-serif text-gray-900 mb-2 leading-tight">
                            {product.name}
                        </h3>

                        {/* Price */}
                        <div className="text-sm font-medium mb-5 text-gray-800">
                            {product.isSale ? (
                                <div className="flex gap-2">
                                    <span className="text-gray-400 line-through decoration-1">
                                        ₹{product.price.toLocaleString('en-IN')}
                                    </span>
                                    <span className="font-bold border-b-2 border-[#E6C288]/50">
                                        ₹{product.salePrice?.toLocaleString('en-IN')}
                                    </span>
                                </div>
                            ) : (
                                <span>₹{product.price.toLocaleString('en-IN')}</span>
                            )}
                        </div>

                        {/* 'Add to Cart' Button */}
                        <button className="mt-auto w-max bg-[#0F281E] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 hover:bg-[#1a4030] transition-colors duration-300">
                            Add to cart
                        </button>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductList;
