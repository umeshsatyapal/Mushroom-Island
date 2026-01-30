import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useCart, Product } from '../context/CartContext'; 

interface AddToCartButtonProps {
    product: Product;
    variant?: 'primary' | 'secondary'; 
    onNavigate: (page: 'cart') => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, variant = 'primary', onNavigate }) => {
    const { addToCart, openCart } = useCart(); // Get openCart function
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        addToCart(product);
        setIsAdded(true);
    };

    const baseStyles = "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2";
    const primaryStyles = "bg-[#0F281E] text-white hover:bg-[#1a4030]";
    const secondaryStyles = "bg-[#C85515] text-white hover:bg-[#A04411]";

    const btnClass = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}`;

    return (
        <div className="flex flex-col items-start gap-2 w-max">
            <button 
                onClick={handleClick}
                className={btnClass}
                disabled={isAdded} 
            >
                {isAdded ? (
                    <>Add to cart <Check size={14} /></>
                ) : (
                    "Add to cart"
                )}
            </button>
            
            {/* "View cart" now opens the Sidebar */}
            {isAdded && (
                <button 
                    onClick={openCart}
                    className="text-xs font-bold underline text-[#0F281E] hover:text-[#C85515] transition-colors ml-1"
                >
                    View cart
                </button>
            )}
        </div>
    );
};

export default AddToCartButton;
