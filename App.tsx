import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList'; // <--- FIXED: Matching your file name
import MidSection from './components/MidSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#2A352B]">
      <Navbar />
      <main>
        <Hero />
        {/* We use the component from your ProductList.tsx file here */}
        <ProductList /> 
        <MidSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
