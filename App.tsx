import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MidSection from './components/MidSection'; // <--- 1. We import the new section

function App() {
  return (
    <div className="min-h-screen bg-[#2A352B]">
      <Navbar />
      <Hero />
      <MidSection /> {/* <--- 2. We place it right here */}
    </div>
  );
}

export default App;
