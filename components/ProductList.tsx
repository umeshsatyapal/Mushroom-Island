
import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight, Star } from 'lucide-react';

const ProductList: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-mushroom-950 mb-4">
                        Start with these mushroom supplements
                    </h2>
                    <div className="h-1 w-24 bg-mushroom-800 mx-auto rounded-full"></div>
                </div>

                {/* Grid Layout instead of complex slider for simplicity */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                {product.tag && (
                                    <div className="absolute top-4 left-4 bg-mushroom-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {product.tag}
                                    </div>
                                )}
                                <div className="absolute bottom-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button className="bg-white text-mushroom-950 p-3 rounded-full shadow-lg hover:bg-mushroom-50">
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex text-yellow-400 mb-2">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 group-hover:text-mushroom-800 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-3">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                    <span className="text-lg font-bold text-mushroom-950">{product.price}</span>
                                    <span className="text-xs font-medium text-mushroom-600 uppercase tracking-wide cursor-pointer group-hover:underline">Add to Cart</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
