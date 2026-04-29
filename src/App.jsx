import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import ProjectGallery from './ProjectGallery';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Top Navigation bar */}
      <Navbar />

      {/* 2. Main Welcome Section */}
      <Hero />

      {/* 3. Services Section with Map Method */}
      <Services />

      {/* 4. About Us with NX Software Image */}
      <About />
      <ProjectGallery/>
      {/* Footer (Chota sa placeholder) */}
      <footer className="bg-slate-900 text-white py-10 text-center">
        <p>© 2026 Balaji CAD Solutions. All Rights Reserved.</p>
        <p className="text-gray-400 text-sm mt-2">Designed by The Fintech Mentor</p>
      </footer>
    </div>
  );
}

export default App;