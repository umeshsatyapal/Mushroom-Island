import React, { createContext, useContext, useState } from 'react';

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    // UPDATED: Now accepts an optional quantity number
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (id: number) => void;
    cartTotal: number;
    cartCount: number;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // UPDATED LOGIC: Accepts quantity, defaults to 1 if not provided
    const addToCart = (product: Product, quantity: number = 1) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            // Add the specific quantity requested
            return [...prevItems, { ...product, quantity: quantity }];
        });
    };

    const removeFromCart = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = items.reduce((count, item) => count + item.quantity, 0);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <CartContext.Provider value={{ 
            items, 
            addToCart, 
            removeFromCart, 
            cartTotal, 
            cartCount, 
            isCartOpen, 
            openCart, 
            closeCart 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};
