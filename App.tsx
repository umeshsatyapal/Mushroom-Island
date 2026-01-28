import React, { useState } from 'react';
import { CartProvider } from './CartContext'; // Import the Provider
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import Shop from './components/Shop'; 
import ProductSingle from './components/ProductSingle';
import Cart from './components/Cart';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'shop' | 'product-single' | 'cart'>('home');

  return (
    // WRAP EVERYTHING IN CART PROVIDER
    <CartProvider>
      <div className="min-h-screen bg-[#2A352B]">
        <Navbar onNavigate={setCurrentPage} />

        {currentPage === 'home' && (
          <main>
            <Hero />
            <ProductList onNavigate={setCurrentPage} /> {/* Pass navigate to grids */}
            <MidSection />
            <Footer />
          </main>
        )}

        {currentPage === 'shop' && (
          <main>
            <Shop onNavigate={setCurrentPage} />
          </main>
        )}

        {currentPage === 'product-single' && (
          <main>
            <ProductSingle onNavigate={setCurrentPage} />
          </main>
        )}

        {currentPage === 'cart' && (
          <main>
            <Cart onNavigate={setCurrentPage} />
          </main>
        )}
      </div>
    </CartProvider>
  );
}

export default App;
