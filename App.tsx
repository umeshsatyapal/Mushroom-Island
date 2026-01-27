import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import Shop from './components/Shop'; 
import ProductSingle from './components/ProductSingle'; // <--- Import New Component

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'shop' | 'product-single'>('home');

  return (
    <div className="min-h-screen bg-[#2A352B]">
      {/* Navbar with navigation logic */}
      <Navbar onNavigate={setCurrentPage} />

      {/* PAGE ROUTING */}
      {currentPage === 'home' && (
        <main>
          <Hero />
          <ProductList /> 
          <MidSection />
          <Footer />
        </main>
      )}

      {currentPage === 'shop' && (
        <main>
          <Shop />
        </main>
      )}

      {currentPage === 'product-single' && (
        <main>
          <ProductSingle />
        </main>
      )}
    </div>
  );
}

export default App;
