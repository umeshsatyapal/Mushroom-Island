import { useCart } from '../CartContext'; // Import this

// Inside the component...
const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    const { cartTotal, cartCount } = useCart(); // Get real data

    return (
       // ... existing code ...
       
       {/* WIRED UP CART BUTTON */}
        <button 
            onClick={() => onNavigate('cart')}
            className="bg-[#FFC470] text-[#1a241b] px-4 py-2 rounded-[2px] font-medium flex items-center gap-3 hover:bg-[#E6C288] transition-colors shadow-md"
        >
            {/* Dynamic Price */}
            <span>₹{cartTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            
            <div className="relative">
                <ShoppingCart size={18} />
                {/* Dynamic Count */}
                <span className="absolute -top-2 -right-2 bg-[#0F281E] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                </span>
            </div>
        </button>

       // ... existing code ...
    );
}
