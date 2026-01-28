import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useCart, Product } from '../CartContext'; // Adjust path if needed

interface AddToCartButtonProps {
    product: Product;
    variant?: 'primary' | 'secondary'; // primary = Green, secondary = Orange
    onNavigate: (page: 'cart') => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, variant = 'primary', onNavigate }) => {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        addToCart(product);
        setIsAdded(true);
        // Reset the "tick" visual after 3 seconds if you want, or keep it.
        // For now, we keep it to match your "View cart" flow.
    };

    // Styles based on your reference images
    const baseStyles = "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2";
    
    // Green Button (Grid items)
    const primaryStyles = "bg-[#0F281E] text-white hover:bg-[#1a4030]";
    
    // Orange Button (Sidebar/Widget)
    const secondaryStyles = "bg-[#C85515] text-white hover:bg-[#A04411]";

    const btnClass = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}`;

    return (
        <div className="flex flex-col items-start gap-2 w-max">
            <button 
                onClick={handleClick}
                className={btnClass}
                disabled={isAdded} // Optional: disable if you don't want double clicks immediately
            >
                {isAdded ? (
                    <>Add to cart <Check size={14} /></>
                ) : (
                    "Add to cart"
                )}
            </button>
            
            {/* The 'View Cart' link that appears after clicking */}
            {isAdded && (
                <button 
                    onClick={() => onNavigate('cart')}
                    className="text-xs font-bold underline text-[#0F281E] hover:text-[#C85515] transition-colors ml-1"
                >
                    View cart
                </button>
            )}
        </div>
    );
};

export default AddToCartButton;
