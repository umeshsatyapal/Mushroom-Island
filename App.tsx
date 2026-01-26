import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection'; // <--- The missing piece!
import MidSection from './components/MidSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#2A352B]">
      <Navbar />
      <main>
        <Hero />
        <ProductSection /> {/* Placed in the middle as requested */}
        <MidSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
