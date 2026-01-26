import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import Shop from './components/Shop'; // Import the new page

function App() {
  // State to track which page is visible
  const [currentPage, setCurrentPage] = useState<'home' | 'shop'>('home');

  return (
    <div className="min-h-screen bg-[#2A352B]">
      {/* Navbar gets the function to change pages */}
      <Navbar onNavigate={setCurrentPage} />

      {/* CONDITIONAL RENDERING: Show Home OR Shop */}
      {currentPage === 'home' ? (
        <main>
          <Hero />
          {/* This ProductList is the 4-column teaser on the homepage */}
          <ProductList /> 
          <MidSection />
          <Footer />
        </main>
      ) : (
        <main>
          {/* This is the FULL Shop Page */}
          <Shop />
        </main>
      )}
    </div>
  );
}

export default App;
